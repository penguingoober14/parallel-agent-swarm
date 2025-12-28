#!/usr/bin/env node
/**
 * PARALLEL AGENT SWARM - Zero Infrastructure Cost
 * 
 * Takes ANY instruction, deploys 100 parallel Claude agents, aggregates results
 * Hierarchical structure: 10 major categories, each with 10 specific tasks
 * 
 * Usage: node swarm.js "Find 100 consumer mobile app opportunities"
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MAX_PARALLEL = 10; // Rate limit friendly

async function swarm(instruction) {
  console.log('\n🧠 STEP 1: Breaking down into 10 major categories, each with 10 tasks...\n');
  
  // Step 1: Decompose into 10x10 hierarchical structure
  const decompose = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: `Break this instruction into a hierarchical structure:

"${instruction}"

Create EXACTLY 10 major categories, each with 10 specific tasks (100 total).

Output as JSON array with this structure:
[
  {
    "category": "Category 1 Name",
    "tasks": [
      {"id":"001","task":"Specific task 1"},
      {"id":"002","task":"Specific task 2"},
      ...10 tasks total
    ]
  },
  ...10 categories total
]

Each category should be a major area/theme, and each task should be specific and independent.`
    }]
  });

  const hierarchical = JSON.parse(decompose.content[0].text.match(/\[[\s\S]*\]/)[0]);
  
  // Flatten for execution
  const tasks = [];
  hierarchical.forEach(category => {
    category.tasks.forEach(task => {
      tasks.push({
        id: task.id,
        category: category.category,
        task: task.task
      });
    });
  });
  
  fs.writeFileSync('./results/tasks.json', JSON.stringify(hierarchical, null, 2));
  fs.writeFileSync('./results/tasks-flat.json', JSON.stringify(tasks, null, 2));
  console.log(`✅ Created 10 categories with ${tasks.length} total tasks\n`);

  // Step 2: Execute in parallel batches
  console.log('🚀 STEP 2: Executing agents...\n');
  const results = [];
  
  for (let i = 0; i < tasks.length; i += MAX_PARALLEL) {
    const batch = tasks.slice(i, i + MAX_PARALLEL);
    const promises = batch.map(async (task) => {
      try {
        const res = await anthropic.messages.create({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          messages: [{
            role: 'user',
            content: `CATEGORY: ${task.category}
TASK: ${task.task}

Execute thoroughly and provide detailed results.`
          }]
        });
        return { 
          id: task.id, 
          category: task.category,
          output: res.content[0].text 
        };
      } catch (err) {
        return { 
          id: task.id, 
          category: task.category,
          error: err.message 
        };
      }
    });
    
    const batchResults = await Promise.all(promises);
    results.push(...batchResults);
    console.log(`✅ Completed ${results.length}/${tasks.length}`);
  }

  fs.writeFileSync('./results/raw-results.json', JSON.stringify(results, null, 2));

  // Step 3: Aggregate by category first, then overall
  console.log('\n📊 STEP 3: Aggregating results by category...\n');
  
  // Group results by category
  const byCategory = {};
  results.forEach(r => {
    if (!byCategory[r.category]) byCategory[r.category] = [];
    byCategory[r.category].push(r);
  });

  // Aggregate each category
  const categorySummaries = [];
  for (const [category, categoryResults] of Object.entries(byCategory)) {
    const catAggregate = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [{
        role: 'user',
        content: `Summarize these results for category "${category}":

${categoryResults.map(r => `${r.id}: ${r.output?.substring(0, 500)}`).join('\n\n')}

Provide: Key findings, Top opportunities, Patterns identified.`
      }]
    });
    
    categorySummaries.push({
      category,
      summary: catAggregate.content[0].text
    });
    console.log(`✅ Aggregated category: ${category}`);
  }

  fs.writeFileSync('./results/category-summaries.json', JSON.stringify(categorySummaries, null, 2));

  // Overall aggregation
  console.log('\n📊 STEP 4: Creating overall summary...\n');
  
  const aggregate = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: `Synthesize these category summaries for: "${instruction}"

${categorySummaries.map(cs => `## ${cs.category}\n${cs.summary}`).join('\n\n')}

Provide: Executive Summary, Cross-Category Insights, Top Opportunities, Key Patterns.`
    }]
  });

  const summary = aggregate.content[0].text;
  fs.writeFileSync('./results/summary.md', summary);

  // Step 5: Next steps
  console.log('🎯 STEP 5: Defining next steps...\n');
  
  const next = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{
      role: 'user',
      content: `Based on 100 agents across 10 categories completing: "${instruction}"

Summary: ${summary.substring(0, 2000)}

Define: Immediate actions, Top 3 priorities, Quick wins, Decisions needed.`
    }]
  });

  const nextSteps = next.content[0].text;
  fs.writeFileSync('./results/next-steps.md', nextSteps);

  // Final report
  const report = `# Swarm Results: ${instruction}

Generated: ${new Date().toLocaleString()}
Structure: 10 categories × 10 tasks = ${results.length} total agents

---

## Category Breakdown

${categorySummaries.map(cs => `### ${cs.category}\n${cs.summary.substring(0, 300)}...\n`).join('\n')}

---

## Overall Summary
${summary}

---

## Next Steps
${nextSteps}

---

## Files Generated
- \`tasks.json\` - Hierarchical 10×10 structure
- \`tasks-flat.json\` - Flattened task list
- \`category-summaries.json\` - Per-category aggregations
- \`raw-results.json\` - All 100 agent outputs
- \`summary.md\` - Overall synthesis
- \`next-steps.md\` - Action plan

See ./results/ for full details.
`;

  fs.writeFileSync('./results/REPORT.md', report);

  console.log('\n✅ COMPLETE\n');
  console.log('📄 Read: ./results/REPORT.md\n');
  console.log(`📊 Structure: 10 categories × 10 tasks = ${results.length} agents\n`);
}

// Run
if (!fs.existsSync('./results')) fs.mkdirSync('./results');
const instruction = process.argv[2];

if (!instruction) {
  console.log('Usage: node swarm.js "Your instruction"');
  process.exit(1);
}

swarm(instruction).catch(console.error);

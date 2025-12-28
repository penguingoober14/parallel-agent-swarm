#!/usr/bin/env node
/**
 * PARALLEL AGENT SWARM - Zero Infrastructure Cost
 * 
 * Takes ANY instruction, deploys 100 parallel Claude agents, aggregates results
 * Hierarchical structure: 10 major tasks, each with 10 sub-tasks
 * 
 * Usage: node swarm.js "Your instruction here"
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MAX_PARALLEL = 10; // Rate limit friendly

async function swarm(instruction) {
  console.log('\n🧠 STEP 1: Breaking down into 10 major tasks, each with 10 sub-tasks...\n');
  
  // Step 1: Decompose into 10x10 hierarchical structure
  const decompose = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: `Analyze this instruction and break it into a hierarchical structure:

"${instruction}"

Think about this strategically:
1. What are the 10 MAJOR distinct areas/aspects/categories needed to fully address this instruction?
2. For each major area, what are 10 SPECIFIC sub-tasks that would comprehensively cover it?

Output as JSON array ONLY with this exact structure:
[
  {
    "major_task": "First major area/aspect",
    "sub_tasks": [
      {"id":"001","task":"Specific sub-task 1"},
      {"id":"002","task":"Specific sub-task 2"},
      {"id":"003","task":"Specific sub-task 3"},
      {"id":"004","task":"Specific sub-task 4"},
      {"id":"005","task":"Specific sub-task 5"},
      {"id":"006","task":"Specific sub-task 6"},
      {"id":"007","task":"Specific sub-task 7"},
      {"id":"008","task":"Specific sub-task 8"},
      {"id":"009","task":"Specific sub-task 9"},
      {"id":"010","task":"Specific sub-task 10"}
    ]
  },
  {
    "major_task": "Second major area/aspect",
    "sub_tasks": [
      {"id":"011","task":"Specific sub-task 1"},
      ...EXACTLY 10 sub-tasks
    ]
  },
  ...EXACTLY 10 major tasks total
]

Requirements:
- EXACTLY 10 major tasks
- EXACTLY 10 sub-tasks per major task (100 total)
- Each sub-task must be specific, independent, and executable
- Major tasks should be comprehensive areas that cover the full scope
- Sub-tasks should be detailed and actionable`
    }]
  });

  const hierarchical = JSON.parse(decompose.content[0].text.match(/\[[\s\S]*\]/)[0]);
  
  // Flatten for execution
  const tasks = [];
  hierarchical.forEach(major => {
    major.sub_tasks.forEach(task => {
      tasks.push({
        id: task.id,
        major_task: major.major_task,
        task: task.task
      });
    });
  });
  
  fs.writeFileSync('./results/tasks-hierarchical.json', JSON.stringify(hierarchical, null, 2));
  fs.writeFileSync('./results/tasks-flat.json', JSON.stringify(tasks, null, 2));
  console.log(`✅ Created 10 major tasks with ${tasks.length} total sub-tasks\n`);

  // Step 2: Execute in parallel batches
  console.log('🚀 STEP 2: Executing 100 agents in parallel...\n');
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
            content: `MAJOR TASK AREA: ${task.major_task}
SPECIFIC TASK: ${task.task}

Execute this task thoroughly and provide detailed results.`
          }]
        });
        return { 
          id: task.id, 
          major_task: task.major_task,
          output: res.content[0].text 
        };
      } catch (err) {
        return { 
          id: task.id, 
          major_task: task.major_task,
          error: err.message 
        };
      }
    });
    
    const batchResults = await Promise.all(promises);
    results.push(...batchResults);
    console.log(`✅ Completed ${results.length}/${tasks.length}`);
  }

  fs.writeFileSync('./results/raw-results.json', JSON.stringify(results, null, 2));

  // Step 3: Aggregate by major task first
  console.log('\n📊 STEP 3: Aggregating results by major task area...\n');
  
  // Group results by major task
  const byMajorTask = {};
  results.forEach(r => {
    if (!byMajorTask[r.major_task]) byMajorTask[r.major_task] = [];
    byMajorTask[r.major_task].push(r);
  });

  // Aggregate each major task
  const majorTaskSummaries = [];
  for (const [majorTask, taskResults] of Object.entries(byMajorTask)) {
    const majorAggregate = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [{
        role: 'user',
        content: `Synthesize these 10 sub-task results for major task area: "${majorTask}"

${taskResults.map(r => `${r.id}: ${r.output?.substring(0, 500)}`).join('\n\n')}

Provide a comprehensive summary of findings, key insights, and patterns for this major task area.`
      }]
    });
    
    majorTaskSummaries.push({
      major_task: majorTask,
      summary: majorAggregate.content[0].text
    });
    console.log(`✅ Aggregated: ${majorTask}`);
  }

  fs.writeFileSync('./results/major-task-summaries.json', JSON.stringify(majorTaskSummaries, null, 2));

  // Overall aggregation
  console.log('\n📊 STEP 4: Creating overall synthesis...\n');
  
  const aggregate = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: `Synthesize the complete results from 100 agents organized into 10 major task areas for: "${instruction}"

${majorTaskSummaries.map(ms => `## ${ms.major_task}\n${ms.summary}`).join('\n\n')}

Provide: Executive Summary, Cross-Area Insights, Key Findings, Overall Patterns.`
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
      content: `Based on 100 agents across 10 major task areas completing: "${instruction}"

Overall Summary: ${summary.substring(0, 2000)}

Define: Immediate actions, Top 3 priorities, Quick wins, Decisions needed.`
    }]
  });

  const nextSteps = next.content[0].text;
  fs.writeFileSync('./results/next-steps.md', nextSteps);

  // Final report
  const report = `# Swarm Results: ${instruction}

Generated: ${new Date().toLocaleString()}
Structure: 10 major tasks × 10 sub-tasks = ${results.length} total agents

---

## Major Task Areas

${majorTaskSummaries.map((ms, i) => `### ${i + 1}. ${ms.major_task}\n${ms.summary.substring(0, 400)}...\n`).join('\n')}

---

## Overall Summary
${summary}

---

## Next Steps
${nextSteps}

---

## Files Generated
- \`tasks-hierarchical.json\` - 10 major tasks with 10 sub-tasks each
- \`tasks-flat.json\` - Flattened list of all 100 tasks
- \`major-task-summaries.json\` - Summary for each of the 10 major areas
- \`raw-results.json\` - All 100 agent outputs
- \`summary.md\` - Overall synthesis
- \`next-steps.md\` - Action plan

See ./results/ for full details.
`;

  fs.writeFileSync('./results/REPORT.md', report);

  console.log('\n✅ COMPLETE\n');
  console.log('📄 Read: ./results/REPORT.md\n');
  console.log(`📊 Structure: 10 major tasks × 10 sub-tasks = ${results.length} agents\n`);
}

// Run
if (!fs.existsSync('./results')) fs.mkdirSync('./results');
const instruction = process.argv[2];

if (!instruction) {
  console.log('Usage: node swarm.js "Your instruction"');
  process.exit(1);
}

swarm(instruction).catch(console.error);

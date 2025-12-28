#!/usr/bin/env node
/**
 * PARALLEL AGENT SWARM - Zero Infrastructure Cost
 * 
 * Takes ANY instruction, deploys 100 parallel Claude agents, aggregates results
 * 
 * Usage: node swarm.js "Find 100 consumer mobile app opportunities"
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MAX_PARALLEL = 10; // Rate limit friendly

async function swarm(instruction) {
  console.log('\n🧠 STEP 1: Breaking down into 100 tasks...\n');
  
  // Step 1: Decompose into 100 tasks
  const decompose = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: `Break this instruction into EXACTLY 100 specific, independent tasks:

"${instruction}"

Output as JSON array ONLY:
[{"id":"001","task":"..."},{"id":"002","task":"..."},...100 total]`
    }]
  });

  const tasks = JSON.parse(decompose.content[0].text.match(/\[[\s\S]*\]/)[0]);
  fs.writeFileSync('./results/tasks.json', JSON.stringify(tasks, null, 2));
  console.log(`✅ Created ${tasks.length} tasks\n`);

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
            content: `TASK: ${task.task}\n\nExecute thoroughly and provide detailed results.`
          }]
        });
        return { id: task.id, output: res.content[0].text };
      } catch (err) {
        return { id: task.id, error: err.message };
      }
    });
    
    const batchResults = await Promise.all(promises);
    results.push(...batchResults);
    console.log(`✅ Completed ${results.length}/${tasks.length}`);
  }

  fs.writeFileSync('./results/raw-results.json', JSON.stringify(results, null, 2));

  // Step 3: Aggregate
  console.log('\n📊 STEP 3: Aggregating results...\n');
  
  const aggregate = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16000,
    messages: [{
      role: 'user',
      content: `Synthesize these 100 agent results for: "${instruction}"

${results.map(r => `${r.id}: ${r.output?.substring(0, 500)}`).join('\n\n')}

Provide: Summary, Key Findings, Patterns, Actionable Insights.`
    }]
  });

  const summary = aggregate.content[0].text;
  fs.writeFileSync('./results/summary.md', summary);

  // Step 4: Next steps
  console.log('🎯 STEP 4: Defining next steps...\n');
  
  const next = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{
      role: 'user',
      content: `Based on 100 agents completing: "${instruction}"

Summary: ${summary.substring(0, 2000)}

Define: Immediate actions, Top 3 priorities, Quick wins, Decisions needed.`
    }]
  });

  const nextSteps = next.content[0].text;
  fs.writeFileSync('./results/next-steps.md', nextSteps);

  // Final report
  const report = `# Swarm Results: ${instruction}

Generated: ${new Date().toLocaleString()}
Agents: ${results.length}/100

---

## Summary
${summary}

---

## Next Steps
${nextSteps}

---

See ./results/ for full details.
`;

  fs.writeFileSync('./results/REPORT.md', report);

  console.log('\n✅ COMPLETE\n');
  console.log('📄 Read: ./results/REPORT.md\n');
}

// Run
if (!fs.existsSync('./results')) fs.mkdirSync('./results');
const instruction = process.argv[2];

if (!instruction) {
  console.log('Usage: node swarm.js "Your instruction"');
  process.exit(1);
}

swarm(instruction).catch(console.error);

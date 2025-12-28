# Parallel Agent Swarm

**Deploy 100 Claude agents in parallel for ANY task. Zero infrastructure cost.**

## Usage

```bash
# Clone
git clone https://github.com/penguingoober14/parallel-agent-swarm.git
cd parallel-agent-swarm

# Install
npm install

# Set API key
export ANTHROPIC_API_KEY=sk-ant-...

# Run
node swarm.js "Your instruction here"
```

## Examples

```bash
# Market research
node swarm.js "Find 100 consumer mobile app opportunities for freemium monetization"

# Business ideas
node swarm.js "Research 100 ways to make money online with low startup costs"

# Competitive analysis
node swarm.js "Analyze 100 trending GitHub repositories for monetization potential"

# Location research
node swarm.js "Research 100 UK cities and rank best places to live for young families"

# Content ideas
node swarm.js "Generate 100 viral TikTok content ideas for tech creators"
```

## How It Works

1. **Decompose** - Claude breaks your instruction into 100 specific tasks
2. **Execute** - 100 agents run in parallel (batches of 10)
3. **Aggregate** - Results synthesized into coherent summary
4. **Next Steps** - Actionable recommendations generated

## Output

All results saved to `./results/`:
- `REPORT.md` - Start here
- `summary.md` - Aggregated findings
- `next-steps.md` - What to do next
- `tasks.json` - All 100 tasks
- `raw-results.json` - Complete agent outputs

## Cost

- **Claude API:** ~£40-60 (depends on task complexity)
- **Infrastructure:** £0
- **Time:** ~30-60 minutes

## What You Can Do

Literally anything that can be parallelized:

- Market research (100 segments, competitors, niches)
- Lead generation (100 prospects, companies, contacts)
- Content creation (100 blog titles, video scripts, tweets)
- Data analysis (100 datasets, trends, patterns)
- Competitor analysis (100 companies, products, strategies)
- Opportunity finding (100 business ideas, side hustles, investments)

**If it can be broken into 100 pieces, this can do it.**

## Repository

https://github.com/penguingoober14/parallel-agent-swarm

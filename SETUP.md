# Setup Instructions

## ✅ Repository Created

Your parallel agent swarm is live at:
**https://github.com/penguingoober14/parallel-agent-swarm**

## Next Steps

### 1. Clone the Repository (On Your Machine)

```bash
git clone https://github.com/penguingoober14/parallel-agent-swarm.git
cd parallel-agent-swarm
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Your Anthropic API Key

Get your API key from: https://console.anthropic.com/settings/keys

**Windows CMD:**
```bash
set ANTHROPIC_API_KEY=sk-ant-your-key-here
```

**Windows PowerShell:**
```powershell
$env:ANTHROPIC_API_KEY="sk-ant-your-key-here"
```

**Mac/Linux:**
```bash
export ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### 4. Run Your First Swarm

```bash
node swarm.js "Research 100 consumer mobile app opportunities for freemium monetization focusing on baby tracking, twin care, UK finance, and productivity tools"
```

### 5. Wait and Monitor

The system will:
- Break your instruction into 100 tasks (1 min)
- Execute 100 agents in parallel (30-50 min)
- Aggregate all results (5 min)
- Define next steps (2 min)

Total: 30-60 minutes

### 6. Read Results

When complete, open:
```
results/REPORT.md
```

This contains everything:
- Summary of findings
- Top opportunities
- Next actions
- What to build first

## Example Commands

```bash
# Market research
node swarm.js "Find 100 consumer mobile app opportunities"

# Business ideas
node swarm.js "Research 100 ways to make money online with £0 startup"

# Lead generation
node swarm.js "Find 100 UK housing associations that need Salesforce"

# Competitive analysis
node swarm.js "Analyze 100 SaaS products for market gaps"

# Location research
node swarm.js "Rank 100 UK cities for young families with twins"
```

## Cost

- Claude API: ~£40-60 per run
- Infrastructure: £0
- GitHub: £0

## Files in Repository

- `swarm.js` - Main execution script (100 lines)
- `package.json` - Dependencies (just Anthropic SDK)
- `README.md` - Documentation
- `.gitignore` - Git ignore rules

## What Happens

1. **Decomposition**: Claude breaks your instruction into 100 specific tasks
2. **Execution**: 100 agents run in parallel (batches of 10)
3. **Aggregation**: Results synthesized into summary
4. **Next Steps**: Action plan generated

## Output Structure

```
results/
├── REPORT.md           # Main report (read this first)
├── summary.md          # Aggregated findings
├── next-steps.md       # Action plan
├── tasks.json          # All 100 tasks
└── raw-results.json    # Complete outputs
```

## Troubleshooting

**"node is not recognized"**
- Install Node.js: https://nodejs.org/

**API key errors**
- Check key starts with `sk-ant-`
- No extra spaces in the key
- Verify at console.anthropic.com

**Rate limit errors**
- Normal, the system handles retries
- Reduce MAX_PARALLEL in swarm.js if needed

**Want faster execution?**
- Edit swarm.js line 13: increase `MAX_PARALLEL` to 20
- Risks rate limits but runs faster

## Ready to Use

The system is ready to deploy 100 parallel agents for ANY task that can be broken into pieces.

**Clone it. Run it. Get results.**

# Scaling Beyond 10 Agents

**How to achieve more parallelism within Claude Max subscription limits.**

## The 10-Agent Reality

Claude Code's Task tool has practical limits on parallel agents:
- **Recommended:** 10 parallel agents per batch
- **Maximum:** ~20 before rate limits
- **Hard limit:** Platform-imposed, not prompt-configurable

## Scaling Options Within Claude Max

### Option 1: Batch Sequential (Built-in)

All patterns in this repo automatically batch when needed:

```
Pattern requests 25 agents
→ Batch 1: Agents 1-10 (parallel)
→ Wait for completion
→ Batch 2: Agents 11-20 (parallel)
→ Wait for completion
→ Batch 3: Agents 21-25 (parallel)
→ Synthesis
```

**Pros:**
- Automatic, no extra work
- Free (included in Max)
- Results identical to true parallel

**Cons:**
- Sequential batches = more time
- 25 agents takes 3x longer than 10

### Option 2: Multi-Terminal Parallelism

Open multiple Claude Code terminals, each running part of the task:

```
Terminal 1: /grid "Map market" --rows=1-2
Terminal 2: /grid "Map market" --rows=3-4
Terminal 3: /grid "Map market" --rows=5
```

Then manually combine results.

**Pros:**
- True parallelism (N terminals × 10 agents)
- Free (included in Max)
- Fast results

**Cons:**
- Manual setup and combination
- Need to split tasks appropriately
- Harder to synthesize across terminals

### Option 3: Smarter Agent Design

Fewer, smarter agents often beat many shallow ones:

| Approach | Agents | Quality |
|----------|--------|---------|
| 100 shallow researchers | 100 | Each does 1 thing superficially |
| 10 deep researchers | 10 | Each does 10 things thoroughly |

Often, 10 deep agents > 100 shallow ones.

**Design principles:**
- Give each agent more scope
- Use multi-step prompts within each agent
- Let agents self-expand when needed

### Option 4: Progressive Depth

Start shallow, go deep only where needed:

```
Level 1: 5 agents scan broadly
→ Identify 3 most promising areas

Level 2: 10 agents deep-dive on those 3
→ Find the answer

Total: 15 agents instead of 100
```

Patterns like FRACTAL and TREE do this automatically.

## Comparison: Claude Max vs API

| Aspect | Claude Max | API Direct |
|--------|------------|------------|
| Cost | £20/month subscription | £40-60 per 100-agent run |
| Parallel limit | ~10-20 | Unlimited (rate limits) |
| True parallelism | No (batched) | Yes |
| Speed (100 tasks) | 30-60 min | 5-10 min |
| Setup | Paste prompt | npm install, API key |
| Interactive | Yes | No (batch job) |

## When You Need True 100+ Parallelism

### Use Cases

- One-time massive research
- Time-sensitive batch jobs
- Automated pipelines
- Situations where speed >> cost

### Options

1. **API Script (swarm-robust.js style)**
   - Requires: Anthropic API key
   - Cost: ~£40-60 per run
   - Speed: 10-30 min for 100 agents

2. **GitHub Actions + API**
   - Spin up multiple runners
   - Each makes parallel API calls
   - Cost: API costs + GitHub minutes

3. **Cloud Functions**
   - AWS Lambda / GCP Functions
   - Each function = one agent call
   - Truly parallel, pay-per-use

## Recommended Approach

### For Most Users: Stay Within Claude Max

```
Use Case                          Approach
─────────────────────────────────────────────────────
Quick research (10 agents)        Single swarm run
Medium task (20-30 agents)        Automatic batching
Large task (50+ agents)           Multi-terminal OR accept longer time
```

### For Power Users: Hybrid

1. Use Claude Max for interactive exploration
2. Once you know what you need, API for scale
3. Bring results back to Claude Max for synthesis

### For Automation: API-based

If you need unattended, scheduled, or high-volume:
- Build API-based solution
- GitHub Actions for scheduling
- Store results in files
- Use Claude Max for analysis

## Pattern-Specific Scaling Notes

### GRID (N×M agents)

5×5 = 25 agents → 3 batches

**Faster alternative:**
- Do 3×3 = 9 agents (1 batch)
- Covers less, but instant

### MONTE CARLO (20+ scenarios)

**Standard:** 2 batches of 10

**Faster alternative:**
- 10 scenarios is often enough
- Statistical confidence not that different

### EVOLUTIONARY (10 agents × N generations)

Generations are sequential anyway (need Gen 1 to breed Gen 2).

**Optimization:** Fewer generations, stronger selection pressure

### TIME-SERIES (50 agents for 5 periods)

**Standard:** 5 sequential batches

**Faster alternative:**
- Focus on current + 1 future period
- 20 agents instead of 50

## Commands for Scaling Control

```
--batch=10       Force specific batch size
--lite           Use reduced agent counts
--depth=2        Limit recursion depth
--generations=3  Fewer evolutionary generations
--scenarios=10   Fewer Monte Carlo scenarios
```

## The Bottom Line

| Goal | Solution |
|------|----------|
| Free + Interactive | Claude Max with batching |
| Free + Faster | Multi-terminal hack |
| Fast + Simple | API (costs money) |
| Massive Scale | Cloud + API |

For 80% of use cases, Claude Max with automatic batching is enough. The 10-agent limit is less limiting than it seems because:
1. Deep > Shallow
2. Batching works automatically
3. Most insights come from first 10 agents anyway

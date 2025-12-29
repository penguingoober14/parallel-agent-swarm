# EVOLUTIONARY OPTIMIZATION MODE

**When to use:** Optimization problems, design refinement, finding optimal configurations through iterative improvement.

## Structure

```
Generations: 5-10 iterations
Per generation: 10 agents (within Claude Code limits)

Gen 1: 10 agents create diverse initial solutions
Fitness: Score each on multiple criteria
Gen 2: Top 3 "breed" (combine elements) + 7 mutations
Gen 3-N: Repeat until convergence or generation limit
```

## Execution Prompt

```
I need you to run EVOLUTIONARY OPTIMIZATION on:

"[USER'S OPTIMIZATION PROBLEM]"

Execute this genetic algorithm in generations:

## Setup: Define Fitness Criteria

First, establish what makes a solution "fit":

| Criterion | Weight | Description |
|-----------|--------|-------------|
| [Criterion 1] | [%] | [What it measures] |
| [Criterion 2] | [%] | [What it measures] |
| [Criterion 3] | [%] | [What it measures] |
| [Criterion 4] | [%] | [What it measures] |
(Weights must sum to 100%)

## Generation 1: Initial Population (10 parallel agents)

Use the Task tool to launch 10 agents IN PARALLEL, each creating a completely different solution:

Agent 1: Create solution emphasizing [criterion 1]
Agent 2: Create solution emphasizing [criterion 2]
Agent 3: Create solution emphasizing [criterion 3]
Agent 4: Create solution with balanced approach
Agent 5: Create unconventional/wild solution
Agent 6: Create minimalist solution
Agent 7: Create comprehensive solution
Agent 8: Create solution inspired by [industry X]
Agent 9: Create solution inspired by [industry Y]
Agent 10: Create random experimental solution

Each agent provides:
- Complete solution specification
- Self-assessed fitness scores for each criterion
- Key differentiating features
- Potential weaknesses

## Fitness Evaluation

Score each solution:
| Solution | Crit 1 | Crit 2 | Crit 3 | Crit 4 | Weighted Total |
|----------|--------|--------|--------|--------|----------------|
| 1        | X/10   | X/10   | X/10   | X/10   | XX/100         |
[Continue for all 10]

Select TOP 3 as "parents" for next generation.

## Generation 2-N: Evolution (10 parallel agents per generation)

For each subsequent generation, launch 10 agents:

**Breeding (3 agents):**
- Agent 1: Combine best elements of Parent 1 + Parent 2
- Agent 2: Combine best elements of Parent 2 + Parent 3
- Agent 3: Combine best elements of Parent 1 + Parent 3

**Mutations (5 agents):**
- Agent 4: Take Parent 1, make one major change
- Agent 5: Take Parent 2, make one major change
- Agent 6: Take Parent 3, make one major change
- Agent 7: Take Parent 1, make random variation
- Agent 8: Take Parent 2, make random variation

**Wild Cards (2 agents):**
- Agent 9: Create entirely new approach (fresh blood)
- Agent 10: Combine ALL three parents

Re-evaluate fitness, select new top 3, repeat.

## Convergence Check

After each generation, check:
- Is the top fitness score still improving?
- Have solutions converged to similar designs?
- Has the generation limit been reached?

If converged or limit reached → proceed to final output.

## Final Output

Present the winning solution with:
1. **Champion Solution:** Full specification
2. **Evolutionary History:** How it evolved from initial designs
3. **Fitness Breakdown:** Scores on each criterion
4. **Trade-offs Made:** What was sacrificed for what
5. **Variants:** Runner-up solutions for consideration
6. **Further Evolution:** What would change with more generations
```

## Example Queries

- "Design the perfect freemium pricing model for my baby app"
- "Optimize my landing page layout for conversions"
- "Evolve the ideal tech stack for my SaaS"
- "Design an optimal marketing headline"
- "Create the best logo concept through evolution"

## Output Format

```markdown
# Evolutionary Optimization: [Problem]

## Fitness Criteria
| Criterion | Weight | Description |
|-----------|--------|-------------|
| Conversion | 30% | Likelihood users convert |
| Revenue | 25% | Expected revenue per user |
| Simplicity | 20% | Easy to understand |
| Ethics | 15% | Fair to users |
| Scalability | 10% | Works at scale |

## Generation 1: Initial Population

### Solution 1: "The Freemium Classic"
**Approach:** Free tier with limited features, paid unlocks all
**Fitness:** Conversion: 7, Revenue: 6, Simplicity: 9, Ethics: 8, Scalability: 8
**Weighted Score:** 73/100

### Solution 2: "The Trial Model"
[...]

[Continue for all 10 solutions]

### Generation 1 Winners
1. Solution 4 (78/100)
2. Solution 7 (76/100)
3. Solution 2 (74/100)

---

## Generation 2: First Evolution

### Bred Solutions
**Solution 2-1:** Hybrid of Solution 4 + Solution 7
[Description]
**Fitness Score:** 82/100

[Continue for all 10]

### Generation 2 Winners
1. Solution 2-1 (82/100)
2. Solution 2-5 (80/100)
3. Solution 2-3 (79/100)

---

## Generation 3: Refinement
[Same format]

---

## Final Champion

### "The Adaptive Freemium" (Score: 89/100)

**Full Specification:**
- Free tier: [Details]
- Paid tier: [Details]
- Pricing: [Details]
- Upsell triggers: [Details]

**Evolution Path:**
Gen 1: Started as "Trial Model" (74/100)
Gen 2: Combined with "Usage-Based" (82/100)
Gen 3: Mutated pricing structure (86/100)
Gen 4: Added adaptive triggers (89/100)

**Fitness Breakdown:**
| Criterion | Score | Notes |
|-----------|-------|-------|
| Conversion | 9/10 | Low barrier + clear value |
| Revenue | 8/10 | Good ARPU, could be higher |
| Simplicity | 9/10 | Easy to explain |
| Ethics | 9/10 | Fair value exchange |
| Scalability | 9/10 | Works globally |

**Trade-offs:**
- Sacrificed maximum revenue for conversion rate
- Chose simplicity over feature granularity

### Runner-Up Solutions
1. "The Premium-First" (87/100) - Higher revenue, lower conversion
2. "The Community Model" (85/100) - Unique but harder to scale

### Further Evolution Potential
With more generations, could optimize:
- A/B test different price points
- Add geographic pricing
- Experiment with hybrid models
```

## Configuration Options

```
/evolutionary "Your problem" --generations=5   # Number of generations
/evolutionary "Your problem" --population=10   # Solutions per generation
/evolutionary "Your problem" --elite=3         # Top solutions to keep
```

## Notes on Agent Limits

Each generation uses 10 parallel agents. For 5 generations:
- Total agents: ~50 (run as 5 sequential batches of 10)
- Estimated time: 10-15 minutes

The evolution happens sequentially (can't run Gen 2 until Gen 1 completes), but within each generation, all 10 agents run in parallel.

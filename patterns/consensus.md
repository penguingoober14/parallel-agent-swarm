# CONSENSUS EMERGENCE MODE

**When to use:** Estimation under uncertainty, forecasting, truth-seeking, finding wisdom of crowds.

## Structure

```
Delphi Method + Statistical Analysis:
Round 1: 10 agents estimate blindly (no influence)
Round 2: See distribution, revise estimates
Round 3: Justify reasoning publicly
Round 4: Final anonymous vote
Round 5: Statistical synthesis with confidence intervals
```

## Execution Prompt

```
I need you to run CONSENSUS EMERGENCE on:

"[ESTIMATION/FORECASTING QUESTION]"

Execute this Delphi-style consensus building:

## Setup: Define the Question

**Question to estimate:** [Clear, specific question]
**Units:** [What units - £, %, years, etc.]
**Bounds:** [Reasonable minimum and maximum]
**Time horizon:** [If applicable]

## Round 1: Blind Estimates (10 parallel agents)

Use the Task tool to launch 10 agents IN PARALLEL.

**Critical:** Agents must NOT see others' estimates.

Each agent provides:
```
ESTIMATE: [Number with units]
CONFIDENCE: [1-10 scale]
KEY ASSUMPTION: [Most important factor]
REASONING: [Brief explanation - 2-3 sentences]
RANGE: [Low - High uncertainty bounds]
```

Agents should use different methodologies:
- Agent 1-2: Bottom-up calculation
- Agent 3-4: Top-down from market size
- Agent 5-6: Comparable analysis (similar cases)
- Agent 7-8: First principles reasoning
- Agent 9-10: Intuitive/gestalt estimate

## Round 2: Informed Revision

Share Round 1 statistics with all agents (NOT individual estimates):
- Median estimate
- Mean estimate
- Range (min to max)
- Standard deviation

Each agent then:
1. Sees the distribution
2. Considers if they're an outlier
3. Can revise estimate OR defend original
4. Must explain revision reasoning

Output:
```
ORIGINAL ESTIMATE: [X]
REVISED ESTIMATE: [Y]
REVISION: [Up/Down/Unchanged]
REASON: [Why revised or why sticking]
NEW CONFIDENCE: [1-10]
```

## Round 3: Public Justification

All revised estimates are revealed with reasoning.

Each agent must:
1. See all other estimates and reasoning
2. Challenge or support other estimates
3. Identify strongest and weakest arguments
4. Make final adjustment if warranted

Output:
```
MY ESTIMATE: [X]
STRONGEST ARGUMENT I AGREE WITH: [Agent N's point about...]
ARGUMENT I DISAGREE WITH: [Agent M's point because...]
FINAL REVISION: [If any]
REMAINING UNCERTAINTY: [What we still don't know]
```

## Round 4: Final Vote (anonymous)

Anonymous final estimates with:
- Point estimate
- Confidence interval (80%)
- Confidence level (1-10)

## Round 5: Statistical Synthesis

Calculate:
1. **Central Estimate:** Weighted median (by confidence)
2. **Range:** 80% confidence interval
3. **Agreement Level:** How much convergence occurred
4. **Key Drivers:** What factors drove the estimate
5. **Residual Uncertainty:** What couldn't be resolved
```

## Example Queries

- "What's the real market size for premature baby apps in the UK?"
- "How long will it take to reach £1M ARR?"
- "What's the probability of success for this startup?"
- "What will Salesforce consulting rates be in 2027?"
- "How many users can we expect in year 1?"

## Output Format

```markdown
# Consensus Emergence: [Question]

## Question Definition
**Question:** What is the realistic annual market size for baby tracking apps in the UK?
**Units:** £ (GBP)
**Bounds:** £1M - £500M
**Time:** Current (2024)

---

## Round 1: Blind Estimates

| Agent | Estimate | Confidence | Method |
|-------|----------|------------|--------|
| 1 | £45M | 6/10 | Bottom-up: users × ARPU |
| 2 | £32M | 5/10 | Bottom-up: births × adoption × spend |
| 3 | £78M | 4/10 | Top-down: % of parenting market |
| 4 | £55M | 5/10 | Top-down: comparable US market scaled |
| 5 | £28M | 7/10 | Comparable: similar app categories |
| 6 | £40M | 6/10 | Comparable: European markets |
| 7 | £60M | 3/10 | First principles: willingness to pay |
| 8 | £35M | 5/10 | First principles: problem severity |
| 9 | £50M | 4/10 | Intuitive estimate |
| 10 | £42M | 5/10 | Intuitive estimate |

### Round 1 Statistics
- **Median:** £43.5M
- **Mean:** £46.5M
- **Range:** £28M - £78M
- **Std Dev:** £14.2M

### Distribution
```
£20-30M:  ██ (2 agents)
£30-40M:  ███ (3 agents)
£40-50M:  ███ (3 agents)
£50-60M:  █ (1 agent)
£70-80M:  █ (1 agent)
```

---

## Round 2: Informed Revision

After seeing distribution (but not individual estimates):

| Agent | Original | Revised | Change | Reason |
|-------|----------|---------|--------|--------|
| 1 | £45M | £45M | — | Comfortable with position near median |
| 2 | £32M | £38M | +19% | Others see larger market, re-checked assumptions |
| 3 | £78M | £58M | -26% | May have overestimated, too far from consensus |
| 4 | £55M | £50M | -9% | Slight adjustment toward median |
| 5 | £28M | £35M | +25% | Others may know things I don't |
| 6 | £40M | £42M | +5% | Small adjustment, methodology solid |
| 7 | £60M | £55M | -8% | Accept some overestimation |
| 8 | £35M | £40M | +14% | Market may be bigger than assumed |
| 9 | £50M | £48M | -4% | Fine-tuning |
| 10 | £42M | £44M | +5% | Slight adjustment |

### Round 2 Statistics
- **Median:** £44.5M
- **Mean:** £45.5M
- **Range:** £35M - £58M (narrowed!)
- **Std Dev:** £7.3M (down from £14.2M)

**Convergence:** 49% reduction in standard deviation

---

## Round 3: Public Justification

### Agent 1's Position (£45M)
> "My bottom-up: 650K births/year × 40% app adoption × 3 years active × £58 ARPU = £45M.
> I agree with Agent 5's comparable analysis - similar apps in similar markets support this range.
> I disagree with Agent 3's original £78M - that assumes too high adoption."

### Agent 3's Position (£58M)
> "Revised down from £78M. I was using US benchmarks without proper adjustment.
> Strongest argument: Agent 2's births × adoption approach is more grounded.
> Still believe market could be higher if premium segment grows."

[Continue for key agents]

### Areas of Agreement
- Market is £35-55M range (high confidence)
- Adoption rates ~35-45% of new parents
- ARPU £40-70 depending on premium features

### Areas of Disagreement
- Premium segment size (some see £10M, others £25M)
- Growth trajectory (stable vs growing 15%/year)

---

## Round 4: Final Anonymous Vote

| Agent | Final Estimate | 80% CI | Confidence |
|-------|----------------|--------|------------|
| 1 | £45M | £38-52M | 7/10 |
| 2 | £40M | £32-48M | 6/10 |
| 3 | £52M | £40-65M | 5/10 |
| 4 | £48M | £40-56M | 6/10 |
| 5 | £38M | £30-45M | 7/10 |
| 6 | £44M | £38-50M | 7/10 |
| 7 | £50M | £40-60M | 5/10 |
| 8 | £42M | £35-48M | 6/10 |
| 9 | £46M | £38-54M | 5/10 |
| 10 | £45M | £38-52M | 6/10 |

---

## Round 5: Statistical Synthesis

### Final Consensus

**Central Estimate:** £45M
(Confidence-weighted median)

**80% Confidence Interval:** £38M - £52M

**Distribution of Final Estimates:**
```
£35-40M:  ██ (2)
£40-45M:  ████ (4)
£45-50M:  ███ (3)
£50-55M:  █ (1)
```

### Convergence Analysis

| Metric | Round 1 | Round 4 | Change |
|--------|---------|---------|--------|
| Range | £50M | £14M | -72% |
| Std Dev | £14.2M | £4.1M | -71% |
| Agreement | 40% | 85% | +45pp |

### Confidence Assessment

**High Confidence (80%+):**
- Market exists and is £30M+ minimum
- Adoption among new parents is 30-50%
- Room for premium tier exists

**Medium Confidence (50-80%):**
- Exact market size £40-50M
- Growth rate 10-20%/year
- Premium tier worth £8-15M

**Low Confidence (<50%):**
- Long-term trajectory (could plateau or boom)
- International expansion potential
- Impact of AI features

### Key Drivers of Estimate

1. **UK birth rate** (650K/year) - Baseline
2. **App adoption rate** (35-45%) - Biggest uncertainty
3. **ARPU** (£40-70) - Determines revenue
4. **Active years** (2-3) - Affects total market

### Remaining Uncertainty

- Will adoption rates continue rising?
- How price-sensitive is the market?
- What's the impact of NHS apps?

---

## Conclusion

**Answer:** The UK baby tracking app market is approximately **£45M annually** (80% CI: £38M-£52M).

**Confidence Level:** Moderate-High (convergence achieved, methodology triangulated)

**Use This When:**
- Building financial models
- Sizing TAM for investors
- Comparing to your projections
```

## Why Consensus Works

The Delphi method reduces biases:
1. **Anchoring:** Blind Round 1 prevents early anchoring
2. **Groupthink:** Statistical sharing, not discussion
3. **Overconfidence:** Seeing others' estimates calibrates
4. **Availability:** Different methods surface different data
5. **Convergence:** Natural consensus emerges through iteration

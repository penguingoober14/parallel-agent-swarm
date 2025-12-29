# CONSTRAINT MODE

**When to use:** Complex optimization, finding solutions that meet multiple criteria, resource allocation, scheduling, decision-making with many factors.

## Structure

```
Variable Agents Based on Constraint Combinations:
- Each explores different constraint weights
- Identifies which constraints are flexible
- Finds multiple valid solutions
- Ranks solutions by overall preference
```

## Execution Prompt

```
I need you to run a CONSTRAINT MODE optimization on:

"[USER'S MULTI-CRITERIA DECISION]"

Execute this in 5 phases:

## Phase 1: Define Constraints

List ALL constraints and categorize them:

### Hard Constraints (Must Have)
These CANNOT be violated:
| # | Constraint | Threshold | Why Non-Negotiable |
|---|------------|-----------|-------------------|
| H1 | [Constraint] | [Min/Max value] | [Reason] |
| H2 | [Constraint] | [Min/Max value] | [Reason] |

### Soft Constraints (Want to Have)
These are preferences that can be traded off:
| # | Constraint | Ideal | Acceptable Range | Priority (1-10) |
|---|------------|-------|------------------|-----------------|
| S1 | [Constraint] | [Ideal value] | [Range] | [Priority] |
| S2 | [Constraint] | [Ideal value] | [Range] | [Priority] |

### Weights
Assign importance weights to soft constraints (must sum to 100):
- S1: [X]%
- S2: [Y]%
- [etc]

## Phase 2: Solution Exploration (10+ parallel agents)

Use the Task tool to launch agents IN PARALLEL, each exploring different constraint combinations:

**Agent 1: All Ideals**
Try to satisfy ALL soft constraints at ideal levels.
- If impossible, identify which constraints conflict.

**Agent 2: Priority Weighted**
Maximize weighted satisfaction score.
- Sacrifice low-priority constraints for high-priority ones.

**Agent 3: Constraint [S1] Maximized**
Find solution that maximizes S1, satisfying others at minimum acceptable.

**Agent 4: Constraint [S2] Maximized**
Find solution that maximizes S2, satisfying others at minimum acceptable.

[Continue for each major soft constraint]

**Agent N: Minimum Viable**
Find solution that just barely satisfies all hard constraints.
- What's the "cheapest" valid solution?

**Agent N+1: Edge Cases**
Explore unusual combinations that might reveal surprising solutions.

Each agent should provide:
1. **Proposed Solution:** Specific values/choices
2. **Constraint Satisfaction:** Score for each constraint
3. **Overall Score:** Weighted total
4. **Trade-offs Made:** What was sacrificed for what
5. **Risks:** What could go wrong with this solution
6. **Unique Insight:** Something interesting discovered

## Phase 3: Feasibility Analysis

For each proposed solution:
- Verify all hard constraints are actually met
- Calculate exact satisfaction scores
- Identify implementation requirements
- Estimate effort/cost to achieve

Create a feasibility matrix:
| Solution | Feasible? | Effort | Risk | Score |
|----------|-----------|--------|------|-------|
| [Agent 1] | Yes/No | High/Med/Low | High/Med/Low | [Score] |

## Phase 4: Trade-off Analysis

Map the trade-off landscape:

1. **Pareto Frontier:** Solutions where you can't improve one constraint without hurting another
2. **Sensitivity Analysis:** How much does outcome change if we relax each constraint?
3. **Breaking Points:** At what point do solutions become invalid?
4. **Synergies:** Constraints that help each other when satisfied
5. **Conflicts:** Constraints that fundamentally oppose each other

## Phase 5: Recommendation

Based on all analysis:

1. **Recommended Solution:** Best overall option
2. **Runner-Up Solutions:** Alternatives if preferences change
3. **Flexibility Guide:** Which constraints to negotiate first
4. **Decision Framework:** How to choose if context changes
5. **Implementation Plan:** Steps to achieve recommended solution
```

## Example Queries

- "Find the perfect Salesforce project: £50k+ budget, 3-month timeline, remote OK, interesting tech"
- "Help me hire: technical skills, culture fit, salary requirements, availability"
- "Find a home: budget, commute, school district, size, neighborhood"
- "Plan my career move: salary, growth, work-life, interest, location"
- "Optimize my product launch: features, timeline, budget, quality"

## Output Format

```markdown
# Constraint Optimization: [Decision]

## Constraint Definition

### Hard Constraints (Non-Negotiable)

| ID | Constraint | Threshold | Rationale |
|----|------------|-----------|-----------|
| H1 | Budget | Max £60k | Company policy |
| H2 | Timeline | Max 4 months | Client deadline |
| H3 | Remote capability | Required | No relocation possible |

### Soft Constraints (Preferences)

| ID | Constraint | Ideal | Acceptable | Priority | Weight |
|----|------------|-------|------------|----------|--------|
| S1 | Budget | £50k+ | £35k-80k | 9 | 25% |
| S2 | Tech stack | Modern (React, Node) | Any | 7 | 20% |
| S3 | Team quality | Excellent | Good | 8 | 20% |
| S4 | Growth potential | High | Medium | 6 | 15% |
| S5 | Industry | Tech/SaaS | Any | 5 | 10% |
| S6 | Travel | None | Up to 20% | 4 | 10% |

---

## Solution Exploration

### Solution 1: "The Perfect Match"
**Agent 1 - All Ideals Approach**

**Proposed Solution:**
Project at [Company X], £55k budget, React/Node stack, 3.5 months, fully remote

**Constraint Satisfaction:**
| Constraint | Target | Achieved | Score |
|------------|--------|----------|-------|
| H1: Budget | ≤£60k | £55k | ✓ |
| H2: Timeline | ≤4mo | 3.5mo | ✓ |
| H3: Remote | Yes | Yes | ✓ |
| S1: Budget | £50k+ | £55k | 10/10 |
| S2: Tech | Modern | React/Node | 10/10 |
| S3: Team | Excellent | Good+ | 8/10 |
| S4: Growth | High | Medium | 6/10 |
| S5: Industry | Tech | FinTech | 9/10 |
| S6: Travel | None | 5% | 9/10 |

**Weighted Score:** 87/100

**Trade-offs:** Team quality slightly below ideal, growth potential medium

**Risks:** FinTech regulatory complexity, timeline tight for scope

---

### Solution 2: "Budget Maximizer"
**Agent 3 - S1 Focused**

**Proposed Solution:**
Enterprise project at [Company Y], £78k budget, legacy stack, 4 months

**Constraint Satisfaction:**
[Same table format]

**Weighted Score:** 79/100

**Trade-offs:** Higher budget but legacy tech, less interesting work

---

### Solution 3: "Tech Purist"
[Same format - explores tech-focused option]

---

### Solution 4: "Growth Play"
[Same format - explores high-growth option]

---

### Solution 5: "Minimum Viable"
**Agent N - Baseline**

**Proposed Solution:**
Small project, £35k, mixed tech, 2 months

**Weighted Score:** 61/100

**Value:** Shows the floor - any solution below this isn't worth considering

---

## Feasibility Matrix

| Solution | Feasible | Effort | Risk | Score | Rank |
|----------|----------|--------|------|-------|------|
| 1: Perfect Match | ✓ | Medium | Low | 87 | 1 |
| 2: Budget Max | ✓ | High | Medium | 79 | 3 |
| 3: Tech Purist | ✓ | Low | Low | 82 | 2 |
| 4: Growth Play | ✓ | High | High | 75 | 4 |
| 5: Min Viable | ✓ | Low | Low | 61 | 5 |

---

## Trade-off Analysis

### Pareto Frontier
Solutions 1, 2, and 3 are on the Pareto frontier - can't improve one dimension without hurting another.

```
Budget £
    ↑
 80k│     ● Sol 2
    │
 60k│  ● Sol 1
    │           ● Sol 3
 40k│                    ● Sol 5
    │
    └────────────────────────→ Tech Quality
       Legacy    Mixed    Modern
```

### Sensitivity Analysis

| If We Relax... | Score Impact | New Options |
|----------------|--------------|-------------|
| Budget -10k | +5 options | More modern tech choices |
| Timeline +1mo | +3 options | Larger scope possible |
| Travel 10%→30% | +7 options | Unlocks hybrid projects |

### Key Conflicts
- **Budget vs Tech:** Higher budgets often mean legacy systems
- **Timeline vs Quality:** Faster projects = less thorough teams

### Key Synergies
- **Modern Tech + Remote:** Often go together
- **Good Team + Growth:** Correlated

---

## Recommendations

### Primary Recommendation: Solution 1

**Why:**
- Highest weighted score (87)
- Satisfies all hard constraints with margin
- Best balance across all preferences
- Low risk profile

**Implementation:**
1. Apply to [Company X] immediately
2. Negotiate timeline for 4 months (buffer)
3. Request team introductions before committing

### Runner-Up: Solution 3

**Choose This If:**
- Tech stack becomes more important
- Budget becomes less important
- Willing to accept slightly lower pay

### Flexibility Guide

If you need to negotiate, relax in this order:
1. **S6 (Travel):** Easiest to flex, low impact
2. **S5 (Industry):** Flexible if interesting tech
3. **S4 (Growth):** Can be developed later
4. **S3 (Team):** Can mentor yourself
5. **S2 (Tech):** Impacts daily happiness - protect
6. **S1 (Budget):** Impacts finances - protect

### Decision Matrix

| If... | Then Choose |
|-------|-------------|
| Budget is flexible upward | Solution 2 |
| Tech interest is paramount | Solution 3 |
| Need something quickly | Solution 5, then upgrade |
| Risk tolerance is low | Solution 1 |
```

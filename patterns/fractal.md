# RECURSIVE FRACTAL MODE

**When to use:** Root cause analysis, deep research, debugging complex systems, any question that benefits from "keep asking why."

## Structure

```
Depth-limited recursion (max 3 levels):
- Level 1: Main question → 5 sub-questions
- Level 2: Each sub-question → up to 5 deeper questions
- Level 3: Only for unresolved branches

Self-limiting: Agents decide if deeper analysis is needed
```

## Execution Prompt

```
I need you to run RECURSIVE FRACTAL analysis on:

"[USER'S QUESTION]"

Execute depth-first exploration with self-limiting recursion:

## Level 1: Initial Decomposition (5 parallel agents)

Use the Task tool to launch 5 agents IN PARALLEL, each exploring a different dimension:

Agent 1: WHAT - What exactly is happening? Symptoms and observations
Agent 2: WHY - Why might this be happening? Root causes
Agent 3: WHEN - When does this occur? Timing and triggers
Agent 4: WHERE - Where in the system/process? Location and context
Agent 5: WHO/WHAT ELSE - What other factors? Dependencies and connections

Each agent should:
1. Explore their dimension thoroughly
2. Identify 3-5 sub-questions that need deeper investigation
3. Rate each sub-question:
   - RESOLVED: Answer is clear, no deeper dive needed
   - NEEDS DEPTH: Requires further investigation
   - CRITICAL: Must investigate, likely root cause
4. Provide preliminary findings

Output format:
```
DIMENSION: [What/Why/When/Where/Who]
FINDINGS: [Initial analysis]
SUB-QUESTIONS:
1. [Sub-question] - [RESOLVED/NEEDS DEPTH/CRITICAL]
2. [Sub-question] - [RESOLVED/NEEDS DEPTH/CRITICAL]
3. [Sub-question] - [RESOLVED/NEEDS DEPTH/CRITICAL]
PRELIMINARY CONCLUSION: [What we know so far]
```

## Level 2: Deep Dive (parallel agents for NEEDS DEPTH + CRITICAL)

Collect all sub-questions marked NEEDS DEPTH or CRITICAL from Level 1.

For each (up to 10, batched if needed), launch an agent to:
1. Investigate this specific sub-question
2. Identify further sub-questions if needed
3. Rate findings: RESOLVED or NEEDS DEPTH
4. Connect findings back to original question

Output format:
```
INVESTIGATING: [Sub-question from Level 1]
PARENT: [Which Level 1 dimension]
FINDINGS: [Deep analysis]
FURTHER QUESTIONS:
1. [Deeper question] - [RESOLVED/NEEDS DEPTH]
CONCLUSION: [What this tells us about the original question]
CONNECTION: [How this relates to other findings]
```

## Level 3: Final Depth (only if necessary)

For any Level 2 findings still marked NEEDS DEPTH and rated CRITICAL:
- Launch targeted agents for final investigation
- These agents should reach definitive conclusions
- No further recursion allowed (hard limit)

## Synthesis: Build the Answer Tree

After all levels complete, construct:

1. **Root Cause Tree:** Visual hierarchy of causes
2. **Evidence Chain:** How we arrived at conclusions
3. **Confidence Map:** Which findings are certain vs speculative
4. **Action Items:** What to do based on findings
5. **Remaining Questions:** What we still don't know
```

## Example Queries

- "Why won't my twins sleep through the night?"
- "Why is our Salesforce performance degrading?"
- "Why did our conversion rate drop 20%?"
- "Why is this bug happening?"
- "Why did the project fail?"

## Output Format

```markdown
# Fractal Analysis: [Question]

## Level 1: Initial Decomposition

### WHAT Dimension
**Agent 1 Findings:**
[Analysis of symptoms and observations]

**Sub-questions generated:**
1. What specific times does this occur? - NEEDS DEPTH
2. What changed recently? - CRITICAL
3. What patterns exist? - RESOLVED ✓

[Continue for all 5 dimensions]

---

## Level 2: Deep Dive

### Investigating: "What changed recently?" (CRITICAL)
**Parent:** WHAT dimension

**Findings:**
[Deep investigation results]

**Connection to root cause:**
[How this relates to the original question]

**Further questions:**
1. Was the change in X or Y? - NEEDS DEPTH
2. When exactly did the change happen? - RESOLVED ✓

[Continue for all NEEDS DEPTH + CRITICAL items]

---

## Level 3: Final Investigation

### Investigating: "Was the change in X or Y?"
**Definitive Finding:**
[Final conclusion]

---

## Root Cause Tree

```
Original Question: "Why won't my twins sleep?"
│
├── WHAT: Sleep disruption pattern
│   └── Changed recently ← CRITICAL FINDING
│       └── Started solid foods last week
│           └── Digestive adjustment period
│
├── WHY: Multiple overlapping causes
│   ├── Developmental leap (4-month regression)
│   └── Feeding schedule misalignment
│
├── WHEN: 2-4am consistently
│   └── Corresponds to digestion cycle
│
├── WHERE: Both cribs, same pattern
│   └── Suggests environmental or shared cause
│
└── WHO/WHAT: Both twins affected equally
    └── Rules out individual health issues
```

## Evidence Chain

| Finding | Source | Confidence |
|---------|--------|------------|
| Solid food introduction | Level 2, Agent 3 | High (90%) |
| 4-month regression | Level 1, Agent 2 | Medium (70%) |
| Digestion timing | Level 3, Agent 1 | High (85%) |

## Recommended Actions

**Immediate (High Confidence):**
1. Adjust solid food timing to earlier in day
2. Allow 3-hour gap before bedtime

**Try if above fails (Medium Confidence):**
1. Temporarily reduce solid food portions
2. Check for food sensitivities

## Remaining Questions

- Is this the 4-month sleep regression overlapping with food introduction?
- Would different foods cause different reactions?

## Depth Statistics

- Level 1: 5 agents, 15 sub-questions generated
- Level 2: 8 agents, 6 findings resolved
- Level 3: 2 agents, 2 critical findings confirmed
- Total depth: 3 levels
- Resolution rate: 87%
```

## Self-Limiting Mechanism

Agents rate their findings:
- **RESOLVED:** Clear answer, stop here
- **NEEDS DEPTH:** Uncertain, go deeper
- **CRITICAL:** Must investigate, likely important

This prevents infinite recursion while ensuring important threads are followed.

## Configuration Options

```
/fractal "Your question" --depth=3    # Max recursion depth (default: 3)
/fractal "Your question" --breadth=5  # Sub-questions per level (default: 5)
/fractal "Your question" --threshold=CRITICAL  # Only dive on CRITICAL items
```

## Notes on Agent Limits

With default settings (depth=3, breadth=5):
- Level 1: 5 agents (parallel)
- Level 2: Up to 10 agents (batched if >10)
- Level 3: Usually 2-5 agents

Total: 15-20 agents across 3 sequential phases.

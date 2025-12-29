# PIPELINE MODE

**When to use:** Content creation, iterative refinement, multi-stage processes where each stage improves on the previous.

## Structure

```
Narrowing Funnel (10 → 5 → 3 → 1):
- Stage 1: 10 agents generate diverse options
- Stage 2: 5 agents score and evaluate
- Stage 3: 3 agents refine top choices
- Stage 4: 1 agent finalizes and polishes
```

## Execution Prompt

```
I need you to run a PIPELINE MODE process on:

"[USER'S CREATIVE/REFINEMENT TASK]"

Execute this in 4 sequential stages:

## Stage 1: Generation (10 parallel agents)

Use the Task tool to launch 10 agents IN PARALLEL, each generating a COMPLETELY DIFFERENT approach:

Agent 1: Generate option using [angle 1 - e.g., humor/entertainment]
Agent 2: Generate option using [angle 2 - e.g., educational/informative]
Agent 3: Generate option using [angle 3 - e.g., emotional/storytelling]
Agent 4: Generate option using [angle 4 - e.g., controversial/provocative]
Agent 5: Generate option using [angle 5 - e.g., practical/how-to]
Agent 6: Generate option using [angle 6 - e.g., data-driven/analytical]
Agent 7: Generate option using [angle 7 - e.g., personal/vulnerable]
Agent 8: Generate option using [angle 8 - e.g., trendy/timely]
Agent 9: Generate option using [angle 9 - e.g., contrarian/unexpected]
Agent 10: Generate option using [angle 10 - e.g., aspirational/visionary]

Each agent should provide:
- Complete draft/option
- Rationale for approach
- Target audience
- Expected outcome

## Stage 2: Evaluation (5 parallel agents)

Use the Task tool to launch 5 agents IN PARALLEL to score all 10 options:

Agent 1 (Virality): Score each option 1-10 for viral potential, shareability
Agent 2 (Clarity): Score each option 1-10 for clarity, understandability
Agent 3 (Engagement): Score each option 1-10 for engagement, hook strength
Agent 4 (Authenticity): Score each option 1-10 for authenticity, brand fit
Agent 5 (Action): Score each option 1-10 for call-to-action effectiveness

Each agent should provide:
- Scores for all 10 options
- Rationale for top 3 scores
- What would make low-scorers better
- Overall ranking

## Stage 3: Refinement (3 parallel agents)

Take the TOP 3 options (based on aggregate scores).

Use the Task tool to launch 3 agents IN PARALLEL, each refining one top option:

Agent 1: Refine option [#X] - strengthen weaknesses, amplify strengths
Agent 2: Refine option [#Y] - strengthen weaknesses, amplify strengths
Agent 3: Refine option [#Z] - strengthen weaknesses, amplify strengths

Each agent should:
- Apply feedback from Stage 2
- Improve hook/opening
- Strengthen core message
- Polish language/flow
- Add specific details/examples
- Optimize for the goal

## Stage 4: Final Polish (1 agent)

Select the BEST refined option.

Final agent polishes:
- Perfect the opening hook
- Ensure flow and rhythm
- Add power words/phrases
- Check for clarity
- Create 3 variants (A/B/C testing)
- Add meta-notes (best time to post, hashtags, etc.)
```

## Example Queries

- "Create a viral LinkedIn post about Salesforce + AI"
- "Write a product description for my baby tracking app"
- "Develop a pitch for investors"
- "Create a cold email for lead generation"
- "Write a blog post about [topic]"

## Output Format

```markdown
# Pipeline Results: [Task]

## Stage 1: Generated Options

### Option 1: [Angle] Approach
[Full draft]
**Rationale:** [Why this approach]
**Target:** [Audience]

### Option 2: [Angle] Approach
[...]

[Continue for all 10]

## Stage 2: Evaluation Scores

### Score Matrix
| Option | Virality | Clarity | Engagement | Authenticity | Action | TOTAL |
|--------|----------|---------|------------|--------------|--------|-------|
| 1      | 7        | 8       | 6          | 9            | 7      | 37    |
| 2      | 9        | 7       | 9          | 6            | 8      | 39    |
[...]

### Top 3 Selected
1. Option [X] - Total: [Score] - Best for: [Reason]
2. Option [Y] - Total: [Score] - Best for: [Reason]
3. Option [Z] - Total: [Score] - Best for: [Reason]

## Stage 3: Refined Versions

### Refined Option [X]
**Improvements Made:**
- [Improvement 1]
- [Improvement 2]

**Refined Draft:**
[Full refined version]

### Refined Option [Y]
[...]

### Refined Option [Z]
[...]

## Stage 4: Final Output

### Winner: Option [X] Refined

**Final Version:**
[Polished final output]

### A/B Variants

**Variant A (Original):**
[Version A]

**Variant B (Shorter):**
[Version B]

**Variant C (Different Hook):**
[Version C]

### Meta Notes
- **Best time to post:** [Recommendation]
- **Hashtags:** [If applicable]
- **Call to action:** [Recommendation]
- **Follow-up content:** [Ideas]
```

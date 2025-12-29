# TREE MODE

**When to use:** Learning new domains, deep research, building comprehensive knowledge maps, exploring unknown territories.

## Structure

```
Expanding Agents (5 → 25 → variable):
- Level 1: 5 agents identify core concepts
- Level 2: 5 agents per concept = 25 agents exploring details
- Level 3: Variable agents for gotchas/edge cases per detail
```

## Execution Prompt

```
I need you to run a TREE MODE exploration on:

"[USER'S TOPIC/DOMAIN]"

Execute this in 4 phases:

## Phase 1: Core Concepts (5 parallel agents)

Use the Task tool to launch 5 agents IN PARALLEL to identify the 5 fundamental pillars of this topic:

Agent 1: What is the FIRST core concept someone must understand?
Agent 2: What is the SECOND core concept?
Agent 3: What is the THIRD core concept?
Agent 4: What is the FOURTH core concept?
Agent 5: What is the FIFTH core concept?

Each agent should provide:
- Concept name and definition
- Why it's fundamental (can't understand the topic without it)
- Prerequisites (what you need to know first)
- How it connects to other concepts
- One practical example

## Phase 2: Deep Dive (25 parallel agents)

For EACH of the 5 core concepts from Phase 1, launch 5 agents to explore details:

Concept 1 Exploration (5 agents):
- Agent 1.1: Key principles and rules
- Agent 1.2: Common patterns and idioms
- Agent 1.3: Tools and resources
- Agent 1.4: Best practices
- Agent 1.5: Common mistakes to avoid

[Repeat for Concepts 2-5]

Run all 25 agents in parallel using the Task tool.

Each agent should provide:
- Detailed explanation with examples
- Code/practical demonstrations where applicable
- Resources for further learning
- How this detail connects to the bigger picture

## Phase 3: Gotchas & Edge Cases (variable agents)

Based on Phase 2, identify the most critical details and launch agents to explore:

For each critical detail:
- What are the gotchas beginners miss?
- What are the edge cases that cause problems?
- What are the "aha moments" that unlock understanding?
- What does mastery look like?

Run agents in parallel for the top 10 most critical areas.

## Phase 4: Knowledge Map Synthesis

After all phases complete, create:

1. **Learning Path**: Recommended order to learn concepts
2. **Dependency Graph**: What depends on what
3. **Quick Reference**: One-page summary of key points
4. **Deep Dive Guide**: Where to go for more on each topic
5. **Practice Plan**: Hands-on exercises for each level
6. **Mastery Checklist**: How to know when you've "got it"
```

## Example Queries

- "I know nothing about React Native - teach me everything to build a production app"
- "Explain Kubernetes from zero to production-ready"
- "Deep dive into GDPR compliance for SaaS products"
- "Learn machine learning from first principles"
- "Understand the UK tax system for small business owners"

## Output Format

```markdown
# Knowledge Tree: [Topic]

## Core Concepts Map

```
                    [TOPIC]
                       │
        ┌──────┬───────┼───────┬──────┐
        │      │       │       │      │
    [Concept 1] [Concept 2] [Concept 3] [Concept 4] [Concept 5]
        │              │               │
    ┌───┴───┐      ┌───┴───┐       ┌───┴───┐
    │   │   │      │   │   │       │   │   │
  [Details...]   [Details...]    [Details...]
```

## Learning Path

### Stage 1: Foundation
1. [Concept to learn first]
   - Why: [Reason]
   - Time: [Estimate]
   - Resources: [Links]

### Stage 2: Core Skills
[...]

### Stage 3: Advanced
[...]

### Stage 4: Mastery
[...]

## Concept Deep Dives

### Concept 1: [Name]

**Definition:** [Clear explanation]

**Key Principles:**
1. [Principle 1]
2. [Principle 2]

**Patterns & Idioms:**
- [Pattern 1]
- [Pattern 2]

**Tools:**
- [Tool 1]
- [Tool 2]

**Best Practices:**
- [Practice 1]
- [Practice 2]

**Common Mistakes:**
- [Mistake 1] - How to avoid
- [Mistake 2] - How to avoid

**Gotchas:**
- [Gotcha 1]
- [Gotcha 2]

[Repeat for all concepts]

## Quick Reference Card

| Concept | One-Liner | Key Command/Pattern |
|---------|-----------|---------------------|
| ... | ... | ... |

## Practice Exercises

### Beginner
1. [Exercise 1]
2. [Exercise 2]

### Intermediate
1. [Exercise 1]
2. [Exercise 2]

### Advanced
1. [Exercise 1]
2. [Exercise 2]

## Mastery Checklist

- [ ] Can explain [Concept 1] to a beginner
- [ ] Can solve [common problem type]
- [ ] Can debug [common issue]
- [ ] Can architect [typical project]
- [ ] Can optimize [performance bottleneck]
```

# Memory System

**File-based memory for Swarm Router - persist learnings across sessions.**

## How It Works

The memory system uses simple markdown files to store insights from previous swarm runs. When the router executes, it can:

1. **Read** past learnings relevant to the current query
2. **Reference** previous findings in agent prompts
3. **Write** new insights after execution

## File Structure

```
memory/
├── README.md          # This file
├── topics/            # Knowledge by topic
│   ├── salesforce.md
│   ├── baby-apps.md
│   └── [topic].md
├── patterns/          # Pattern-specific learnings
│   ├── debate-insights.md
│   ├── grid-results.md
│   └── [pattern]-insights.md
└── meta/              # Meta learnings
    ├── what-worked.md
    └── common-patterns.md
```

## Memory File Format

Each memory file follows this structure:

```markdown
# [Topic/Pattern] Memory

## Last Updated
[Date]

## Key Learnings

### [Finding 1]
- **Source:** [Which swarm run]
- **Confidence:** [1-10]
- **Finding:** [What was learned]
- **Implications:** [Why this matters]

### [Finding 2]
[...]

## Frequently Referenced

- [Quick reference point 1]
- [Quick reference point 2]

## Contradictions to Resolve

- [Finding A says X, Finding B says Y]

## Questions to Investigate

- [Open question 1]
- [Open question 2]
```

## Using Memory

### Automatic (when memory/ exists)

The router automatically:
1. Scans memory files for relevant content before executing
2. Injects relevant learnings into agent prompts
3. Prompts to save new insights after completion

### Manual Commands

```
/memory save "insight to save" --topic=salesforce
/memory search "market size"
/memory list
/memory clear --topic=old-project
```

## Example Workflow

### Session 1: Research Salesforce Market

```
You: /grid "Map the UK Salesforce consulting market"

[Swarm executes, finds market is £500M with 5 major segments]

Router: Would you like to save key findings to memory?
- Market size: £500M
- Top 5 segments identified
- Gap found in SMB integration

You: Yes, save to salesforce.md
```

### Session 2: Later Query Uses Memory

```
You: "Should I start a Salesforce consulting practice?"

Router:
ORACLE ANALYSIS:
...
MEMORY FOUND:
- Previous research on UK Salesforce market (memory/topics/salesforce.md)
- Market size: £500M (from Grid analysis, confidence: 8/10)
- Key gap: SMB integration underserved

This context will be provided to agents.
```

## What Gets Saved

### Automatically Suggested
- High-confidence findings (8+/10)
- Surprising discoveries
- Market data and estimates
- Contradictions that were resolved

### Manually Saveable
- Any finding you want to remember
- Personal preferences and context
- Project-specific information

## Privacy Note

Memory files are local to your machine. They:
- Are NOT sent to any external service
- Persist only in the `memory/` folder
- Can be deleted anytime
- Are plain markdown (human-readable)

## Limitations

1. **No automatic retrieval** - Router reads files but doesn't have semantic search
2. **Manual organization** - You decide what to save and where
3. **No cross-session context** - Each Claude Code session starts fresh, only file contents persist

## Future Enhancements (Requires API)

With API access, memory could support:
- Semantic search across all memories
- Automatic relevance matching
- Embeddings for better retrieval
- Shared team memories

For now, the file-based system provides:
- Simple, transparent storage
- Full control over what's saved
- Human-readable format
- No additional costs

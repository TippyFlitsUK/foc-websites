---
title: PullStatus
next: true
prev: true
editUrl: false

---

> **PullStatus** = `"pending"` \| `"inProgress"` \| `"retrying"` \| `"complete"` \| `"failed"`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L31)

Status of a pull operation or individual piece.

Status progression:
- `pending`: Piece is queued but download hasn't started
- `inProgress`: Download task is actively running (first attempt)
- `retrying`: Download task is running after one or more failures
- `complete`: Piece successfully downloaded and verified
- `failed`: Piece permanently failed after exhausting retries

Overall response status reflects the worst-case across all pieces:
failed > retrying > inProgress > pending > complete

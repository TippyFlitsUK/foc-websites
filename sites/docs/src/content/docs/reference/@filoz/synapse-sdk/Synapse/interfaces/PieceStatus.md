---
title: PieceStatus
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:720](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L720)

Status information for a piece stored on a provider
Note: Proofs are submitted for entire data sets, not individual pieces.
The timing information reflects the data set's status.

## Properties

### dataSetLastProven

> **dataSetLastProven**: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| `null`

Defined in: [packages/synapse-sdk/src/types.ts:722](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L722)

When the data set containing this piece was last proven on-chain (null if never proven or not yet due)

***

### dataSetNextProofDue

> **dataSetNextProofDue**: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| `null`

Defined in: [packages/synapse-sdk/src/types.ts:724](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L724)

When the next proof is due for the data set containing this piece (end of challenge window)

***

### hoursUntilChallengeWindow?

> `optional` **hoursUntilChallengeWindow?**: `number`

Defined in: [packages/synapse-sdk/src/types.ts:732](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L732)

Time until the data set enters the challenge window (in hours)

***

### inChallengeWindow?

> `optional` **inChallengeWindow?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:730](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L730)

Whether the data set is currently in a challenge window

***

### isProofOverdue?

> `optional` **isProofOverdue?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:734](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L734)

Whether the proof is overdue (past the challenge window without being submitted)

***

### pieceId?

> `optional` **pieceId?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:728](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L728)

The piece ID if the piece is in the data set

***

### retrievalUrl

> **retrievalUrl**: `string` \| `null`

Defined in: [packages/synapse-sdk/src/types.ts:726](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L726)

URL where the piece can be retrieved (null if not available)

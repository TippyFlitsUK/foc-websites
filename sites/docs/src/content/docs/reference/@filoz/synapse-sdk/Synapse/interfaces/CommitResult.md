---
title: CommitResult
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:612](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L612)

Result of a commit operation

## Properties

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:618](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L618)

Data set ID (may be newly created)

***

### isNewDataSet

> **isNewDataSet**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:620](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L620)

Whether a new data set was created

***

### pieceIds

> **pieceIds**: `bigint`[]

Defined in: [packages/synapse-sdk/src/types.ts:616](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L616)

Piece IDs assigned by the contract

***

### txHash

> **txHash**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:614](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L614)

Transaction hash

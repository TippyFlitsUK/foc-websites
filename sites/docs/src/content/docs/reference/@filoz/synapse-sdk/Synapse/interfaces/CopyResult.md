---
title: CopyResult
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:464](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L464)

Result for a single successful copy of data on a provider

## Properties

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:468](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L468)

Data set ID on this provider

***

### isNewDataSet

> **isNewDataSet**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:476](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L476)

Whether a new data set was created for this copy

***

### pieceId

> **pieceId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:470](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L470)

Piece ID within the data set

***

### providerId

> **providerId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:466](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L466)

Provider ID that holds this copy

***

### retrievalUrl

> **retrievalUrl**: `string`

Defined in: [packages/synapse-sdk/src/types.ts:474](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L474)

URL where this copy can be retrieved

***

### role

> **role**: [`CopyRole`](/reference/filoz/synapse-sdk/synapse/type-aliases/copyrole/)

Defined in: [packages/synapse-sdk/src/types.ts:472](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L472)

Whether this is the primary (store) or secondary (pull) copy

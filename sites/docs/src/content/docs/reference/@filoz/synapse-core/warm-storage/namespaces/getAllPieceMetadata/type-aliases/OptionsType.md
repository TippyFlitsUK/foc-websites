---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts#L18)

## Properties

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts#L24)

FilecoinWarmStorage contract address. If not provided, the default is the storage view contract address for the chain.

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts:20](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts#L20)

The ID of the data set the piece belongs to.

***

### pieceId

> **pieceId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-all-piece-metadata.ts#L22)

The ID of the piece to get metadata for.

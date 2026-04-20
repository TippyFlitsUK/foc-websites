---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L13)

## Properties

### bufferEpochs?

> `optional` **bufferEpochs?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L30)

Safety margin in epochs. Default: 5n

***

### clientAddress

> **clientAddress**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L15)

The payer address to check account state and approval for.

***

### currentDataSetSize?

> `optional` **currentDataSetSize?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L22)

Current total data size in the existing dataset, in bytes.

***

### dataSize

> **dataSize**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L25)

Size of new data to upload, in bytes.

***

### extraRunwayEpochs?

> `optional` **extraRunwayEpochs?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L28)

Extra runway in epochs beyond the required lockup.

***

### isNewDataSet?

> `optional` **isNewDataSet?**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L18)

Whether a new dataset will be created. Default: true

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: [packages/synapse-core/src/warm-storage/get-upload-costs.ts:20](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-upload-costs.ts#L20)

Whether CDN is enabled. Default: false

---
title: PrepareOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L46)

Options for the prepare() method on StorageManager

## Properties

### bufferEpochs?

> `optional` **bufferEpochs?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:54](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L54)

Safety margin in epochs. Default: 5n

***

### context?

> `optional` **context?**: [`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/) \| [`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)[]

Defined in: [packages/synapse-sdk/src/types.ts:48](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L48)

StorageContext(s) to prepare for upload.

***

### costs?

> `optional` **costs?**: [`OutputType`](/reference/filoz/synapse-sdk/synapse/namespaces/getuploadcosts/type-aliases/outputtype/)

Defined in: [packages/synapse-sdk/src/types.ts:56](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L56)

Pre-computed costs — skips internal getUploadCosts() call.

***

### dataSize

> **dataSize**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:50](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L50)

Size of new data to upload, in bytes.

***

### extraRunwayEpochs?

> `optional` **extraRunwayEpochs?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:52](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L52)

Extra runway in epochs beyond the required lockup.

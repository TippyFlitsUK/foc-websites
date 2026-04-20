---
title: StorageContextCreateOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:396](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L396)

Options for creating or selecting a single storage context via createContext()

Extends BaseContextOptions with singular provider/dataset selection.

## Extends

- [`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/)

## Properties

### callbacks?

> `optional` **callbacks?**: [`StorageContextCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcallbacks/)

Defined in: [packages/synapse-sdk/src/types.ts:328](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L328)

Callbacks for creation process

#### Inherited from

[`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/).[`callbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/#callbacks)

***

### dataSetId?

> `optional` **dataSetId?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:393](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L393)

Specific data set ID to use (optional)

#### Inherited from

[`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/).[`dataSetId`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/#datasetid)

***

### excludeProviderIds?

> `optional` **excludeProviderIds?**: `bigint`[]

Defined in: [packages/synapse-sdk/src/types.ts:391](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L391)

Do not select any of these providers

#### Inherited from

[`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/).[`excludeProviderIds`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/#excludeproviderids)

***

### metadata?

> `optional` **metadata?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-sdk/src/types.ts:325](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L325)

Custom metadata for data sets (key-value pairs).
Used to match existing data sets during provider selection.

#### Inherited from

[`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/).[`metadata`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/#metadata)

***

### providerId?

> `optional` **providerId?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:389](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L389)

Specific provider ID to use (optional)

#### Inherited from

[`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/).[`providerId`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/#providerid)

***

### synapse

> **synapse**: [`Synapse`](/reference/filoz/synapse-sdk/synapse/classes/synapse/)

Defined in: [packages/synapse-sdk/src/types.ts:398](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L398)

The Synapse instance

***

### warmStorageService

> **warmStorageService**: [`WarmStorageService`](/reference/filoz/synapse-sdk/warmstorage/classes/warmstorageservice/)

Defined in: [packages/synapse-sdk/src/types.ts:400](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L400)

The WarmStorageService instance

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:319](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L319)

Whether to enable CDN services

#### Inherited from

[`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/).[`withCDN`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/#withcdn)

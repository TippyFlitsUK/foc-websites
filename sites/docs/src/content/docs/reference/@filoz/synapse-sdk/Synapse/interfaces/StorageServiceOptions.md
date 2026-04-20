---
title: StorageServiceOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:387](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L387)

Options for creating or selecting a single storage context via createContext()

Extends BaseContextOptions with singular provider/dataset selection.

## Extends

- [`BaseContextOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/)

## Extended by

- [`StorageContextCreateOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcreateoptions/)

## Properties

### callbacks?

> `optional` **callbacks?**: [`StorageContextCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcallbacks/)

Defined in: [packages/synapse-sdk/src/types.ts:328](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L328)

Callbacks for creation process

#### Inherited from

[`BaseContextOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/).[`callbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/#callbacks)

***

### dataSetId?

> `optional` **dataSetId?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:393](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L393)

Specific data set ID to use (optional)

***

### excludeProviderIds?

> `optional` **excludeProviderIds?**: `bigint`[]

Defined in: [packages/synapse-sdk/src/types.ts:391](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L391)

Do not select any of these providers

***

### metadata?

> `optional` **metadata?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-sdk/src/types.ts:325](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L325)

Custom metadata for data sets (key-value pairs).
Used to match existing data sets during provider selection.

#### Inherited from

[`BaseContextOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/).[`metadata`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/#metadata)

***

### providerId?

> `optional` **providerId?**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:389](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L389)

Specific provider ID to use (optional)

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:319](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L319)

Whether to enable CDN services

#### Inherited from

[`BaseContextOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/).[`withCDN`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/#withcdn)

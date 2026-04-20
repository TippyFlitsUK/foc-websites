---
title: BaseContextOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:317](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L317)

Base options shared by all context creation methods

Contains fields common to both single and multi-context creation:
CDN enablement, metadata matching, and creation callbacks.

## Extended by

- [`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/)
- [`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/)

## Properties

### callbacks?

> `optional` **callbacks?**: [`StorageContextCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcallbacks/)

Defined in: [packages/synapse-sdk/src/types.ts:328](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L328)

Callbacks for creation process

***

### metadata?

> `optional` **metadata?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-sdk/src/types.ts:325](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L325)

Custom metadata for data sets (key-value pairs).
Used to match existing data sets during provider selection.

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:319](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L319)

Whether to enable CDN services

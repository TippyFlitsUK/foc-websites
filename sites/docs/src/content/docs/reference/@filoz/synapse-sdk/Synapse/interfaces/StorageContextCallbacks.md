---
title: StorageContextCallbacks
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:295](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L295)

Callbacks for storage context creation process

These callbacks provide visibility into the context creation process,
including provider and data set selection.

## Properties

### onDataSetResolved?

> `optional` **onDataSetResolved?**: (`info`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:308](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L308)

Called when an existing data set is matched during provider selection.
Not called when a new data set will be created (dataSetId is null on the
resolution result); the data set ID is assigned during commit.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `info` | \{ `dataSetId`: `bigint`; `provider`: [`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/); \} | The matched data set and its provider |
| `info.dataSetId` | `bigint` | - |
| `info.provider` | [`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/) | - |

#### Returns

`void`

***

### onProviderSelected?

> `optional` **onProviderSelected?**: (`provider`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:300](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L300)

Called when a service provider has been selected

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `provider` | [`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/) | The selected provider info |

#### Returns

`void`

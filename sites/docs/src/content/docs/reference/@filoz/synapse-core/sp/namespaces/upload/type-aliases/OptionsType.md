---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp/upload.ts:101](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload.ts#L101)

## Properties

### data

> **data**: [`File`](https://developer.mozilla.org/docs/Web/API/File)[]

Defined in: [packages/synapse-core/src/sp/upload.ts:105](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload.ts#L105)

The data to upload.

***

### dataSetId

> **dataSetId**: `bigint`

Defined in: [packages/synapse-core/src/sp/upload.ts:103](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload.ts#L103)

The ID of the data set.

***

### onEvent?

> `optional` **onEvent?**: \<`T`\>(`event`, `data`) => `void`

Defined in: [packages/synapse-core/src/sp/upload.ts:107](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload.ts#L107)

The callback to call when an event occurs.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`Events`](/reference/filoz/synapse-core/sp/namespaces/upload/type-aliases/events/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `T` |
| `data` | [`Events`](/reference/filoz/synapse-core/sp/namespaces/upload/type-aliases/events/)\[`T`\] |

#### Returns

`void`

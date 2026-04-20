---
title: UseCreateDataSetProps
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/warm-storage/use-create-data-set.ts:7](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-create-data-set.ts#L7)

## Properties

### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<\{ `createMessageHash`: `` `0x${string}` ``; `dataSetCreated`: `true`; `dataSetId`: `bigint`; `ok`: `true`; `service`: `string`; `txStatus`: `"confirmed"`; \}, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseCreateDataSetVariables`](/reference/filoz/synapse-react/interfaces/usecreatedatasetvariables/), `unknown`\>, `"mutationFn"`\>

Defined in: [synapse-react/src/warm-storage/use-create-data-set.ts:12](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-create-data-set.ts#L12)

***

### onHash?

> `optional` **onHash?**: (`hash`) => `void`

Defined in: [synapse-react/src/warm-storage/use-create-data-set.ts:11](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-create-data-set.ts#L11)

The callback to call when the hash is available.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |

#### Returns

`void`

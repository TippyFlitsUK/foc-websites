---
title: UseDeletePieceProps
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/warm-storage/use-delete-piece.ts:9](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-delete-piece.ts#L9)

## Properties

### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseDeletePieceVariables`](/reference/filoz/synapse-react/interfaces/usedeletepiecevariables/), `unknown`\>, `"mutationFn"`\>

Defined in: [synapse-react/src/warm-storage/use-delete-piece.ts:14](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-delete-piece.ts#L14)

***

### onHash?

> `optional` **onHash?**: (`hash`) => `void`

Defined in: [synapse-react/src/warm-storage/use-delete-piece.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-delete-piece.ts#L13)

The callback to call when the hash is available.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |

#### Returns

`void`

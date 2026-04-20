---
title: UseUploadSimpleProps
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/warm-storage/use-upload-simple.ts:7](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-upload-simple.ts#L7)

## Properties

### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<\{ `addMessageOk`: `true`; `confirmedPieceIds`: `bigint`[]; `dataSetId`: `bigint`; `pieceCount`: `number`; `piecesAdded`: `true`; `txHash`: `` `0x${string}` ``; `txStatus`: `"confirmed"`; \}, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseUploadSimpleVariables`](/reference/filoz/synapse-react/interfaces/useuploadsimplevariables/), `unknown`\>, `"mutationFn"`\>

Defined in: [synapse-react/src/warm-storage/use-upload-simple.ts:12](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-upload-simple.ts#L12)

***

### onHash?

> `optional` **onHash?**: (`hash`) => `void`

Defined in: [synapse-react/src/warm-storage/use-upload-simple.ts:11](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-upload-simple.ts#L11)

The callback to call when the hash is available.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |

#### Returns

`void`

---
title: UseUploadProps
next: true
prev: true
editUrl: false

---

Defined in: [synapse-react/src/warm-storage/use-upload.ts:8](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-upload.ts#L8)

## Extends

- [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`StorageManagerUploadOptions`, `"contexts"` \| `"pieceMetadata"`\>

## Properties

### callbacks?

> `optional` **callbacks?**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`CombinedCallbacks`\>

Defined in: synapse-sdk/dist/src/storage/manager.d.ts:10

#### Inherited from

`Omit.callbacks`

***

### copies?

> `optional` **copies?**: `number`

Defined in: synapse-sdk/dist/src/types.d.ts:124

#### Inherited from

`Omit.copies`

***

### dataSetIds?

> `optional` **dataSetIds?**: `bigint`[]

Defined in: synapse-sdk/dist/src/types.d.ts:125

#### Inherited from

`Omit.dataSetIds`

***

### excludeProviderIds?

> `optional` **excludeProviderIds?**: `bigint`[]

Defined in: synapse-sdk/dist/src/types.d.ts:127

#### Inherited from

`Omit.excludeProviderIds`

***

### metadata?

> `optional` **metadata?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: synapse-sdk/dist/src/types.d.ts:120

#### Inherited from

`Omit.metadata`

***

### mutation?

> `optional` **mutation?**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`MutateOptions`\<`UploadResult`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseUploadVariables`](/reference/filoz/synapse-react/interfaces/useuploadvariables/), `unknown`\>, `"mutationFn"`\>

Defined in: [synapse-react/src/warm-storage/use-upload.ts:10](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-upload.ts#L10)

***

### pieceCid?

> `optional` **pieceCid?**: `PieceLink`

Defined in: synapse-sdk/dist/src/storage/manager.d.ts:11

#### Inherited from

`Omit.pieceCid`

***

### providerIds?

> `optional` **providerIds?**: `bigint`[]

Defined in: synapse-sdk/dist/src/types.d.ts:126

#### Inherited from

`Omit.providerIds`

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: synapse-sdk/dist/src/storage/manager.d.ts:12

#### Inherited from

`Omit.signal`

***

### source

> **source**: `string` \| `null`

Defined in: [synapse-react/src/warm-storage/use-upload.ts:9](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/warm-storage/use-upload.ts#L9)

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: synapse-sdk/dist/src/types.d.ts:119

#### Inherited from

`Omit.withCDN`

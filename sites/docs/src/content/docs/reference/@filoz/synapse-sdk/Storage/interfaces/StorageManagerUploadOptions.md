---
title: StorageManagerUploadOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/storage/manager.ts:110](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L110)

Upload options for StorageManager.upload()

Extends CreateContextsOptions to inherit multi-copy provider selection.
Adds upload-specific options: explicit contexts, pre-calculated PieceCID, and abort signal.

Usage patterns:
1. With explicit contexts: `{ contexts }` - uses the given contexts directly
2. Auto-create contexts: `{ providerIds?, dataSetIds?, copies? }` - creates/reuses contexts
3. Use default contexts: no options - uses cached default contexts (2 copies)

## Extends

- [`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/)

## Properties

### callbacks?

> `optional` **callbacks?**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`CombinedCallbacks`](/reference/filoz/synapse-sdk/storage/type-aliases/combinedcallbacks/)\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:115](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L115)

Callbacks for both context creation and upload lifecycle

#### Overrides

[`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/).[`callbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/#callbacks)

***

### contexts?

> `optional` **contexts?**: [`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)[]

Defined in: [packages/synapse-sdk/src/storage/manager.ts:112](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L112)

Pre-created contexts to use. If provided, other selection options are invalid.

***

### copies?

> `optional` **copies?**: `number`

Defined in: [packages/synapse-sdk/src/types.ts:344](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L344)

Number of storage copies to create (optional, defaults to 2)

#### Inherited from

[`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/).[`copies`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/#copies)

***

### dataSetIds?

> `optional` **dataSetIds?**: `bigint`[]

Defined in: [packages/synapse-sdk/src/types.ts:354](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L354)

Specific data set IDs to target. Each must be an active data set owned by
the caller. Mutually exclusive with `providerIds`.

Use this only when resuming into a known data set from a prior operation.
For first-time uploads to specific providers, use `providerIds` instead,
the SDK handles data set creation automatically.

#### Inherited from

[`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/).[`dataSetIds`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/#datasetids)

***

### excludeProviderIds?

> `optional` **excludeProviderIds?**: `bigint`[]

Defined in: [packages/synapse-sdk/src/types.ts:372](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L372)

Do not select any of these providers

#### Inherited from

[`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/).[`excludeProviderIds`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/#excludeproviderids)

***

### metadata?

> `optional` **metadata?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-sdk/src/types.ts:325](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L325)

Custom metadata for data sets (key-value pairs).
Used to match existing data sets during provider selection.

#### Inherited from

[`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/).[`metadata`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/#metadata)

***

### pieceCid?

> `optional` **pieceCid?**: `PieceLink`

Defined in: [packages/synapse-sdk/src/storage/manager.ts:118](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L118)

Optional pre-calculated PieceCID to skip CommP calculation (verified by server)

***

### pieceMetadata?

> `optional` **pieceMetadata?**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:124](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L124)

Custom metadata for pieces being uploaded (key-value pairs)

***

### providerIds?

> `optional` **providerIds?**: `bigint`[]

Defined in: [packages/synapse-sdk/src/types.ts:369](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L369)

Specific provider IDs to upload to. The SDK resolves or creates data sets
on each provider automatically. Mutually exclusive with `dataSetIds`.

This is the recommended way to target specific providers. Do not call
`createContext()` to resolve data sets first, pass provider IDs here
and the SDK handles the rest.

#### Example

```ts
await synapse.storage.upload(data, { providerIds: [4n, 9n] })
```

#### Inherited from

[`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/).[`providerIds`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/#providerids)

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-sdk/src/storage/manager.ts:121](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L121)

Optional AbortSignal to cancel the upload

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:319](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L319)

Whether to enable CDN services

#### Inherited from

[`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/).[`withCDN`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/#withcdn)

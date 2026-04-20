---
title: CreateContextsOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:342](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L342)

Options for creating multiple storage contexts via createContexts()

Extends BaseContextOptions with plural provider/dataset selection
and count for multi-provider redundancy.

Provider targeting is mutually exclusive, use ONE of:
- `providerIds` to target specific providers (SDK handles dataset resolution)
- `dataSetIds` to target specific existing datasets
- Neither, to let the SDK auto-select providers

## Extends

- [`BaseContextOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/)

## Extended by

- [`ContextCreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/contextcreatecontextsoptions/)
- [`StorageManagerUploadOptions`](/reference/filoz/synapse-sdk/storage/interfaces/storagemanageruploadoptions/)

## Properties

### callbacks?

> `optional` **callbacks?**: [`StorageContextCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcallbacks/)

Defined in: [packages/synapse-sdk/src/types.ts:328](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L328)

Callbacks for creation process

#### Inherited from

[`BaseContextOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/).[`callbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/#callbacks)

***

### copies?

> `optional` **copies?**: `number`

Defined in: [packages/synapse-sdk/src/types.ts:344](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L344)

Number of storage copies to create (optional, defaults to 2)

***

### dataSetIds?

> `optional` **dataSetIds?**: `bigint`[]

Defined in: [packages/synapse-sdk/src/types.ts:354](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L354)

Specific data set IDs to target. Each must be an active data set owned by
the caller. Mutually exclusive with `providerIds`.

Use this only when resuming into a known data set from a prior operation.
For first-time uploads to specific providers, use `providerIds` instead,
the SDK handles data set creation automatically.

***

### excludeProviderIds?

> `optional` **excludeProviderIds?**: `bigint`[]

Defined in: [packages/synapse-sdk/src/types.ts:372](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L372)

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

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:319](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L319)

Whether to enable CDN services

#### Inherited from

[`BaseContextOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/).[`withCDN`](/reference/filoz/synapse-sdk/synapse/interfaces/basecontextoptions/#withcdn)

---
title: StorageManager
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/storage/manager.ts:143](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L143)

## Constructors

### Constructor

> **new StorageManager**(`options`): `StorageManager`

Defined in: [packages/synapse-sdk/src/storage/manager.ts:154](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L154)

Creates a new StorageManager

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`StorageManagerOptions`](/reference/filoz/synapse-sdk/storage/interfaces/storagemanageroptions/) | The options for the StorageManager [StorageManagerOptions](/reference/filoz/synapse-sdk/storage/interfaces/storagemanageroptions/) |

#### Returns

`StorageManager`

## Accessors

### source

#### Get Signature

> **get** **source**(): `string` \| `null`

Defined in: [packages/synapse-sdk/src/storage/manager.ts:166](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L166)

The application source identifier used for dataset namespace isolation.
Set via `Synapse.create({ source })`. Used by `combineMetadata` to tag
datasets so that different applications sharing a wallet don't collide.

##### Returns

`string` \| `null`

***

### withCDN

#### Get Signature

> **get** **withCDN**(): `boolean`

Defined in: [packages/synapse-sdk/src/storage/manager.ts:174](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L174)

Whether CDN rails are enabled for new datasets by default.
Set via `Synapse.create({ withCDN })`.

##### Returns

`boolean`

## Methods

### calculateMultiContextCosts()

> **calculateMultiContextCosts**(`contexts`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-sdk/synapse/namespaces/getuploadcosts/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:703](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L703)

Calculate upload costs aggregated across multiple storage contexts.

Each context creates its own PDP payment rail with its own lockup. This method
correctly sums per-context lockup while computing account-level debt, runway,
and buffer only once (they are shared across all contexts from the same payer).

Dataset sizes are fetched from chain for existing datasets to get accurate
floor-aware rate deltas.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `contexts` | [`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)[] | Storage contexts to aggregate costs for |
| `options` | [`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)\<[`PrepareOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/prepareoptions/), `"dataSize"` \| `"extraRunwayEpochs"` \| `"bufferEpochs"`\> | Upload options (dataSize, extraRunwayEpochs, bufferEpochs) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-sdk/synapse/namespaces/getuploadcosts/type-aliases/outputtype/)\>

Aggregated upload costs with summed rates and single deposit/approval

***

### createContext()

> **createContext**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:901](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L901)

Create a single storage context with specified options

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`StorageServiceOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storageserviceoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)\>

***

### createContexts()

> **createContexts**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)[]\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:843](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L843)

Creates storage contexts for multi-provider storage deals and other operations.

By storing data with multiple independent providers, you reduce dependency on any
single provider and improve overall data availability. Use contexts together as a group.

Contexts are selected by priority:
1. Specified datasets (`dataSetIds`) - uses their existing providers
2. Specified providers (`providerIds`) - finds or creates matching datasets
3. Automatically selected from remaining approved providers

For automatic selection, existing datasets matching the `metadata` are reused.
Providers are randomly chosen to distribute across the network.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`CreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/) | Configuration options [CreateContextsOptions](/reference/filoz/synapse-sdk/synapse/interfaces/createcontextsoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)[]\>

Promise resolving to array of storage contexts

***

### download()

> **download**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:556](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L556)

Download data from storage
If context is provided, routes to context.download()
Otherwise performs SP-agnostic download

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`StorageManagerDownloadOptions`](/reference/filoz/synapse-sdk/storage/interfaces/storagemanagerdownloadoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

***

### findDataSets()

> **findDataSets**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EnhancedDataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/enhanceddatasetinfo/)[]\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:972](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L972)

Query data sets for this client

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address?`: `` `0x${string}` ``; \} | The options for the find data sets |
| `options.address?` | `` `0x${string}` `` | The client address, defaults to current signer |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EnhancedDataSetInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/enhanceddatasetinfo/)[]\>

Array of enhanced data set information including management status

***

### getDefaultContext()

> **getDefaultContext**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:962](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L962)

Get or create the default context

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StorageContext`](/reference/filoz/synapse-sdk/storage/classes/storagecontext/)\>

***

### getStorageInfo()

> **getStorageInfo**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StorageInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/storageinfo/)\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:993](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L993)

Get comprehensive information about the storage service including
approved providers, pricing, contract addresses, and current allowances

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StorageInfo`](/reference/filoz/synapse-sdk/synapse/interfaces/storageinfo/)\>

Complete storage service information

***

### getUploadCosts()

> **getUploadCosts**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-sdk/synapse/namespaces/getuploadcosts/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:632](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L632)

Get upload costs including rate, deposit needed, and approval state.

Wraps the synapse-core `getUploadCosts()` function, automatically injecting
the client address. No StorageContext needed — works with primitive values.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`GetUploadCostsOptions`](/reference/filoz/synapse-sdk/synapse/type-aliases/getuploadcostsoptions/), `"clientAddress"`\> | Upload cost options (clientAddress auto-injected) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-sdk/synapse/namespaces/getuploadcosts/type-aliases/outputtype/)\>

Upload costs including rate, deposit needed, and readiness

***

### prepare()

> **prepare**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PrepareResult`](/reference/filoz/synapse-sdk/synapse/interfaces/prepareresult/)\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:654](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L654)

Prepare the account for upload by computing costs and returning a transaction to execute.

Can accept pre-computed costs (from a prior `getUploadCosts()` call) to skip redundant RPC,
or computes them internally. When no context is provided, creates default contexts
(mirroring the upload() flow).

Aggregates per-context lockup correctly for any number of contexts:
- Fetches each existing dataset's size from chain
- Sums lockup across all contexts
- Computes debt, runway, and buffer once at the account level

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`PrepareOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/prepareoptions/) | [PrepareOptions](/reference/filoz/synapse-sdk/synapse/interfaces/prepareoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PrepareResult`](/reference/filoz/synapse-sdk/synapse/interfaces/prepareresult/)\>

PrepareResult with costs and an optional transaction

***

### terminateDataSet()

> **terminateDataSet**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:984](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L984)

Terminate a data set with given ID that belongs to the synapse signer.
This will also result in the removal of all pieces in the data set.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `dataSetId`: `bigint`; \} | The options for the terminate data set |
| `options.dataSetId` | `bigint` | The ID of the data set to terminate |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash

***

### upload()

> **upload**(`data`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UploadResult`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadresult/)\>

Defined in: [packages/synapse-sdk/src/storage/manager.ts:202](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/manager.ts#L202)

Upload data to Filecoin Onchain Cloud using a store->pull->commit flow across
multiple providers.

By default, uploads to 2 providers (primary + secondary) for redundancy.
Data is uploaded once to the primary, then secondaries pull from the primary
via SP-to-SP transfer.

This method only throws if zero copies succeed. Partial success (some but
not all copies) is indicated by `result.complete === false`. Check `complete`
to determine overall success. Don't use `failedAttempts.length` as a failure
signal as `failedAttempts` exists as a diagnostic for intermediate failures.

For large files, prefer streaming to minimize memory usage.

For uploading multiple files, use the split operations API directly:
createContexts() -> store() -> presignForCommit() -> pull() -> commit()

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`UploadPieceStreamingData`](/reference/filoz/synapse-core/sp/type-aliases/uploadpiecestreamingdata/) | Raw bytes (Uint8Array) or ReadableStream to upload |
| `options?` | [`StorageManagerUploadOptions`](/reference/filoz/synapse-sdk/storage/interfaces/storagemanageruploadoptions/) | Upload options including contexts, callbacks, and abort signal |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UploadResult`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadresult/)\>

Upload result with pieceCid, copies, and completion status

#### Throws

StoreError if primary store fails (before any data is committed)

#### Throws

CommitError if all commit attempts fail (data stored but not on-chain)

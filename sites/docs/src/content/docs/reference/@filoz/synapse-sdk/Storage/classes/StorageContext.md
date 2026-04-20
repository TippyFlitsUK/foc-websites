---
title: StorageContext
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/storage/context.ts:97](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L97)

## Constructors

### Constructor

> **new StorageContext**(`options`): `StorageContext`

Defined in: [packages/synapse-sdk/src/storage/context.ts:183](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L183)

Creates a new StorageContext

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`StorageContextOptions`](/reference/filoz/synapse-sdk/storage/interfaces/storagecontextoptions/) | The options for the StorageContext [StorageContextOptions](/reference/filoz/synapse-sdk/storage/interfaces/storagecontextoptions/) |

#### Returns

`StorageContext`

## Properties

### serviceProvider

> `readonly` **serviceProvider**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/storage/context.ts:110](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L110)

## Accessors

### dataSetId

#### Get Signature

> **get** **dataSetId**(): `bigint` \| `undefined`

Defined in: [packages/synapse-sdk/src/storage/context.ts:127](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L127)

##### Returns

`bigint` \| `undefined`

***

### dataSetMetadata

#### Get Signature

> **get** **dataSetMetadata**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:122](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L122)

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

***

### provider

#### Get Signature

> **get** **provider**(): [`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)

Defined in: [packages/synapse-sdk/src/storage/context.ts:117](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L117)

##### Returns

[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)

***

### withCDN

#### Get Signature

> **get** **withCDN**(): `boolean`

Defined in: [packages/synapse-sdk/src/storage/context.ts:113](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L113)

##### Returns

`boolean`

## Methods

### commit()

> **commit**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CommitResult`](/reference/filoz/synapse-sdk/synapse/interfaces/commitresult/)\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:820](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L820)

Commit pieces on-chain by calling AddPieces (or CreateDataSetAndAddPieces).

Pieces must be stored on the provider (via store() or pull()) before committing.
Creates a new data set if this context doesn't have one yet.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CommitOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/commitoptions/) | Pieces to commit with optional pieceMetadata, extraData, and onSubmitted callback |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CommitResult`](/reference/filoz/synapse-sdk/synapse/interfaces/commitresult/)\>

Transaction hash, confirmed pieceIds, dataSetId, and whether a new data set was created

***

### deletePiece()

> **deletePiece**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:1069](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L1069)

Delete a piece with given CID from this data set.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `piece`: `string` \| `bigint` \| `PieceLink`; \} | Options for the delete operation |
| `options.piece` | `string` \| `bigint` \| `PieceLink` | The PieceCID identifier or a piece number to delete by pieceID |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash of the delete operation

***

### download()

> **download**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:963](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L963)

Download data from this specific service provider

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DownloadOptions`](/reference/filoz/synapse-sdk/synapse/type-aliases/downloadoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

***

### getPieces()

> **getPieces**(`options?`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<[`PieceRecord`](/reference/filoz/synapse-sdk/synapse/interfaces/piecerecord/)\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:1014](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L1014)

Get all active pieces for this data set as an async generator.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `batchSize?`: `bigint`; \} | Optional configuration object |
| `options.batchSize?` | `bigint` | The batch size for each pagination call (default: 100) |

#### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<[`PieceRecord`](/reference/filoz/synapse-sdk/synapse/interfaces/piecerecord/)\>

#### Yields

Object with pieceCid and pieceId

***

### getPieceUrl()

> **getPieceUrl**(`pieceCid`): `string`

Defined in: [packages/synapse-sdk/src/storage/context.ts:893](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L893)

Get the retrieval URL for a piece on this provider.

Used by pull() to construct source URLs when pulling from this context
to another provider.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pieceCid` | `PieceLink` |

#### Returns

`string`

***

### getProviderInfo()

> **getProviderInfo**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:991](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L991)

Get information about the service provider used by this service.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-sdk/synapse/interfaces/pdpprovider/)\>

Provider information including pricing (currently same for all providers)

***

### getScheduledRemovals()

> **getScheduledRemovals**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<readonly `bigint`[]\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:1000](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L1000)

Get pieces scheduled for removal from this data set.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<readonly `bigint`[]\>

Array of piece IDs scheduled for removal

***

### pieceStatus()

> **pieceStatus**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PieceStatus`](/reference/filoz/synapse-sdk/synapse/interfaces/piecestatus/) \| `null`\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:1101](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L1101)

Check if a piece exists on this service provider and get its proof status.
Also returns timing information about when the piece was last proven and when the next
proof is due.

Note: Proofs are submitted for entire data sets, not individual pieces. The timing information
returned reflects when the data set (containing this piece) was last proven and when the next
proof is due.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `pieceCid`: `string` \| `PieceLink`; \} | Options for the piece status |
| `options.pieceCid` | `string` \| `PieceLink` | The PieceCID (piece CID) to check |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PieceStatus`](/reference/filoz/synapse-sdk/synapse/interfaces/piecestatus/) \| `null`\>

Status information including data set timing and retrieval URL

***

### presignForCommit()

> **presignForCommit**(`pieces`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:705](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L705)

Pre-sign EIP-712 extraData for the given pieces.

The returned Hex can be passed to both pull() and commit() to avoid
redundant wallet signature prompts during multi-copy uploads.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pieces` | `object`[] | Pieces to sign for, with optional per-piece metadata |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Signed extraData hex to pass to pull() or commit()

***

### pull()

> **pull**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PullResult`](/reference/filoz/synapse-sdk/synapse/interfaces/pullresult/)\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:738](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L738)

Request this provider to pull pieces from another provider.

Used for multi-copy uploads: data stored once on primary, then pulled to
secondaries via SP-to-SP transfer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`PullOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/pulloptions/) | Pull options: pieces to pull, source (URL or StorageContext), optional extraData, signal, and onProgress |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PullResult`](/reference/filoz/synapse-sdk/synapse/interfaces/pullresult/)\>

Status per piece ('complete' or 'failed') and overall result

***

### store()

> **store**(`data`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StoreResult`](/reference/filoz/synapse-sdk/synapse/interfaces/storeresult/)\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:661](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L661)

Store data on the service provider without committing on-chain.

First step of the split upload flow: store -> pull -> commit.
After storing, the piece is "parked" on the provider and ready for
pulling to other providers via pull(), on-chain commitment via commit(),
or retrieval via getPieceUrl() (not yet committed; eligible for GC).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`UploadPieceStreamingData`](/reference/filoz/synapse-core/sp/type-aliases/uploadpiecestreamingdata/) | Raw bytes or readable stream to upload |
| `options?` | [`StoreOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/) | Optional pieceCid (skip CommP), signal, and onProgress callback |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`StoreResult`](/reference/filoz/synapse-sdk/synapse/interfaces/storeresult/)\>

PieceCid and size of the stored piece

***

### terminate()

> **terminate**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:1209](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L1209)

Terminates the data set by sending on-chain message.
This will also result in the removal of all pieces in the data set.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response

***

### upload()

> **upload**(`data`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UploadResult`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadresult/)\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:915](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L915)

Upload data to the service provider and commit on-chain.

Combines store() and commit() into a single call. Accepts Uint8Array or
ReadableStream<Uint8Array>; prefer streaming for large files to minimize memory.

When uploading to multiple contexts, pieceCid should be pre-calculated and passed
in options to avoid redundant computation. For streaming uploads, pieceCid must be
provided as it cannot be calculated without consuming the stream.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`UploadPieceStreamingData`](/reference/filoz/synapse-core/sp/type-aliases/uploadpiecestreamingdata/) | Raw bytes or readable stream to upload |
| `options?` | [`UploadOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadoptions/) | Upload options including callbacks, pieceMetadata, pieceCid, and signal |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UploadResult`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadresult/)\>

Upload result with pieceCid, size, and a single-element copies array

***

### create()

> `static` **create**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`StorageContext`\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:298](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L298)

Static factory method to create a StorageContext
Handles provider selection and data set selection/creation

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`StorageContextCreateOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storagecontextcreateoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`StorageContext`\>

***

### createContexts()

> `static` **createContexts**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`StorageContext`[]\>

Defined in: [packages/synapse-sdk/src/storage/context.ts:204](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/storage/context.ts#L204)

Creates storage contexts with specified options.

Three mutually exclusive modes:
1. `dataSetIds` provided: creates contexts for exactly those data sets
2. `providerIds` provided: creates contexts for exactly those providers
3. Neither provided: uses smart selection with `count` (default 2)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ContextCreateContextsOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/contextcreatecontextsoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`StorageContext`[]\>

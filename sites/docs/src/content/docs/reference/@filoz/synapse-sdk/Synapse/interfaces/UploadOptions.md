---
title: UploadOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:448](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L448)

Options for uploading individual pieces to an existing storage context

Used by StorageContext.upload() for uploading data to a specific provider
and data set that has already been created/selected.

## Extends

- [`StoreOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/).[`UploadCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/)

## Properties

### onCopyComplete?

> `optional` **onCopyComplete?**: (`providerId`, `pieceCid`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:424](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L424)

Called when a secondary copy completes successfully

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerId` | `bigint` |
| `pieceCid` | `PieceLink` |

#### Returns

`void`

#### Inherited from

[`UploadCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/).[`onCopyComplete`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/#oncopycomplete)

***

### onCopyFailed?

> `optional` **onCopyFailed?**: (`providerId`, `pieceCid`, `error`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:426](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L426)

Called when a secondary copy fails

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerId` | `bigint` |
| `pieceCid` | `PieceLink` |
| `error` | [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) |

#### Returns

`void`

#### Inherited from

[`UploadCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/).[`onCopyFailed`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/#oncopyfailed)

***

### onPiecesAdded?

> `optional` **onPiecesAdded?**: (`transaction`, `providerId`, `pieces`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:420](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L420)

Called when the addPieces transaction has been submitted for a provider

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transaction` | `` `0x${string}` `` |
| `providerId` | `bigint` |
| `pieces` | `object`[] |

#### Returns

`void`

#### Inherited from

[`UploadCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/).[`onPiecesAdded`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/#onpiecesadded)

***

### onPiecesConfirmed?

> `optional` **onPiecesConfirmed?**: (`dataSetId`, `providerId`, `pieces`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:422](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L422)

Called when the addPieces transaction is confirmed on-chain for a provider

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dataSetId` | `bigint` |
| `providerId` | `bigint` |
| `pieces` | [`PieceRecord`](/reference/filoz/synapse-sdk/synapse/interfaces/piecerecord/)[] |

#### Returns

`void`

#### Inherited from

[`UploadCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/).[`onPiecesConfirmed`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/#onpiecesconfirmed)

***

### onProgress?

> `optional` **onProgress?**: (`bytesUploaded`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:552](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L552)

Progress callback for upload bytes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytesUploaded` | `number` |

#### Returns

`void`

#### Inherited from

[`StoreOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/).[`onProgress`](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/#onprogress)

***

### onPullProgress?

> `optional` **onPullProgress?**: (`providerId`, `pieceCid`, `status`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:428](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L428)

Called with pull status updates during SP-to-SP transfer

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerId` | `bigint` |
| `pieceCid` | `PieceLink` |
| `status` | [`PullStatus`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/pullstatus/) |

#### Returns

`void`

#### Inherited from

[`UploadCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/).[`onPullProgress`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/#onpullprogress)

***

### onStored?

> `optional` **onStored?**: (`providerId`, `pieceCid`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:418](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L418)

Called when piece data has been stored on a provider (before on-chain commit)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `providerId` | `bigint` |
| `pieceCid` | `PieceLink` |

#### Returns

`void`

#### Inherited from

[`UploadCallbacks`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/).[`onStored`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadcallbacks/#onstored)

***

### pieceCid?

> `optional` **pieceCid?**: `PieceLink`

Defined in: [packages/synapse-sdk/src/types.ts:548](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L548)

Optional pre-calculated PieceCID to skip CommP calculation

#### Inherited from

[`StoreOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/).[`pieceCid`](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/#piececid)

***

### pieceMetadata?

> `optional` **pieceMetadata?**: [`MetadataObject`](/reference/filoz/synapse-sdk/synapse/type-aliases/metadataobject/)

Defined in: [packages/synapse-sdk/src/types.ts:450](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L450)

Custom metadata for this specific piece (key-value pairs)

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-sdk/src/types.ts:550](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L550)

Optional AbortSignal to cancel the store

#### Inherited from

[`StoreOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/).[`signal`](/reference/filoz/synapse-sdk/synapse/interfaces/storeoptions/#signal)

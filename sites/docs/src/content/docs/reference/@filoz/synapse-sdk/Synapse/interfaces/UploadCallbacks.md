---
title: UploadCallbacks
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:414](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L414)

## Extended by

- [`UploadOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadoptions/)

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

***

### onProgress?

> `optional` **onProgress?**: (`bytesUploaded`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:416](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L416)

Called periodically during upload with bytes uploaded so far

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytesUploaded` | `number` |

#### Returns

`void`

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

---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp/upload-streaming.ts:11](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload-streaming.ts#L11)

## Properties

### data

> **data**: [`UploadPieceStreamingData`](/reference/filoz/synapse-core/sp/type-aliases/uploadpiecestreamingdata/)

Defined in: [packages/synapse-core/src/sp/upload-streaming.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload-streaming.ts#L15)

The data to upload.

***

### onProgress?

> `optional` **onProgress?**: (`bytesUploaded`) => `void`

Defined in: [packages/synapse-core/src/sp/upload-streaming.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload-streaming.ts#L19)

The progress callback.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytesUploaded` | `number` |

#### Returns

`void`

***

### pieceCid?

> `optional` **pieceCid?**: [`PieceCID`](/reference/filoz/synapse-core/piece/type-aliases/piececid/)

Defined in: [packages/synapse-core/src/sp/upload-streaming.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload-streaming.ts#L21)

The piece CID to upload.

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp/upload-streaming.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload-streaming.ts#L13)

The service URL of the PDP API.

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-core/src/sp/upload-streaming.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload-streaming.ts#L23)

The signal to abort the request.

***

### size?

> `optional` **size?**: `number`

Defined in: [packages/synapse-core/src/sp/upload-streaming.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload-streaming.ts#L17)

The size of the data. If defined, it will be used to set the Content-Length header.

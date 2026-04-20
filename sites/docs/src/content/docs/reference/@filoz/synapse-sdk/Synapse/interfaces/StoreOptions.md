---
title: StoreOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:546](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L546)

Options for storing data on a provider without on-chain commit

## Extended by

- [`UploadOptions`](/reference/filoz/synapse-sdk/synapse/interfaces/uploadoptions/)

## Properties

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

***

### pieceCid?

> `optional` **pieceCid?**: `PieceLink`

Defined in: [packages/synapse-sdk/src/types.ts:548](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L548)

Optional pre-calculated PieceCID to skip CommP calculation

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-sdk/src/types.ts:550](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L550)

Optional AbortSignal to cancel the store

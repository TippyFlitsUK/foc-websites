---
title: uint8ArrayToAsyncIterable
next: true
prev: true
editUrl: false

---

> **uint8ArrayToAsyncIterable**(`data`, `chunkSize?`): `AsyncIterable`\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

Defined in: [packages/synapse-core/src/utils/streams.ts:106](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/streams.ts#L106)

Convert Uint8Array to async iterable with optimal chunk size.

Uses 2048-byte chunks for better hasher performance (determined by manual
testing with Node.js; this will likely vary by environment). This may not be
optimal for the streaming upload case, so further tuning may be needed to
find the best balance between hasher performance and upload chunk size.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `data` | [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | `undefined` | Uint8Array to convert |
| `chunkSize` | `number` | `2048` | Size of chunks (default 2048) |

## Returns

`AsyncIterable`\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

AsyncIterable yielding chunks

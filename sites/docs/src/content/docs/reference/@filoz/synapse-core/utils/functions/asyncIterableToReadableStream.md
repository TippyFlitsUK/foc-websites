---
title: asyncIterableToReadableStream
next: true
prev: true
editUrl: false

---

> **asyncIterableToReadableStream**(`iterable`): [`ReadableStream`](https://developer.mozilla.org/docs/Web/API/ReadableStream)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

Defined in: [packages/synapse-core/src/utils/streams.ts:47](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/streams.ts#L47)

Convert AsyncIterable to ReadableStream with broad browser compatibility.
Provides fallback for environments where ReadableStream.from() is not available.

Uses pull-based streaming to implement proper backpressure and ensure all
chunks are consumed in order.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `iterable` | `AsyncIterable`\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\> |

## Returns

[`ReadableStream`](https://developer.mozilla.org/docs/Web/API/ReadableStream)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

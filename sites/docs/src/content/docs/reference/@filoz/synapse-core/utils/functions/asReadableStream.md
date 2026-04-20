---
title: asReadableStream
next: true
prev: true
editUrl: false

---

> **asReadableStream**(`data`): [`ReadableStream`](https://developer.mozilla.org/docs/Web/API/ReadableStream)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

Defined in: [packages/synapse-core/src/utils/streams.ts:20](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/streams.ts#L20)

Convert AsyncIterable or ReadableStream to ReadableStream

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AsyncIterable`\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>, `any`, `any`\> \| [`ReadableStream`](https://developer.mozilla.org/docs/Web/API/ReadableStream)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\> | AsyncIterable or ReadableStream to convert |

## Returns

[`ReadableStream`](https://developer.mozilla.org/docs/Web/API/ReadableStream)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

ReadableStream

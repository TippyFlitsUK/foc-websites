---
title: calculateFromIterable
next: true
prev: true
editUrl: false

---

> **calculateFromIterable**(`data`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`PieceLink`\>

Defined in: [packages/synapse-core/src/piece/piece.ts:163](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L163)

Calculate PieceCID from an async iterable of Uint8Array chunks.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AsyncIterable`\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\> | AsyncIterable yielding Uint8Array chunks |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`PieceLink`\>

Calculated PieceCID

## Example

```ts
const pieceCid = await calculateFromIterable(asyncIterableData)
```

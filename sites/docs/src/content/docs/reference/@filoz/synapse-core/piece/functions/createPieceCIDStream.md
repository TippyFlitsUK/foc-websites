---
title: createPieceCIDStream
next: true
prev: true
editUrl: false

---

> **createPieceCIDStream**(): `object`

Defined in: [packages/synapse-core/src/piece/piece.ts:188](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/piece.ts#L188)

Create a TransformStream that calculates PieceCID while streaming data through it
This allows calculating PieceCID without buffering the entire data in memory

## Returns

`object`

An object with the TransformStream and a getPieceCID function to retrieve the result

### getPieceCID

> **getPieceCID**: () => `PieceLink` \| `null`

#### Returns

`PieceLink` \| `null`

### stream

> **stream**: [`TransformStream`](https://developer.mozilla.org/docs/Web/API/TransformStream)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>, [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

## Example

```ts
const { stream, getPieceCID } = createPieceCIDStream()
await fetch(url, {
  method: 'PUT',
  body: dataStream.pipeThrough(stream)
})
const pieceCid = getPieceCID() // Available after stream completes
```

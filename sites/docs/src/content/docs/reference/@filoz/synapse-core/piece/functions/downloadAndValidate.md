---
title: downloadAndValidate
next: true
prev: true
editUrl: false

---

> **downloadAndValidate**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

Defined in: [packages/synapse-core/src/piece/download.ts:63](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/download.ts#L63)

Download data from a URL, validate its PieceCID, and return as Uint8Array

This function:
1. Downloads data from the URL
2. Calculates PieceCID during streaming
3. Collects all chunks into a Uint8Array
4. Validates the calculated PieceCID matches the expected value

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/piece/namespaces/downloadandvalidate/type-aliases/optionstype/) | [downloadAndValidate.OptionsType](/reference/filoz/synapse-core/piece/namespaces/downloadandvalidate/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

Data [downloadAndValidate.ReturnType](/reference/filoz/synapse-core/piece/namespaces/downloadandvalidate/type-aliases/returntype/)

## Throws

Errors [downloadAndValidate.ErrorType](/reference/filoz/synapse-core/piece/namespaces/downloadandvalidate/type-aliases/errortype/)

## Example

```ts
import * as Piece from '@filoz/synapse-core/piece'
const data = await Piece.downloadAndValidate({
  url: 'https://example.com/piece',
  expectedPieceCid: 'bafkzcib...',
})
console.log(data)
```

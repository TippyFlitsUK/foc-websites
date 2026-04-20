---
title: uploadPiece
next: true
prev: true
editUrl: false

---

> **uploadPiece**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/synapse-core/src/sp/upload.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload.ts#L34)

Upload a piece to the PDP API.

POST /pdp/piece

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/uploadpiece/type-aliases/optionstype/) | [uploadPiece.OptionsType](/reference/filoz/synapse-core/sp/namespaces/uploadpiece/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## Throws

Errors [uploadPiece.ErrorType](/reference/filoz/synapse-core/sp/namespaces/uploadpiece/type-aliases/errortype/)

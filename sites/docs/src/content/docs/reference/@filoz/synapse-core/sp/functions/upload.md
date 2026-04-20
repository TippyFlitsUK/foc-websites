---
title: upload
next: true
prev: true
editUrl: false

---

> **upload**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `pieces`: `object`[]; `statusUrl`: `string`; `txHash`: `` `0x${string}` ``; \}\>

Defined in: [packages/synapse-core/src/sp/upload.ts:125](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload.ts#L125)

Upload multiple pieces to a data set on the PDP API.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to upload the pieces. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/upload/type-aliases/optionstype/) | [upload.OptionsType](/reference/filoz/synapse-core/sp/namespaces/upload/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `pieces`: `object`[]; `statusUrl`: `string`; `txHash`: `` `0x${string}` ``; \}\>

Upload response [upload.OutputType](/reference/filoz/synapse-core/sp/namespaces/upload/type-aliases/outputtype/)

## Throws

Errors [upload.ErrorType](/reference/filoz/synapse-core/sp/namespaces/upload/type-aliases/errortype/)

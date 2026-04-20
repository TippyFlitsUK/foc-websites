---
title: uploadPieceStreaming
next: true
prev: true
editUrl: false

---

> **uploadPieceStreaming**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/uploadpiecestreaming/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp/upload-streaming.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/upload-streaming.ts#L45)

Upload piece data using the 3-step CommP-last streaming protocol.

Protocol:
1. POST /pdp/piece/uploads → get upload session UUID
2. PUT /pdp/piece/uploads/{uuid} → stream data while calculating CommP
3. POST /pdp/piece/uploads/{uuid} → finalize with calculated CommP

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/uploadpiecestreaming/type-aliases/optionstype/) | [uploadPieceStreaming.OptionsType](/reference/filoz/synapse-core/sp/namespaces/uploadpiecestreaming/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/uploadpiecestreaming/type-aliases/outputtype/)\>

PieceCID and size of uploaded data [uploadPieceStreaming.OutputType](/reference/filoz/synapse-core/sp/namespaces/uploadpiecestreaming/type-aliases/outputtype/)

## Throws

Errors [uploadPieceStreaming.ErrorType](/reference/filoz/synapse-core/sp/namespaces/uploadpiecestreaming/type-aliases/errortype/)

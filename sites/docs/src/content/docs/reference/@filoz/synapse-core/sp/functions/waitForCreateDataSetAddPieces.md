---
title: waitForCreateDataSetAddPieces
next: true
prev: true
editUrl: false

---

> **waitForCreateDataSetAddPieces**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedatasetaddpieces/type-aliases/returntype/)\>

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:194](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L194)

Wait for the data set creation status.

GET /pdp/data-sets/created({txHash})

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedatasetaddpieces/type-aliases/optionstype/) | [waitForCreateDataSetAddPieces.OptionsType](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedatasetaddpieces/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedatasetaddpieces/type-aliases/returntype/)\>

Status [waitForCreateDataSetAddPieces.ReturnType](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedatasetaddpieces/type-aliases/returntype/)

## Throws

Errors [waitForCreateDataSetAddPieces.ErrorType](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedatasetaddpieces/type-aliases/errortype/)

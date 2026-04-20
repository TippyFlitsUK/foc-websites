---
title: addPiecesApiRequest
next: true
prev: true
editUrl: false

---

> **addPiecesApiRequest**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:50](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L50)

Add pieces to a data set on the PDP API.

POST /pdp/data-sets/{dataSetId}/pieces

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/type-aliases/optionstype/) | [addPiecesApiRequest.OptionsType](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/type-aliases/outputtype/)\>

Hash and status URL [addPiecesApiRequest.OutputType](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/type-aliases/outputtype/)

## Throws

Errors [addPiecesApiRequest.ErrorType](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/type-aliases/errortype/)

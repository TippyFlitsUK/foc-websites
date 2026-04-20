---
title: createDataSetAndAddPieces
next: true
prev: true
editUrl: false

---

> **createDataSetAndAddPieces**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/createdatasetandaddpiecesapirequest/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp/create-dataset-add-pieces.ts:133](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset-add-pieces.ts#L133)

Create a data set and add pieces to it

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to create the data set. |
| `options` | [`CreateDataSetAndAddPiecesOptions`](/reference/filoz/synapse-core/sp/type-aliases/createdatasetandaddpiecesoptions/) | [CreateDataSetAndAddPiecesOptions](/reference/filoz/synapse-core/sp/type-aliases/createdatasetandaddpiecesoptions/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/createdatasetandaddpiecesapirequest/type-aliases/outputtype/)\>

The response from the create data set on PDP API. [createDataSetAndAddPieces.ReturnType](/reference/filoz/synapse-core/sp/namespaces/createdatasetandaddpieces/type-aliases/returntype/)

## Throws

Errors [createDataSetAndAddPieces.ErrorType](/reference/filoz/synapse-core/sp/namespaces/createdatasetandaddpieces/type-aliases/errortype/)

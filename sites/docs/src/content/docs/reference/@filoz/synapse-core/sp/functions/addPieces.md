---
title: addPieces
next: true
prev: true
editUrl: false

---

> **addPieces**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:120](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L120)

Add pieces to a data set

Call the Service Provider API to add pieces to a data set.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to add the pieces. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/addpieces/type-aliases/optionstype/) | The options for the add pieces. [addPieces.OptionsType](/reference/filoz/synapse-core/sp/namespaces/addpieces/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/type-aliases/outputtype/)\>

The response from the add pieces operation. [addPieces.OutputType](/reference/filoz/synapse-core/sp/namespaces/addpieces/type-aliases/outputtype/)

## Throws

Errors [addPieces.ErrorType](/reference/filoz/synapse-core/sp/namespaces/addpieces/type-aliases/errortype/)

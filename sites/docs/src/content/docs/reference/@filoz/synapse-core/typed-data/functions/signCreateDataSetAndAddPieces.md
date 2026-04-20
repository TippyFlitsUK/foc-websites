---
title: signCreateDataSetAndAddPieces
next: true
prev: true
editUrl: false

---

> **signCreateDataSetAndAddPieces**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-create-dataset-add-pieces.ts#L27)

Sign and abi encode the create data set and add pieces extra data

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to sign the extra data. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/typed-data/namespaces/signcreatedatasetandaddpieces/type-aliases/optionstype/) | [signCreateDataSetAndAddPieces.OptionsType](/reference/filoz/synapse-core/typed-data/namespaces/signcreatedatasetandaddpieces/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Encoded extra data [signCreateDataSetAndAddPieces.ReturnType](/reference/filoz/synapse-core/typed-data/namespaces/signcreatedatasetandaddpieces/type-aliases/returntype/)

## Throws

Errors [signCreateDataSetAndAddPieces.ErrorType](/reference/filoz/synapse-core/typed-data/namespaces/signcreatedatasetandaddpieces/type-aliases/errortype/)

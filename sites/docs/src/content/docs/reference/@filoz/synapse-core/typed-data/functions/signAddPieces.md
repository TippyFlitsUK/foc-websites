---
title: signAddPieces
next: true
prev: true
editUrl: false

---

> **signAddPieces**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/typed-data/sign-add-pieces.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-add-pieces.ts#L45)

Sign and abi encode the add pieces extra data

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to sign the extra data. |
| `options` | [`SignAddPiecesOptions`](/reference/filoz/synapse-core/typed-data/type-aliases/signaddpiecesoptions/) | [SignAddPiecesOptions](/reference/filoz/synapse-core/typed-data/type-aliases/signaddpiecesoptions/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Encoded extra data [signAddPieces.ReturnType](/reference/filoz/synapse-core/typed-data/namespaces/signaddpieces/type-aliases/returntype/)

## Throws

Errors [signAddPieces.ErrorType](/reference/filoz/synapse-core/typed-data/namespaces/signaddpieces/type-aliases/errortype/)

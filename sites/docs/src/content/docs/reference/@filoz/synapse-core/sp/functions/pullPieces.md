---
title: pullPieces
next: true
prev: true
editUrl: false

---

> **pullPieces**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)\>

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:387](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L387)

Pull pieces from external storage providers into a data set.

Handles EIP-712 signing for authorization and calls the
Curio POST /pdp/piece/pull endpoint. Curio verifies the client can pay
by running an estimateGas on the resulting contract call.

The endpoint is idempotent - calling with the same extraData returns
the status of the existing request rather than creating duplicates.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account for signing. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/pullpieces/type-aliases/optionstype/) | [pullPieces.OptionsType](/reference/filoz/synapse-core/sp/namespaces/pullpieces/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)\>

The current status of the pull operation. [pullPieces.ReturnType](/reference/filoz/synapse-core/sp/namespaces/pullpieces/type-aliases/returntype/)

## Throws

Errors [pullPieces.ErrorType](/reference/filoz/synapse-core/sp/namespaces/pullpieces/type-aliases/errortype/)

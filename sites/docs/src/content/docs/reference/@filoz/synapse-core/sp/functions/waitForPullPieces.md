---
title: waitForPullPieces
next: true
prev: true
editUrl: false

---

> **waitForPullPieces**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)\>

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:423](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L423)

Wait for pull pieces completion.

Repeatedly calls the pull endpoint until all pieces are complete or any piece fails.
Since the endpoint is idempotent, this effectively polls for status updates.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account for signing. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/waitforpullpieces/type-aliases/optionstype/) | [waitForPullPieces.OptionsType](/reference/filoz/synapse-core/sp/namespaces/waitforpullpieces/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)\>

The final status when complete or failed. [waitForPullPieces.ReturnType](/reference/filoz/synapse-core/sp/namespaces/waitforpullpieces/type-aliases/returntype/)

## Throws

Errors [waitForPullPieces.ErrorType](/reference/filoz/synapse-core/sp/namespaces/waitforpullpieces/type-aliases/errortype/)

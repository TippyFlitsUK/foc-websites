---
title: waitForPullPiecesApiRequest
next: true
prev: true
editUrl: false

---

> **waitForPullPiecesApiRequest**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)\>

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:169](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L169)

Wait for pull pieces completion API request.

Repeatedly calls the pull endpoint until all pieces are complete or any piece fails.
Since the endpoint is idempotent, this effectively polls for status updates.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/waitforpullpiecesapirequest/type-aliases/optionstype/) | [waitForPullPiecesApiRequest.OptionsType](/reference/filoz/synapse-core/sp/namespaces/waitforpullpiecesapirequest/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)\>

The final status when complete or failed. [waitForPullPiecesApiRequest.ReturnType](/reference/filoz/synapse-core/sp/namespaces/waitforpullpiecesapirequest/type-aliases/returntype/)

## Throws

Errors [waitForPullPiecesApiRequest.ErrorType](/reference/filoz/synapse-core/sp/namespaces/waitforpullpiecesapirequest/type-aliases/errortype/)

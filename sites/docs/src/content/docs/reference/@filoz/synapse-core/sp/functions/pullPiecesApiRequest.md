---
title: pullPiecesApiRequest
next: true
prev: true
editUrl: false

---

> **pullPiecesApiRequest**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)\>

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:119](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L119)

Initiate a piece pull request or get status of an existing one.

POST /pdp/piece/pull

This endpoint is idempotent - calling with the same extraData returns
the status of the existing pull rather than creating duplicates.
This allows safe retries and status polling using the same request.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/optionstype/) | [pullPiecesApiRequest.OptionsType](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)\>

The current status of the pull operation. [pullPiecesApiRequest.ReturnType](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/)

## Throws

Errors [pullPiecesApiRequest.ErrorType](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/errortype/)

---
title: pullPiecesWithCaptureHandler
next: true
prev: true
editUrl: false

---

> **pullPiecesWithCaptureHandler**(`response`, `captureCallback`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:398](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L398)

Creates a handler that captures the request body and returns a response

## Parameters

| Parameter | Type |
| ------ | ------ |
| `response` | [`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/) |
| `captureCallback` | (`request`) => `void` |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`

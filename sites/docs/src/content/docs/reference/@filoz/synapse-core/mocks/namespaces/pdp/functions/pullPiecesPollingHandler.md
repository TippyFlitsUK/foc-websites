---
title: pullPiecesPollingHandler
next: true
prev: true
editUrl: false

---

> **pullPiecesPollingHandler**(`pendingCount`, `finalResponse`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:436](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L436)

Creates a handler that simulates polling, returns pending status N times,
then returns the final response

## Parameters

| Parameter | Type |
| ------ | ------ |
| `pendingCount` | `number` |
| `finalResponse` | [`ReturnType`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/returntype/) |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`

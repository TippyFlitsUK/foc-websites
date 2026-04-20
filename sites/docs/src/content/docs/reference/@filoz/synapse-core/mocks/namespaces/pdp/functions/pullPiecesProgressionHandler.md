---
title: pullPiecesProgressionHandler
next: true
prev: true
editUrl: false

---

> **pullPiecesProgressionHandler**(`statusProgression`, `pieces`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:469](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L469)

Creates a handler that simulates a progression through statuses

## Parameters

| Parameter | Type |
| ------ | ------ |
| `statusProgression` | [`PullStatus`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/pullstatus/)[] |
| `pieces` | `object`[] |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`

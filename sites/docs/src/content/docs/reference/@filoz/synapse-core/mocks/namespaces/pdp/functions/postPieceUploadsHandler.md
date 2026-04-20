---
title: postPieceUploadsHandler
next: true
prev: true
editUrl: false

---

> **postPieceUploadsHandler**(`uuid`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:159](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L159)

Creates a handler for the streaming upload protocol (commp-last)
POST /pdp/piece/uploads - creates upload session, returns UUID
Note: This endpoint doesn't require a request body

## Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`

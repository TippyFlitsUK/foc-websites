---
title: uploadPieceStreamingHandler
next: true
prev: true
editUrl: false

---

> **uploadPieceStreamingHandler**(`uuid`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:176](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L176)

Creates a handler for uploading piece data via streaming protocol
PUT /pdp/piece/uploads/:uuid - streams piece data

## Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`

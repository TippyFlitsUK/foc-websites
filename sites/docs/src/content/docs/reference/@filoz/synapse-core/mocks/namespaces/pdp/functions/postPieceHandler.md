---
title: postPieceHandler
next: true
prev: true
editUrl: false

---

> **postPieceHandler**(`pieceCid`, `uuid?`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:122](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L122)

Creates a handler that supports only one pieceCid
Returns a UUID for 201, or a CID for 200

## Parameters

| Parameter | Type |
| ------ | ------ |
| `pieceCid` | `string` |
| `uuid?` | `string` |
| `options?` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`

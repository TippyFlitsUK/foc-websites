---
title: finalizePieceUploadHandler
next: true
prev: true
editUrl: false

---

> **finalizePieceUploadHandler**(`uuid`, `expectedPieceCid?`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:190](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L190)

Creates a handler for finalizing a streaming upload
POST /pdp/piece/uploads/:uuid - finalize with PieceCID

## Parameters

| Parameter | Type |
| ------ | ------ |
| `uuid` | `string` |
| `expectedPieceCid?` | `string` |
| `options?` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`

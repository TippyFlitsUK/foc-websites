---
title: pullPiecesErrorHandler
next: true
prev: true
editUrl: false

---

> **pullPiecesErrorHandler**(`errorMessage`, `statusCode?`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:421](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L421)

Creates a handler that returns an error response

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `errorMessage` | `string` | `undefined` |
| `statusCode` | `number` | `500` |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) | `{}` |

## Returns

`HttpHandler`

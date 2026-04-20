---
title: streamingUploadHandlers
next: true
prev: true
editUrl: false

---

> **streamingUploadHandlers**(`options?`): `HttpHandler`[]

Defined in: [packages/synapse-core/src/mocks/pdp.ts:214](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L214)

Creates handlers for the complete streaming upload flow (all piece CIDs accepted)
Returns array of handlers for: POST /pdp/piece/uploads, PUT /pdp/piece/uploads/:uuid, POST /pdp/piece/uploads/:uuid

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`[]

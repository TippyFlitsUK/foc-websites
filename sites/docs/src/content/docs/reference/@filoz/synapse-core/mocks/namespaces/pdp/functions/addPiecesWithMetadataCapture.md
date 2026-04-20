---
title: addPiecesWithMetadataCapture
next: true
prev: true
editUrl: false

---

> **addPiecesWithMetadataCapture**(`dataSetId`, `txHash`, `captureCallback`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:328](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L328)

Creates a handler that captures piece metadata from addPieces requests

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `dataSetId` | `bigint` | Data set ID to match |
| `txHash` | `` `0x${string}` `` | Transaction hash to return in Location header |
| `captureCallback` | (`metadata`) => `void` | Callback to store captured metadata |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) | Additional options |

## Returns

`HttpHandler`

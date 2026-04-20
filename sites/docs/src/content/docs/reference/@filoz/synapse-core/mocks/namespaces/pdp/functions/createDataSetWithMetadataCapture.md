---
title: createDataSetWithMetadataCapture
next: true
prev: true
editUrl: false

---

> **createDataSetWithMetadataCapture**(`txHash`, `captureCallback`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:287](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L287)

Creates a handler that captures metadata from createDataSet requests

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `txHash` | `` `0x${string}` `` | Transaction hash to return in Location header |
| `captureCallback` | (`metadata`) => `void` | Callback to store captured metadata |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) | Additional options |

## Returns

`HttpHandler`

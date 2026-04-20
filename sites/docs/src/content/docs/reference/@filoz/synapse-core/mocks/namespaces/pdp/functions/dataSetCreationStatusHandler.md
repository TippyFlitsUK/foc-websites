---
title: dataSetCreationStatusHandler
next: true
prev: true
editUrl: false

---

> **dataSetCreationStatusHandler**(`txHash`, `response`, `options?`): `HttpHandler`

Defined in: [packages/synapse-core/src/mocks/pdp.ts:41](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/pdp.ts#L41)

Creates a handler for data set creation status check

## Parameters

| Parameter | Type |
| ------ | ------ |
| `txHash` | `` `0x${string}` `` |
| `response` | \{ `createMessageHash`: `string`; `dataSetCreated`: `boolean`; `dataSetId?`: `number`; `ok`: `boolean` \| `null`; `service`: `string`; `txStatus`: `string`; \} |
| `response.createMessageHash` | `string` |
| `response.dataSetCreated` | `boolean` |
| `response.dataSetId?` | `number` |
| `response.ok` | `boolean` \| `null` |
| `response.service` | `string` |
| `response.txStatus` | `string` |
| `options` | [`PDPMockOptions`](/reference/filoz/synapse-core/mocks/namespaces/pdp/interfaces/pdpmockoptions/) |

## Returns

`HttpHandler`

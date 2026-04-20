---
title: getApprovedProviderIds
next: true
prev: true
editUrl: false

---

> **getApprovedProviderIds**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts:69](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts#L69)

Get all approved provider IDs with optional pagination

For large lists, use pagination to avoid gas limit issues. If limit=0,
returns all remaining providers starting from offset.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the approved providers. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/type-aliases/optionstype/) | [getApprovedProviderIds.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/type-aliases/outputtype/)\>

Array of approved provider IDs [getApprovedProviderIds.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/type-aliases/outputtype/)

## Throws

Errors [getApprovedProviderIds.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getapprovedproviderids/type-aliases/errortype/)

## Example

```ts
import { getApprovedProviderIds } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

// Get first 100 providers
const providerIds = await getApprovedProviderIds(client, {
  offset: 0n,
  limit: 100n,
})

console.log(providerIds)
```

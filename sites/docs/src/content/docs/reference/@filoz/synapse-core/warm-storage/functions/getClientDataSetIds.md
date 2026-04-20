---
title: getClientDataSetIds
next: true
prev: true
editUrl: false

---

> **getClientDataSetIds**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetids/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts:73](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts#L73)

Get client data set IDs with optional pagination

For large lists, use pagination to avoid gas limit issues. If limit=0,
returns all remaining IDs starting from offset.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get data set IDs. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetids/type-aliases/optionstype/) | [getClientDataSetIds.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetids/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetids/type-aliases/outputtype/)\>

Array of data set IDs [getClientDataSetIds.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetids/type-aliases/outputtype/)

## Throws

Errors [getClientDataSetIds.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasetids/type-aliases/errortype/)

## Example

```ts
import { getClientDataSetIds } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

// Get first 100 dataset IDs
const ids = await getClientDataSetIds(client, {
  address: '0x0000000000000000000000000000000000000000',
  offset: 0n,
  limit: 100n,
})

console.log(ids)
```

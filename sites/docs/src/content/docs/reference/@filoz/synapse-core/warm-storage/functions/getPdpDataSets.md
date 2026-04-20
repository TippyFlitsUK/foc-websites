---
title: getPdpDataSets
next: true
prev: true
editUrl: false

---

> **getPdpDataSets**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdatasets/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-pdp-data-sets.ts:42](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-pdp-data-sets.ts#L42)

Get PDP data sets

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get data sets for a client address. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/optionstype/) | [getPdpDataSets.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdatasets/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdatasets/type-aliases/outputtype/)\>

Array of PDP data set info entries [getPdpDataSets.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdatasets/type-aliases/outputtype/)

## Throws

Errors [getPdpDataSets.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getpdpdatasets/type-aliases/errortype/)

## Example

```ts
import { getPdpDataSets } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const dataSets = await getPdpDataSets(client, {
  client: '0x0000000000000000000000000000000000000000',
})

console.log(dataSets[0]?.dataSetId)
```

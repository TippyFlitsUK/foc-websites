---
title: getClientDataSets
next: true
prev: true
editUrl: false

---

> **getClientDataSets**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-sets.ts:70](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-sets.ts#L70)

Get client data sets

Use [getPdpDataSets](/reference/filoz/synapse-core/warm-storage/functions/getpdpdatasets/) instead to get PDP data sets.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get data sets for a client address. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/optionstype/) | [getClientDataSets.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/outputtype/)\>

Array of data set info entries [getClientDataSets.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/outputtype/)

## Throws

Errors [getClientDataSets.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getclientdatasets/type-aliases/errortype/)

## Example

```ts
import { getClientDataSets } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const dataSets = await getClientDataSets(client, {
  address: '0x0000000000000000000000000000000000000000',
})

console.log(dataSets[0]?.dataSetId)
```

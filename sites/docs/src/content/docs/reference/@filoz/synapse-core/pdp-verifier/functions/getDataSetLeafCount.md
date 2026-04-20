---
title: getDataSetLeafCount
next: true
prev: true
editUrl: false

---

> **getDataSetLeafCount**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-data-set-leaf-count.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-data-set-leaf-count.ts#L43)

Get the leaf count for a data set

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the data set leaf count. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetleafcount/type-aliases/optionstype/) | [getDataSetLeafCount.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetleafcount/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The leaf count for the data set [getDataSetLeafCount.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetleafcount/type-aliases/outputtype/)

## Example

```ts
import { getDataSetLeafCount } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const leafCount = await getDataSetLeafCount(client, { dataSetId: 1n })
```

## Throws

Errors [getDataSetLeafCount.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetleafcount/type-aliases/errortype/)

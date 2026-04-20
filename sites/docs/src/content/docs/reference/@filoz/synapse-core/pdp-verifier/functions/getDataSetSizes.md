---
title: getDataSetSizes
next: true
prev: true
editUrl: false

---

> **getDataSetSizes**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetsizes/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-dataset-size.ts:51](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-dataset-size.ts#L51)

Get the sizes of one or more data sets in bytes via a single multicall.

Takes an array of dataset IDs and returns an array of sizes in the same order.
Uses multicall internally for efficiency.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetsizes/type-aliases/optionstype/) | [getDataSetSizes.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetsizes/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetsizes/type-aliases/outputtype/)\>

Array of data set sizes in bytes [getDataSetSizes.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetsizes/type-aliases/outputtype/)

## Example

```ts
import { getDataSetSizes } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const sizes = await getDataSetSizes(client, {
  dataSetIds: [1n, 2n, 3n],
})

// Single dataset
const [size] = await getDataSetSizes(client, { dataSetIds: [1n] })
```

## Throws

Errors [getDataSetSizes.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetsizes/type-aliases/errortype/)

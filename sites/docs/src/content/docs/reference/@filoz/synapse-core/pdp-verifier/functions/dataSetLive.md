---
title: dataSetLive
next: true
prev: true
editUrl: false

---

> **dataSetLive**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-core/src/pdp-verifier/data-set-live.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/data-set-live.ts#L43)

Check if a data set is live

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to check if the data set is live. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/datasetlive/type-aliases/optionstype/) | [dataSetLive.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/datasetlive/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Whether the data set is live [dataSetLive.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/datasetlive/type-aliases/outputtype/)

## Example

```ts
import { dataSetLive } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const isLive = await dataSetLive(client, { dataSetId: 1n })
```

## Throws

Errors [dataSetLive.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/datasetlive/type-aliases/errortype/)

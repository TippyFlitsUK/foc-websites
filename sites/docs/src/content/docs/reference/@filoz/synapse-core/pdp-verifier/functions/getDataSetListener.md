---
title: getDataSetListener
next: true
prev: true
editUrl: false

---

> **getDataSetListener**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pdp-verifier/get-data-set-listener.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pdp-verifier/get-data-set-listener.ts#L43)

Get the data set listener contract address (record keeper)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the data set listener. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetlistener/type-aliases/optionstype/) | [getDataSetListener.OptionsType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetlistener/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Listener contract address [getDataSetListener.OutputType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetlistener/type-aliases/outputtype/)

## Example

```ts
import { getDataSetListener } from '@filoz/synapse-core/pdp-verifier'
import { calibration } from '@filoz/synapse-core/chains'
import { createPublicClient, http } from 'viem'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const listenerAddress = await getDataSetListener(client, { dataSetId: 1n })
```

## Throws

Errors [getDataSetListener.ErrorType](/reference/filoz/synapse-core/pdp-verifier/namespaces/getdatasetlistener/type-aliases/errortype/)

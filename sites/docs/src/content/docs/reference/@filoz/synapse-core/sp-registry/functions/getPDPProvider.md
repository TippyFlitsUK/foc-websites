---
title: getPDPProvider
next: true
prev: true
editUrl: false

---

> **getPDPProvider**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)\>

Defined in: [packages/synapse-core/src/sp-registry/get-pdp-provider.ts:56](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-pdp-provider.ts#L56)

Get PDP provider details

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the provider details. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovider/type-aliases/optionstype/) | [getPDPProvider.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovider/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)\>

The PDP provider details [getPDPProvider.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovider/type-aliases/outputtype/)

## Throws

Errors [getPDPProvider.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovider/type-aliases/errortype/)

## Example

```ts
import { getPDPProvider } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const provider = await getPDPProvider(client, {
  providerId: 1n,
})

console.log(provider.name)
```

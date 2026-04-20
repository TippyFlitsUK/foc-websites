---
title: getPDPProvidersByIds
next: true
prev: true
editUrl: false

---

> **getPDPProvidersByIds**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovidersbyids/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/get-pdp-providers.ts:256](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-pdp-providers.ts#L256)

Get PDP providers by IDs

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the providers. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovidersbyids/type-aliases/optionstype/) | [getPDPProvidersByIds.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovidersbyids/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovidersbyids/type-aliases/outputtype/)\>

The approved PDP providers [getPDPProvidersByIds.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovidersbyids/type-aliases/outputtype/)

## Throws

Errors [getPDPProvidersByIds.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovidersbyids/type-aliases/errortype/)

## Example

```ts
import { getPDPProvidersByIds } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const result = await getPDPProvidersByIds(client, {
  providerIds: [1n, 2n, 3n],
})

console.log(result)
```

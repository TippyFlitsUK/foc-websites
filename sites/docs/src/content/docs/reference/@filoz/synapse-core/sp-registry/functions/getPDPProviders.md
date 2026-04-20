---
title: getPDPProviders
next: true
prev: true
editUrl: false

---

> **getPDPProviders**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/get-pdp-providers.ts:63](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-pdp-providers.ts#L63)

Get PDP providers with pagination

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the providers. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/optionstype/) | [getPDPProviders.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/outputtype/)\>

The paginated providers result [getPDPProviders.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/outputtype/)

## Throws

Errors [getPDPProviders.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/errortype/)

## Example

```ts
import { getPDPProviders } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const result = await getPDPProviders(client, {
  onlyActive: true,
})

console.log(result.providers)
console.log(result.hasMore)
```

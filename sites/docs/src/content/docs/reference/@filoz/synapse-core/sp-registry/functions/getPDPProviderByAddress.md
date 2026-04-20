---
title: getPDPProviderByAddress
next: true
prev: true
editUrl: false

---

> **getPDPProviderByAddress**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviderbyaddress/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/get-pdp-provider.ts:164](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-pdp-provider.ts#L164)

Get PDP provider by address

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the provider. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviderbyaddress/type-aliases/optionstype/) | [getPDPProviderByAddress.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviderbyaddress/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviderbyaddress/type-aliases/outputtype/)\>

The PDP provider [getPDPProviderByAddress.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviderbyaddress/type-aliases/outputtype/)

## Throws

Errors [getPDPProviderByAddress.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviderbyaddress/type-aliases/errortype/)

## Example

```ts
import { getPDPProviderByAddress } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const provider = await getPDPProviderByAddress(client, {
  address: '0x1234567890123456789012345678901234567890',
})

console.log(provider.name)
```

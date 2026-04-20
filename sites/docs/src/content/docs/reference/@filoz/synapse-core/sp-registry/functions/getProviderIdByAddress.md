---
title: getProviderIdByAddress
next: true
prev: true
editUrl: false

---

> **getProviderIdByAddress**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/sp-registry/get-provider-id-by-address.ts:68](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-provider-id-by-address.ts#L68)

Get provider ID by address

Returns the provider ID for a given provider address. Returns 0 if the address is not registered as a provider.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the provider ID. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getprovideridbyaddress/type-aliases/optionstype/) | [getProviderIdByAddress.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovideridbyaddress/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The provider ID (0 if not found) [getProviderIdByAddress.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovideridbyaddress/type-aliases/outputtype/)

## Throws

Errors [getProviderIdByAddress.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovideridbyaddress/type-aliases/errortype/)

## Example

```ts
import { getProviderIdByAddress } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const providerId = await getProviderIdByAddress(client, {
  providerAddress: '0x1234567890123456789012345678901234567890',
})

if (providerId === 0n) {
  console.log('Provider not found')
} else {
  console.log(`Provider ID: ${providerId}`)
}
```

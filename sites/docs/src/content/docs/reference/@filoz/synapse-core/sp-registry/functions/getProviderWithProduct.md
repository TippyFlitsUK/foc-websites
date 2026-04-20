---
title: getProviderWithProduct
next: true
prev: true
editUrl: false

---

> **getProviderWithProduct**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `product`: \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \}; `productCapabilityValues`: readonly `` `0x${string}` ``[]; `providerId`: `bigint`; `providerInfo`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; \}\>

Defined in: [packages/synapse-core/src/sp-registry/get-provider-with-product.ts:65](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-provider-with-product.ts#L65)

Get provider details with specific product information

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the provider details. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getproviderwithproduct/type-aliases/optionstype/) | [getProviderWithProduct.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getproviderwithproduct/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `product`: \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \}; `productCapabilityValues`: readonly `` `0x${string}` ``[]; `providerId`: `bigint`; `providerInfo`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; \}\>

The provider with product details [getProviderWithProduct.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getproviderwithproduct/type-aliases/outputtype/)

## Throws

Errors [getProviderWithProduct.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getproviderwithproduct/type-aliases/errortype/)

## Example

```ts
import { getProviderWithProduct } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const provider = await getProviderWithProduct(client, {
  providerId: 1n,
  productType: 0, // ProductType.PDP
})

console.log(provider.providerInfo.name)
```

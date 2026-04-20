---
title: getProvidersByProductType
next: true
prev: true
editUrl: false

---

> **getProvidersByProductType**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `hasMore`: `boolean`; `providers`: readonly `object`[]; \}\>

Defined in: [packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts:70](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-providers-by-product-type.ts#L70)

Get providers that offer a specific product type with pagination

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the providers. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getprovidersbyproducttype/type-aliases/optionstype/) | [getProvidersByProductType.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovidersbyproducttype/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `hasMore`: `boolean`; `providers`: readonly `object`[]; \}\>

The paginated providers result [getProvidersByProductType.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovidersbyproducttype/type-aliases/outputtype/)

## Throws

Errors [getProvidersByProductType.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovidersbyproducttype/type-aliases/errortype/)

## Example

```ts
import { getProvidersByProductType } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const result = await getProvidersByProductType(client, {
  productType: 0, // ProductType.PDP
  onlyActive: true,
})

console.log(result.providers)
console.log(result.hasMore)
```

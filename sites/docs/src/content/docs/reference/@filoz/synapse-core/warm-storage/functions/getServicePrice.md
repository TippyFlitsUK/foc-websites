---
title: getServicePrice
next: true
prev: true
editUrl: false

---

> **getServicePrice**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/get-service-price.ts:69](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-service-price.ts#L69)

Get the service price for the warm storage

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the service price. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/type-aliases/optionstype/) | [getServicePrice.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/type-aliases/outputtype/)\>

The service price [getServicePrice.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/type-aliases/outputtype/)

## Throws

Errors [getServicePrice.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/getserviceprice/type-aliases/errortype/)

## Example

```ts
import { getServicePrice } from '@filoz/synapse-core/warm-storage'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const price = await getServicePrice(client, {})

console.log(price.pricePerTiBPerMonthNoCDN)
```

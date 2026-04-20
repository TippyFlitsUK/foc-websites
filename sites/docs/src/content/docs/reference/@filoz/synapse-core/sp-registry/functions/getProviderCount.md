---
title: getProviderCount
next: true
prev: true
editUrl: false

---

> **getProviderCount**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/sp-registry/get-provider-count.ts:58](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-provider-count.ts#L58)

Get the total number of registered providers

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the provider count. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/getprovidercount/type-aliases/optionstype/) | [getProviderCount.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovidercount/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Total number of registered providers [getProviderCount.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovidercount/type-aliases/outputtype/)

## Throws

Errors [getProviderCount.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/getprovidercount/type-aliases/errortype/)

## Example

```ts
import { getProviderCount } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const count = await getProviderCount(client, {})

console.log(count)
```

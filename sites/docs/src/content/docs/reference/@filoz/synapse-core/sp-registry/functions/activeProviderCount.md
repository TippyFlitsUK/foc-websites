---
title: activeProviderCount
next: true
prev: true
editUrl: false

---

> **activeProviderCount**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/sp-registry/active-provider-count.ts:58](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/active-provider-count.ts#L58)

Get the number of active providers

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the active provider count. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/activeprovidercount/type-aliases/optionstype/) | [activeProviderCount.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/activeprovidercount/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Number of active providers [activeProviderCount.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/activeprovidercount/type-aliases/outputtype/)

## Throws

Errors [activeProviderCount.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/activeprovidercount/type-aliases/errortype/)

## Example

```ts
import { activeProviderCount } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const count = await activeProviderCount(client)

console.log(count)
```

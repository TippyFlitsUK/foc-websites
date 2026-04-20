---
title: isProviderActive
next: true
prev: true
editUrl: false

---

> **isProviderActive**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-core/src/sp-registry/is-provider-active.ts:62](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/is-provider-active.ts#L62)

Check if a provider is active

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to check the provider status. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/isprovideractive/type-aliases/optionstype/) | [isProviderActive.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/isprovideractive/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Whether the provider is active [isProviderActive.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/isprovideractive/type-aliases/outputtype/)

## Throws

Errors [isProviderActive.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/isprovideractive/type-aliases/errortype/)

## Example

```ts
import { isProviderActive } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const active = await isProviderActive(client, {
  providerId: 123n,
})

console.log(active)
```

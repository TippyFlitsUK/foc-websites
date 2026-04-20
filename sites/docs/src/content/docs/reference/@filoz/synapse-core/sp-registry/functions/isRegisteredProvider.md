---
title: isRegisteredProvider
next: true
prev: true
editUrl: false

---

> **isRegisteredProvider**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-core/src/sp-registry/is-registered-provider.ts:62](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/is-registered-provider.ts#L62)

Check if an address is a registered provider

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to check if the address is registered. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/isregisteredprovider/type-aliases/optionstype/) | [isRegisteredProvider.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/isregisteredprovider/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Whether the address is a registered provider [isRegisteredProvider.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/isregisteredprovider/type-aliases/outputtype/)

## Throws

Errors [isRegisteredProvider.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/isregisteredprovider/type-aliases/errortype/)

## Example

```ts
import { isRegisteredProvider } from '@filoz/synapse-core/sp-registry'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const registered = await isRegisteredProvider(client, {
  provider: '0x1234567890123456789012345678901234567890',
})

console.log(registered)
```

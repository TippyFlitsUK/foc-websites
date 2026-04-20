---
title: removeProvider
next: true
prev: true
editUrl: false

---

> **removeProvider**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/sp-registry/remove-provider.ts:63](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/remove-provider.ts#L63)

Remove a service provider from the Service Provider Registry

Removes the calling provider from the registry. Only the provider themselves
can remove their own registration.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovider/type-aliases/optionstype/) | [removeProvider.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovider/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [removeProvider.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovider/type-aliases/outputtype/)

## Throws

Errors [removeProvider.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovider/type-aliases/errortype/)

## Example

```ts
import { removeProvider } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const hash = await removeProvider(client, {})

console.log(hash)
```

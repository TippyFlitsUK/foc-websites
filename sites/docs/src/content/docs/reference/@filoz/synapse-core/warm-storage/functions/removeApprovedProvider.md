---
title: removeApprovedProvider
next: true
prev: true
editUrl: false

---

> **removeApprovedProvider**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/warm-storage/remove-approved-provider.ts:85](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/remove-approved-provider.ts#L85)

Remove an approved provider for the client

Removes a provider ID from the approved list using a swap-and-pop pattern.
After removal, the client can no longer create data sets with this provider.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to remove the approved provider. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovider/type-aliases/optionstype/) | [removeApprovedProvider.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovider/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [removeApprovedProvider.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovider/type-aliases/outputtype/)

## Throws

Errors [removeApprovedProvider.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovider/type-aliases/errortype/)

## Example

```ts
import { removeApprovedProvider, getApprovedProviders } from '@filoz/synapse-core/warm-storage'
import { createWalletClient, createPublicClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const walletClient = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})
const publicClient = createPublicClient({
  chain: calibration,
  transport: http(),
})

// First, get the list to find the index
const providers = await getApprovedProviders(publicClient, {
  client: account.address,
})
const providerId = 1n
const index = providers.findIndex((id) => id === providerId)

const txHash = await removeApprovedProvider(walletClient, {
  providerId,
  index: BigInt(index),
})

console.log(txHash)
```

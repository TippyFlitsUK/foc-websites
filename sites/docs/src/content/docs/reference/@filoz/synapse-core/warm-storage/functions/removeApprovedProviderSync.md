---
title: removeApprovedProviderSync
next: true
prev: true
editUrl: false

---

> **removeApprovedProviderSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovidersync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/remove-approved-provider.ts:160](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/remove-approved-provider.ts#L160)

Remove an approved provider for the client and wait for confirmation

Removes a provider ID from the approved list using a swap-and-pop pattern.
After removal, the client can no longer create data sets with this provider.
Waits for the transaction to be confirmed and returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to remove the approved provider. |
| `options` | \{ `contractAddress?`: `` `0x${string}` ``; `index`: `bigint`; `onHash?`: (`hash`) => `void`; `providerId`: `bigint`; \} | [removeApprovedProviderSync.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovidersync/type-aliases/optionstype/) |
| `options.contractAddress?` | `` `0x${string}` `` | Warm storage contract address. If not provided, the default is the storage contract address for the chain. |
| `options.index` | `bigint` | The index of the provider in the approvedProviderIds array. Must match the providerId at that index (reverts on mismatch). Use `getApprovedProviders` to find the correct index. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.providerId` | `bigint` | The ID of the provider to remove from approved list. Reverts if provider is not in list. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovidersync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [removeApprovedProviderSync.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovidersync/type-aliases/outputtype/)

## Throws

Errors [removeApprovedProviderSync.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/removeapprovedprovidersync/type-aliases/errortype/)

## Example

```ts
import { removeApprovedProviderSync, getApprovedProviders } from '@filoz/synapse-core/warm-storage'
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

const { receipt, event } = await removeApprovedProviderSync(walletClient, {
  providerId,
  index: BigInt(index),
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Removed provider ID:', event.args.providerId)
```

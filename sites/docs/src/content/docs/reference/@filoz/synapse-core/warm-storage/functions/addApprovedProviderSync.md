---
title: addApprovedProviderSync
next: true
prev: true
editUrl: false

---

> **addApprovedProviderSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovidersync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/warm-storage/add-approved-provider.ts:125](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/add-approved-provider.ts#L125)

Add an approved provider for the client and wait for confirmation

This function approves a provider so that the client can create data sets with them.
Waits for the transaction to be confirmed and returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to add the approved provider. |
| `options` | \{ `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; `providerId`: `bigint`; \} | [addApprovedProviderSync.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovidersync/type-aliases/optionstype/) |
| `options.contractAddress?` | `` `0x${string}` `` | Warm storage contract address. If not provided, the default is the storage contract address for the chain. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.providerId` | `bigint` | The ID of the provider to approve. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovidersync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [addApprovedProviderSync.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovidersync/type-aliases/outputtype/)

## Throws

Errors [addApprovedProviderSync.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovidersync/type-aliases/errortype/)

## Example

```ts
import { addApprovedProviderSync } from '@filoz/synapse-core/warm-storage'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await addApprovedProviderSync(client, {
  providerId: 1n,
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Provider ID:', event.args.providerId)
```

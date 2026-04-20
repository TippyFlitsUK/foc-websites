---
title: removeProviderSync
next: true
prev: true
editUrl: false

---

> **removeProviderSync**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovidersync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/remove-provider.ts:121](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/remove-provider.ts#L121)

Remove a service provider and wait for confirmation

Removes the calling provider from the registry and waits for the transaction
to be confirmed. Returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; \} | [removeProviderSync.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovidersync/type-aliases/optionstype/) |
| `options.contractAddress?` | `` `0x${string}` `` | Service provider registry contract address. If not provided, the default is the registry contract address for the chain. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovidersync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [removeProviderSync.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovidersync/type-aliases/outputtype/)

## Throws

Errors [removeProviderSync.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/removeprovidersync/type-aliases/errortype/)

## Example

```ts
import { removeProviderSync } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await removeProviderSync(client, {
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Removed provider ID:', event.args.providerId)
```

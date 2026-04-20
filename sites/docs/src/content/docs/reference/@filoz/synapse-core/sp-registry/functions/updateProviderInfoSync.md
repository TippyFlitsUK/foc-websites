---
title: updateProviderInfoSync
next: true
prev: true
editUrl: false

---

> **updateProviderInfoSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfosync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/update-provider-info.ts:135](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/update-provider-info.ts#L135)

Update provider information and wait for confirmation

Updates the name and description for the calling provider and waits for
the transaction to be confirmed. Returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `contractAddress?`: `` `0x${string}` ``; `description`: `string`; `name`: `string`; `onHash?`: (`hash`) => `void`; \} | [updateProviderInfoSync.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfosync/type-aliases/optionstype/) |
| `options.contractAddress?` | `` `0x${string}` `` | Service provider registry contract address. If not provided, the default is the registry contract address for the chain. |
| `options.description` | `string` | The description of the service provider |
| `options.name` | `string` | The name of the service provider |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfosync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [updateProviderInfoSync.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfosync/type-aliases/outputtype/)

## Throws

Errors [updateProviderInfoSync.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfosync/type-aliases/errortype/)

## Example

```ts
import { updateProviderInfoSync } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await updateProviderInfoSync(client, {
  name: 'Updated Provider Name',
  description: 'Updated provider description',
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Provider ID:', event.args.providerId)
```

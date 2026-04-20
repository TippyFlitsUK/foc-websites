---
title: removeProductSync
next: true
prev: true
editUrl: false

---

> **removeProductSync**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/removeproductsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/remove-product.ts:128](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/remove-product.ts#L128)

Remove a product from the service provider and wait for confirmation

Removes a product from the calling provider's offerings and waits for the
transaction to be confirmed. Returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; `productType?`: `number`; \} | [removeProductSync.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/removeproductsync/type-aliases/optionstype/) |
| `options.contractAddress?` | `` `0x${string}` `` | Service provider registry contract address. If not provided, the default is the registry contract address for the chain. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.productType?` | `number` | The product type to remove (0 for PDP). Defaults to 0. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/removeproductsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [removeProductSync.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/removeproductsync/type-aliases/outputtype/)

## Throws

Errors [removeProductSync.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/removeproductsync/type-aliases/errortype/)

## Example

```ts
import { removeProductSync } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await removeProductSync(client, {
  productType: 0,
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Removed provider ID:', event.args.providerId)
console.log('Removed product type:', event.args.productType)
```

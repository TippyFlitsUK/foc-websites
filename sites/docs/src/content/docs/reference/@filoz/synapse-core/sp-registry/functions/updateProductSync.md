---
title: updateProductSync
next: true
prev: true
editUrl: false

---

> **updateProductSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/updateproductsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/update-product.ts:155](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/update-product.ts#L155)

Update a product for the service provider and wait for confirmation

Updates an existing product for the calling provider and waits for the
transaction to be confirmed. Returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `capabilities?`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>; `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; `pdpOffering`: [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/); `productType?`: `number`; \} | [updateProductSync.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproductsync/type-aliases/optionstype/) |
| `options.capabilities?` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> | Additional capabilities as key-value pairs. Optional. |
| `options.contractAddress?` | `` `0x${string}` `` | Service provider registry contract address. If not provided, the default is the registry contract address for the chain. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.pdpOffering` | [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/) | The PDP offering details |
| `options.productType?` | `number` | The product type to update (0 for PDP). Defaults to 0. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/updateproductsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [updateProductSync.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproductsync/type-aliases/outputtype/)

## Throws

Errors [updateProductSync.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproductsync/type-aliases/errortype/)

## Example

```ts
import { updateProductSync } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await updateProductSync(client, {
  pdpOffering: {
    serviceURL: 'https://provider.example.com',
    minPieceSizeInBytes: 1024n,
    maxPieceSizeInBytes: 1073741824n,
    storagePricePerTibPerDay: parseEther('0.15'),
    minProvingPeriodInEpochs: 2880n,
    location: 'us-west',
    paymentTokenAddress: '0x0000000000000000000000000000000000000000',
  },
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Provider ID:', event.args.providerId)
console.log('Product Type:', event.args.productType)
```

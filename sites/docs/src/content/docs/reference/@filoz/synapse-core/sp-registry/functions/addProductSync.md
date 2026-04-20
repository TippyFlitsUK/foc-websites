---
title: addProductSync
next: true
prev: true
editUrl: false

---

> **addProductSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/addproductsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/add-product.ts:157](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/add-product.ts#L157)

Add a product to the service provider and wait for confirmation

Adds a new product to the calling provider's offerings and waits for the
transaction to be confirmed. Returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `capabilities?`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>; `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; `pdpOffering`: [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/); `productType?`: `number`; \} | [addProductSync.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/addproductsync/type-aliases/optionstype/) |
| `options.capabilities?` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> | Additional capabilities as key-value pairs. Optional. |
| `options.contractAddress?` | `` `0x${string}` `` | Service provider registry contract address. If not provided, the default is the registry contract address for the chain. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.pdpOffering` | [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/) | The PDP offering details |
| `options.productType?` | `number` | The product type to add (0 for PDP). Defaults to 0. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/addproductsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [addProductSync.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/addproductsync/type-aliases/outputtype/)

## Throws

Errors [addProductSync.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/addproductsync/type-aliases/errortype/)

## Example

```ts
import { addProductSync } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await addProductSync(client, {
  pdpOffering: {
    serviceURL: 'https://provider.example.com',
    minPieceSizeInBytes: 1024n,
    maxPieceSizeInBytes: 1073741824n,
    storagePricePerTibPerDay: parseEther('0.1'),
    minProvingPeriodInEpochs: 2880n,
    location: 'us-east',
    paymentTokenAddress: '0x0000000000000000000000000000000000000000',
  },
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Provider ID:', event.args.providerId)
console.log('Product Type:', event.args.productType)
```

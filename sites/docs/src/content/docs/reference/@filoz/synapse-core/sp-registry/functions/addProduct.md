---
title: addProduct
next: true
prev: true
editUrl: false

---

> **addProduct**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/sp-registry/add-product.ts:82](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/add-product.ts#L82)

Add a product to the service provider

Adds a new product (e.g., PDP) to the calling provider's offerings with the
specified capabilities. Only the provider themselves can add products.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/addproduct/type-aliases/optionstype/) | [addProduct.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/addproduct/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [addProduct.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/addproduct/type-aliases/outputtype/)

## Throws

Errors [addProduct.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/addproduct/type-aliases/errortype/)

## Example

```ts
import { addProduct } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const hash = await addProduct(client, {
  pdpOffering: {
    serviceURL: 'https://provider.example.com',
    minPieceSizeInBytes: 1024n,
    maxPieceSizeInBytes: 1073741824n,
    storagePricePerTibPerDay: parseEther('0.1'),
    minProvingPeriodInEpochs: 2880n,
    location: 'us-east',
    paymentTokenAddress: '0x0000000000000000000000000000000000000000',
  },
  capabilities: { region: 'us-east', tier: 'premium' },
})

console.log(hash)
```

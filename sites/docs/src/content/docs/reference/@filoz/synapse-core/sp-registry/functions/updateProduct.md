---
title: updateProduct
next: true
prev: true
editUrl: false

---

> **updateProduct**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/sp-registry/update-product.ts:82](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/update-product.ts#L82)

Update a product for the service provider

Updates an existing product (e.g., PDP) for the calling provider with new
capabilities. Only the provider themselves can update their products.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/updateproduct/type-aliases/optionstype/) | [updateProduct.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproduct/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [updateProduct.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproduct/type-aliases/outputtype/)

## Throws

Errors [updateProduct.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproduct/type-aliases/errortype/)

## Example

```ts
import { updateProduct } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const hash = await updateProduct(client, {
  pdpOffering: {
    serviceURL: 'https://provider.example.com',
    minPieceSizeInBytes: 1024n,
    maxPieceSizeInBytes: 1073741824n,
    storagePricePerTibPerDay: parseEther('0.15'),
    minProvingPeriodInEpochs: 2880n,
    location: 'us-west',
    paymentTokenAddress: '0x0000000000000000000000000000000000000000',
  },
  capabilities: { region: 'us-west', tier: 'premium' },
})

console.log(hash)
```

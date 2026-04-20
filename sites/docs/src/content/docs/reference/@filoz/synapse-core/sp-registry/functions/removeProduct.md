---
title: removeProduct
next: true
prev: true
editUrl: false

---

> **removeProduct**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/sp-registry/remove-product.ts:67](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/remove-product.ts#L67)

Remove a product from the service provider

Removes a product (e.g., PDP) from the calling provider's offerings.
Only the provider themselves can remove their own products.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/removeproduct/type-aliases/optionstype/) | [removeProduct.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/removeproduct/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [removeProduct.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/removeproduct/type-aliases/outputtype/)

## Throws

Errors [removeProduct.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/removeproduct/type-aliases/errortype/)

## Example

```ts
import { removeProduct } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const hash = await removeProduct(client, {
  productType: 0,
})

console.log(hash)
```

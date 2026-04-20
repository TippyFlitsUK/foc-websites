---
title: addApprovedProvider
next: true
prev: true
editUrl: false

---

> **addApprovedProvider**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/warm-storage/add-approved-provider.ts:66](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/add-approved-provider.ts#L66)

Add an approved provider for the client

This function approves a provider so that the client can create data sets with them.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to add the approved provider. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovider/type-aliases/optionstype/) | [addApprovedProvider.OptionsType](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovider/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [addApprovedProvider.OutputType](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovider/type-aliases/outputtype/)

## Throws

Errors [addApprovedProvider.ErrorType](/reference/filoz/synapse-core/warm-storage/namespaces/addapprovedprovider/type-aliases/errortype/)

## Example

```ts
import { addApprovedProvider } from '@filoz/synapse-core/warm-storage'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const txHash = await addApprovedProvider(client, {
  providerId: 1n,
})

console.log(txHash)
```

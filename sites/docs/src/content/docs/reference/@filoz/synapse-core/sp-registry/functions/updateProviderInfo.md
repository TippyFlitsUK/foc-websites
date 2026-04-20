---
title: updateProviderInfo
next: true
prev: true
editUrl: false

---

> **updateProviderInfo**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/sp-registry/update-provider-info.ts:70](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/update-provider-info.ts#L70)

Update provider information in the Service Provider Registry

Updates the name and description for the calling provider. Only the provider
themselves can update their own information.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfo/type-aliases/optionstype/) | [updateProviderInfo.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfo/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [updateProviderInfo.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfo/type-aliases/outputtype/)

## Throws

Errors [updateProviderInfo.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/updateproviderinfo/type-aliases/errortype/)

## Example

```ts
import { updateProviderInfo } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const hash = await updateProviderInfo(client, {
  name: 'Updated Provider Name',
  description: 'Updated provider description',
})

console.log(hash)
```

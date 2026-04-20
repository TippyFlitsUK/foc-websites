---
title: registerProvider
next: true
prev: true
editUrl: false

---

> **registerProvider**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:93](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L93)

Register a new service provider in the Service Provider Registry

Registers a new service provider with the specified information and PDP offering.
Requires a registration fee to be paid (typically 5 FIL).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovider/type-aliases/optionstype/) | [registerProvider.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovider/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [registerProvider.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovider/type-aliases/outputtype/)

## Throws

Errors [registerProvider.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovider/type-aliases/errortype/)

## Example

```ts
import { registerProvider } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const hash = await registerProvider(client, {
  payee: account.address,
  name: 'My Storage Provider',
  description: 'High-performance storage service',
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

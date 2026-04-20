---
title: registerProviderSync
next: true
prev: true
editUrl: false

---

> **registerProviderSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovidersync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp-registry/register-provider.ts:187](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/register-provider.ts#L187)

Register a new service provider and wait for confirmation

Registers a new service provider with the specified information and PDP offering.
Waits for the transaction to be confirmed and returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `capabilities?`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>; `contractAddress?`: `` `0x${string}` ``; `description`: `string`; `name`: `string`; `onHash?`: (`hash`) => `void`; `payee`: `` `0x${string}` ``; `pdpOffering`: [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/); `productType?`: `number`; `value?`: `bigint`; \} | [registerProviderSync.OptionsType](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovidersync/type-aliases/optionstype/) |
| `options.capabilities?` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> | Additional capabilities as key-value pairs. Optional. |
| `options.contractAddress?` | `` `0x${string}` `` | Service provider registry contract address. If not provided, the default is the registry contract address for the chain. |
| `options.description` | `string` | The description of the service provider |
| `options.name` | `string` | The name of the service provider |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.payee` | `` `0x${string}` `` | The address that will receive payments for this provider |
| `options.pdpOffering` | [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/) | The PDP offering details |
| `options.productType?` | `number` | The product type to register (0 for PDP). Defaults to 0. |
| `options.value?` | `bigint` | The registration fee value. If not provided, will be fetched from the contract. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovidersync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [registerProviderSync.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovidersync/type-aliases/outputtype/)

## Throws

Errors [registerProviderSync.ErrorType](/reference/filoz/synapse-core/sp-registry/namespaces/registerprovidersync/type-aliases/errortype/)

## Example

```ts
import { registerProviderSync } from '@filoz/synapse-core/sp-registry'
import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await registerProviderSync(client, {
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
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Provider ID:', event.args.providerId)
console.log('Service Provider:', event.args.serviceProvider)
console.log('Payee:', event.args.payee)
```

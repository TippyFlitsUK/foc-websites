---
title: depositSync
next: true
prev: true
editUrl: false

---

> **depositSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/depositsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/deposit.ts:152](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit.ts#L152)

Deposit funds into the Filecoin Pay contract and wait for confirmation

Deposits ERC20 tokens and waits for the transaction to be confirmed.
Returns the receipt with the DepositRecorded event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `amount`: `bigint`; `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; `to?`: `` `0x${string}` ``; `token?`: `` `0x${string}` ``; \} | [depositSync.OptionsType](/reference/filoz/synapse-core/pay/namespaces/depositsync/type-aliases/optionstype/) |
| `options.amount` | `bigint` | The amount to deposit (in token base units). Must be greater than 0. |
| `options.contractAddress?` | `` `0x${string}` `` | Payments contract address. If not provided, the default is the payments contract address for the chain. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.to?` | `` `0x${string}` `` | The recipient address for the deposit. If not provided, the sender's address will be used. |
| `options.token?` | `` `0x${string}` `` | The address of the ERC20 token to deposit. If not provided, the USDFC token address will be used. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/depositsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [depositSync.OutputType](/reference/filoz/synapse-core/pay/namespaces/depositsync/type-aliases/outputtype/)

## Throws

Errors [depositSync.ErrorType](/reference/filoz/synapse-core/pay/namespaces/depositsync/type-aliases/errortype/)

## Example

```ts
import { depositSync } from '@filoz/synapse-core/pay'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await depositSync(client, {
  amount: parseUnits('100', 18),
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Deposited amount:', event.args.amount)
console.log('To:', event.args.to)
```

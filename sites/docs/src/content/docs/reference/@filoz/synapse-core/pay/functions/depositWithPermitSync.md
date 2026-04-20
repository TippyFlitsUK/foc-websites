---
title: depositWithPermitSync
next: true
prev: true
editUrl: false

---

> **depositWithPermitSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/depositwithpermitsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/deposit-with-permit.ts:179](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit-with-permit.ts#L179)

Deposit funds using an ERC-2612 permit and wait for confirmation

Signs an EIP-712 permit and deposits, then waits for the transaction to be confirmed.
Returns the receipt with the DepositRecorded event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `address?`: `` `0x${string}` ``; `amount`: `bigint`; `deadline?`: `bigint`; `onHash?`: (`hash`) => `void`; `spender?`: `` `0x${string}` ``; `token?`: `` `0x${string}` ``; \} | [depositWithPermitSync.OptionsType](/reference/filoz/synapse-core/pay/namespaces/depositwithpermitsync/type-aliases/optionstype/) |
| `options.address?` | `` `0x${string}` `` | The depositor address. If not provided, the client account address will be used. |
| `options.amount` | `bigint` | The amount to deposit (in token base units). Must be greater than 0. |
| `options.deadline?` | `bigint` | The permit deadline as a Unix timestamp (seconds). If not provided, defaults to now + 1 hour. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.spender?` | `` `0x${string}` `` | The spender address for the permit. If not provided, the payments contract address will be used. |
| `options.token?` | `` `0x${string}` `` | The address of the ERC20 token. If not provided, the USDFC token address will be used. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/depositwithpermitsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [depositWithPermitSync.OutputType](/reference/filoz/synapse-core/pay/namespaces/depositwithpermitsync/type-aliases/outputtype/)

## Throws

Errors [depositWithPermitSync.ErrorType](/reference/filoz/synapse-core/pay/namespaces/depositwithpermitsync/type-aliases/errortype/)

## Example

```ts
import { depositWithPermitSync } from '@filoz/synapse-core/pay'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await depositWithPermitSync(client, {
  amount: parseUnits('100', 18),
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Deposited amount:', event.args.amount)
```

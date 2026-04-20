---
title: approveSync
next: true
prev: true
editUrl: false

---

> **approveSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/erc20/namespaces/approvesync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/erc20/approve.ts:137](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/approve.ts#L137)

Approve an ERC20 token allowance and wait for confirmation

Approves a spender to transfer tokens and waits for the transaction to be confirmed.
Returns the receipt with the Approval event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `amount`: `bigint`; `onHash?`: (`hash`) => `void`; `spender?`: `` `0x${string}` ``; `token?`: `` `0x${string}` ``; \} | [approveSync.OptionsType](/reference/filoz/synapse-core/erc20/namespaces/approvesync/type-aliases/optionstype/) |
| `options.amount` | `bigint` | The amount to approve (in token base units). |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.spender?` | `` `0x${string}` `` | The address of the spender to approve. If not provided, the Filecoin Pay contract address will be used. |
| `options.token?` | `` `0x${string}` `` | The address of the ERC20 token to approve. If not provided, the USDFC token address will be used. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/erc20/namespaces/approvesync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [approveSync.OutputType](/reference/filoz/synapse-core/erc20/namespaces/approvesync/type-aliases/outputtype/)

## Throws

Errors [approveSync.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/approvesync/type-aliases/errortype/)

## Example

```ts
import { approveSync } from '@filoz/synapse-core/erc20'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await approveSync(client, {
  amount: parseUnits('100', 18),
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Approved amount:', event.args.value)
console.log('Spender:', event.args.spender)
```

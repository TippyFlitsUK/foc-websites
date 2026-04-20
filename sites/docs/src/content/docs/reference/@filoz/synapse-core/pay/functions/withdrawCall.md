---
title: withdrawCall
next: true
prev: true
editUrl: false

---

> **withdrawCall**(`options`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/withdrawcall/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/withdraw.ts:202](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/withdraw.ts#L202)

Create a call to the withdraw function

This function is used to create a call to the withdraw function for use with
sendCalls, sendTransaction, multicall, estimateContractGas, or simulateContract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `amount`: `bigint`; `chain`: `Chain`; `contractAddress?`: `` `0x${string}` ``; `token?`: `` `0x${string}` ``; \} | [withdrawCall.OptionsType](/reference/filoz/synapse-core/pay/namespaces/withdrawcall/type-aliases/optionstype/) |
| `options.amount` | `bigint` | The amount to withdraw (in token base units). Must be greater than 0. |
| `options.chain` | `Chain` | The chain to use to make the call. |
| `options.contractAddress?` | `` `0x${string}` `` | Payments contract address. If not provided, the default is the payments contract address for the chain. |
| `options.token?` | `` `0x${string}` `` | The address of the ERC20 token to withdraw. If not provided, the USDFC token address will be used. |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/withdrawcall/type-aliases/outputtype/)

The call to the withdraw function [withdrawCall.OutputType](/reference/filoz/synapse-core/pay/namespaces/withdrawcall/type-aliases/outputtype/)

## Throws

Errors [withdrawCall.ErrorType](/reference/filoz/synapse-core/pay/namespaces/withdrawcall/type-aliases/errortype/)

## Example

```ts
import { withdrawCall } from '@filoz/synapse-core/pay'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { simulateContract } from 'viem/actions'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

// Use with simulateContract
const { request } = await simulateContract(client, withdrawCall({
  chain: calibration,
  amount: parseUnits('100', 18),
}))

console.log(request)
```

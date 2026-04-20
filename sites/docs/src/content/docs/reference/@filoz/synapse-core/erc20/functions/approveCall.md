---
title: approveCall
next: true
prev: true
editUrl: false

---

> **approveCall**(`options`): [`OutputType`](/reference/filoz/synapse-core/erc20/namespaces/approvecall/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/erc20/approve.ts:194](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/approve.ts#L194)

Create a call to the approve function

This function is used to create a call to the approve function for use with
sendCalls, sendTransaction, multicall, estimateContractGas, or simulateContract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `amount`: `bigint`; `chain`: `Chain`; `spender?`: `` `0x${string}` ``; `token?`: `` `0x${string}` ``; \} | [approveCall.OptionsType](/reference/filoz/synapse-core/erc20/namespaces/approvecall/type-aliases/optionstype/) |
| `options.amount` | `bigint` | The amount to approve (in token base units). |
| `options.chain` | `Chain` | The chain to use to make the call. |
| `options.spender?` | `` `0x${string}` `` | The address of the spender to approve. If not provided, the Filecoin Pay contract address will be used. |
| `options.token?` | `` `0x${string}` `` | The address of the ERC20 token to approve. If not provided, the USDFC token address will be used. |

## Returns

[`OutputType`](/reference/filoz/synapse-core/erc20/namespaces/approvecall/type-aliases/outputtype/)

The call to the approve function [approveCall.OutputType](/reference/filoz/synapse-core/erc20/namespaces/approvecall/type-aliases/outputtype/)

## Throws

Errors [approveCall.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/approvecall/type-aliases/errortype/)

## Example

```ts
import { approveCall } from '@filoz/synapse-core/erc20'
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
const { request } = await simulateContract(client, approveCall({
  chain: calibration,
  amount: parseUnits('100', 18),
}))

console.log(request)
```

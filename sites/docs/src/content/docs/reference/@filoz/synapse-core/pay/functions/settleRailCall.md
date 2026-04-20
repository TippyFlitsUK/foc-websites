---
title: settleRailCall
next: true
prev: true
editUrl: false

---

> **settleRailCall**(`options`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/settlerailcall/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/settle-rail.ts:200](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-rail.ts#L200)

Create a call to the settleRail function

This function is used to create a call to the settleRail function for use with
sendCalls, sendTransaction, multicall, estimateContractGas, or simulateContract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `chain`: `Chain`; `contractAddress?`: `` `0x${string}` ``; `railId`: `bigint`; `untilEpoch`: `bigint`; \} | [settleRailCall.OptionsType](/reference/filoz/synapse-core/pay/namespaces/settlerailcall/type-aliases/optionstype/) |
| `options.chain` | `Chain` | The chain to use to make the call. |
| `options.contractAddress?` | `` `0x${string}` `` | Payments contract address. If not provided, the default is the payments contract address for the chain. |
| `options.railId` | `bigint` | The rail ID to settle |
| `options.untilEpoch` | `bigint` | The epoch to settle up to. If not provided, the current epoch will be used. |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/settlerailcall/type-aliases/outputtype/)

The call to the settleRail function [settleRailCall.OutputType](/reference/filoz/synapse-core/pay/namespaces/settlerailcall/type-aliases/outputtype/)

## Throws

Errors [settleRailCall.ErrorType](/reference/filoz/synapse-core/pay/namespaces/settlerailcall/type-aliases/errortype/)

## Example

```ts
import { settleRailCall } from '@filoz/synapse-core/pay'
import { createWalletClient, http } from 'viem'
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
const { request } = await simulateContract(client, settleRailCall({
  chain: calibration,
  railId: 1n,
  untilEpoch: 1000n,
}))

console.log(request)
```

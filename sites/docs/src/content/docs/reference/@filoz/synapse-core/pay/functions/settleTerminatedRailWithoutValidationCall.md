---
title: settleTerminatedRailWithoutValidationCall
next: true
prev: true
editUrl: false

---

> **settleTerminatedRailWithoutValidationCall**(`options`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationcall/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/settle-terminated-rail-without-validation.ts:191](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-terminated-rail-without-validation.ts#L191)

Create a call to the settleTerminatedRailWithoutValidation function

This function is used to create a call to the settleTerminatedRailWithoutValidation function for use with
sendCalls, sendTransaction, multicall, estimateContractGas, or simulateContract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `chain`: `Chain`; `contractAddress?`: `` `0x${string}` ``; `railId`: `bigint`; \} | [settleTerminatedRailWithoutValidationCall.OptionsType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationcall/type-aliases/optionstype/) |
| `options.chain` | `Chain` | The chain to use to make the call. |
| `options.contractAddress?` | `` `0x${string}` `` | Payments contract address. If not provided, the default is the payments contract address for the chain. |
| `options.railId` | `bigint` | The rail ID to settle |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationcall/type-aliases/outputtype/)

The call to the settleTerminatedRailWithoutValidation function [settleTerminatedRailWithoutValidationCall.OutputType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationcall/type-aliases/outputtype/)

## Throws

Errors [settleTerminatedRailWithoutValidationCall.ErrorType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationcall/type-aliases/errortype/)

## Example

```ts
import { settleTerminatedRailWithoutValidationCall } from '@filoz/synapse-core/pay'
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
const { request } = await simulateContract(client, settleTerminatedRailWithoutValidationCall({
  chain: calibration,
  railId: 1n,
}))

console.log(request)
```

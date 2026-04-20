---
title: setOperatorApprovalCall
next: true
prev: true
editUrl: false

---

> **setOperatorApprovalCall**(`options`): [`OutputType`](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalcall/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:206](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L206)

Create a call to the setOperatorApproval function

This function is used to create a call to the setOperatorApproval function for use with
sendCalls, sendTransaction, multicall, estimateContractGas, or simulateContract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `approve`: `boolean`; `chain`: `Chain`; `contractAddress?`: `` `0x${string}` ``; `lockupAllowance?`: `bigint`; `maxLockupPeriod?`: `bigint`; `operator?`: `` `0x${string}` ``; `rateAllowance?`: `bigint`; `token?`: `` `0x${string}` ``; \} | [setOperatorApprovalCall.OptionsType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalcall/type-aliases/optionstype/) |
| `options.approve` | `boolean` | Whether to approve (true) or revoke (false) the operator. |
| `options.chain` | `Chain` | The chain to use to make the call. |
| `options.contractAddress?` | `` `0x${string}` `` | Payments contract address. If not provided, the default is the payments contract address for the chain. |
| `options.lockupAllowance?` | `bigint` | Maximum lockup amount the operator can use (in token base units). Defaults to maxUint256 when approving, 0n when revoking. |
| `options.maxLockupPeriod?` | `bigint` | Maximum lockup period in epochs the operator can set for payment rails. Defaults to 30 days in epochs when approving, 0n when revoking. |
| `options.operator?` | `` `0x${string}` `` | The address of the operator to approve/revoke. If not provided, the Warm Storage contract address will be used. |
| `options.rateAllowance?` | `bigint` | Maximum rate the operator can use per epoch (in token base units). Defaults to maxUint256 when approving, 0n when revoking. |
| `options.token?` | `` `0x${string}` `` | The address of the ERC20 token. If not provided, the USDFC token address will be used. |

## Returns

[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalcall/type-aliases/outputtype/)

The call to the setOperatorApproval function [setOperatorApprovalCall.OutputType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalcall/type-aliases/outputtype/)

## Throws

Errors [setOperatorApprovalCall.ErrorType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalcall/type-aliases/errortype/)

## Example

```ts
import { setOperatorApprovalCall } from '@filoz/synapse-core/pay'
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
const { request } = await simulateContract(client, setOperatorApprovalCall({
  chain: calibration,
  approve: true,
}))

console.log(request)
```

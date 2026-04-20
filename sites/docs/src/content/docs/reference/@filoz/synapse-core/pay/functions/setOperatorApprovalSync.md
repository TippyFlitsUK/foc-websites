---
title: setOperatorApprovalSync
next: true
prev: true
editUrl: false

---

> **setOperatorApprovalSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:150](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L150)

Set operator approval on the Filecoin Pay contract and wait for confirmation

Approves or revokes an operator to act on behalf of the caller's account.
Waits for the transaction to be confirmed and returns the receipt with the event.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | \{ `approve`: `boolean`; `contractAddress?`: `` `0x${string}` ``; `lockupAllowance?`: `bigint`; `maxLockupPeriod?`: `bigint`; `onHash?`: (`hash`) => `void`; `operator?`: `` `0x${string}` ``; `rateAllowance?`: `bigint`; `token?`: `` `0x${string}` ``; \} | [setOperatorApprovalSync.OptionsType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalsync/type-aliases/optionstype/) |
| `options.approve` | `boolean` | Whether to approve (true) or revoke (false) the operator. |
| `options.contractAddress?` | `` `0x${string}` `` | Payments contract address. If not provided, the default is the payments contract address for the chain. |
| `options.lockupAllowance?` | `bigint` | Maximum lockup amount the operator can use (in token base units). Defaults to maxUint256 when approving, 0n when revoking. |
| `options.maxLockupPeriod?` | `bigint` | Maximum lockup period in epochs the operator can set for payment rails. Defaults to 30 days in epochs when approving, 0n when revoking. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.operator?` | `` `0x${string}` `` | The address of the operator to approve/revoke. If not provided, the Warm Storage contract address will be used. |
| `options.rateAllowance?` | `bigint` | Maximum rate the operator can use per epoch (in token base units). Defaults to maxUint256 when approving, 0n when revoking. |
| `options.token?` | `` `0x${string}` `` | The address of the ERC20 token. If not provided, the USDFC token address will be used. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [setOperatorApprovalSync.OutputType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalsync/type-aliases/outputtype/)

## Throws

Errors [setOperatorApprovalSync.ErrorType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalsync/type-aliases/errortype/)

## Example

```ts
import { setOperatorApprovalSync } from '@filoz/synapse-core/pay'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const { receipt, event } = await setOperatorApprovalSync(client, {
  approve: true,
  onHash: (hash) => console.log('Transaction sent:', hash),
})

console.log('Approved:', event.args.approved)
console.log('Rate allowance:', event.args.rateAllowance)
```

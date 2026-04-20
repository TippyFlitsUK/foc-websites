---
title: setOperatorApproval
next: true
prev: true
editUrl: false

---

> **setOperatorApproval**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pay/set-operator-approval.ts:84](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/set-operator-approval.ts#L84)

Set operator approval on the Filecoin Pay contract

Approves or revokes an operator to act on behalf of the caller's account.
When approving, defaults to maximum allowances (maxUint256) and 30-day lockup period.
When revoking, defaults to zero allowances.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/setoperatorapproval/type-aliases/optionstype/) | [setOperatorApproval.OptionsType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapproval/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash

## Throws

Errors [setOperatorApproval.ErrorType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapproval/type-aliases/errortype/)

## Example

```ts
import { setOperatorApproval } from '@filoz/synapse-core/pay'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

// Approve operator with defaults
const hash = await setOperatorApproval(client, {
  approve: true,
})

// Revoke operator
const revokeHash = await setOperatorApproval(client, {
  approve: false,
})

console.log(hash)
```

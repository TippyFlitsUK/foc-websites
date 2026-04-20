---
title: useDepositAndApprove
next: true
prev: true
editUrl: false

---

> **useDepositAndApprove**(`props?`): `UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseDepositAndApproveVariables`](/reference/filoz/synapse-react/type-aliases/usedepositandapprovevariables/), `unknown`\>

Defined in: [synapse-react/src/payments/use-deposit-and-approve.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/use-deposit-and-approve.ts#L28)

Deposit and approve ERC20 tokens into the payments contract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | [`UseDepositAndApproveProps`](/reference/filoz/synapse-react/interfaces/usedepositandapproveprops/) | The props for the deposit. [UseDepositAndApproveProps](/reference/filoz/synapse-react/interfaces/usedepositandapproveprops/) |

## Returns

`UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseDepositAndApproveVariables`](/reference/filoz/synapse-react/type-aliases/usedepositandapprovevariables/), `unknown`\>

The deposit and approve mutation.

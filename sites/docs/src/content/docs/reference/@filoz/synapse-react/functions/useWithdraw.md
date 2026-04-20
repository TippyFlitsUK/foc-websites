---
title: useWithdraw
next: true
prev: true
editUrl: false

---

> **useWithdraw**(`props?`): `UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseWithdrawVariables`](/reference/filoz/synapse-react/type-aliases/usewithdrawvariables/), `unknown`\>

Defined in: [synapse-react/src/payments/index.ts:168](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L168)

Withdraw ERC20 tokens from the payments contract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | [`UseWithdrawProps`](/reference/filoz/synapse-react/type-aliases/usewithdrawprops/) | The props for the withdraw. |

## Returns

`UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseWithdrawVariables`](/reference/filoz/synapse-react/type-aliases/usewithdrawvariables/), `unknown`\>

The withdraw mutation.

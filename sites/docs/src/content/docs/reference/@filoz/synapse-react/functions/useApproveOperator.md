---
title: useApproveOperator
next: true
prev: true
editUrl: false

---

> **useApproveOperator**(`props?`): `UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `void`, `unknown`\>

Defined in: [synapse-react/src/payments/index.ts:230](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L230)

Approve a service contract to act as an operator for payment rails.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | [`ApproveOperatorProps`](/reference/filoz/synapse-react/type-aliases/approveoperatorprops/) | The props for the deposit. [ApproveOperatorProps](/reference/filoz/synapse-react/type-aliases/approveoperatorprops/) |

## Returns

`UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `void`, `unknown`\>

The deposit mutation.

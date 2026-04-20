---
title: useRevokeOperator
next: true
prev: true
editUrl: false

---

> **useRevokeOperator**(`props?`): `UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `void`, `unknown`\>

Defined in: [synapse-react/src/payments/index.ts:298](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L298)

Revoke the operator to deposit and withdraw ERC20 tokens from the payments contract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | [`RevokeOperatorProps`](/reference/filoz/synapse-react/type-aliases/revokeoperatorprops/) | The props for the deposit. [RevokeOperatorProps](/reference/filoz/synapse-react/type-aliases/revokeoperatorprops/) |

## Returns

`UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `void`, `unknown`\>

The deposit mutation.

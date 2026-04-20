---
title: useDeposit
next: true
prev: true
editUrl: false

---

> **useDeposit**(`props?`): `UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseDepositVariables`](/reference/filoz/synapse-react/type-aliases/usedepositvariables/), `unknown`\>

Defined in: [synapse-react/src/payments/index.ts:117](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L117)

Deposit ERC20 tokens into the payments contract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | [`UseDepositProps`](/reference/filoz/synapse-react/interfaces/usedepositprops/) | The props for the deposit. [UseDepositProps](/reference/filoz/synapse-react/interfaces/usedepositprops/) |

## Returns

`UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), [`UseDepositVariables`](/reference/filoz/synapse-react/type-aliases/usedepositvariables/), `unknown`\>

The deposit mutation.

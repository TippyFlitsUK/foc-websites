---
title: useAccountInfo
next: true
prev: true
editUrl: false

---

> **useAccountInfo**(`props?`): `UseQueryResult`\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/), [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\>

Defined in: [synapse-react/src/payments/index.ts:36](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/payments/index.ts#L36)

Get the account info from the payments contract.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | [`UseAccountInfoProps`](/reference/filoz/synapse-react/interfaces/useaccountinfoprops/) | The props for the balance. |

## Returns

`UseQueryResult`\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/), [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\>

The account info including funds, lockup details, and available balance.

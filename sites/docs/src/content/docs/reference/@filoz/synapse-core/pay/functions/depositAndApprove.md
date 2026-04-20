---
title: depositAndApprove
next: true
prev: true
editUrl: false

---

> **depositAndApprove**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pay/payments.ts:73](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/payments.ts#L73)

Deposit funds to the payments contract and approve an operator.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use. |
| `options` | [`DepositAndApproveOptions`](/reference/filoz/synapse-core/pay/type-aliases/depositandapproveoptions/) | The options to use. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The hash of the deposit transaction.

## Throws

- SimulateContractErrorType if the simulate contract fails.

## Throws

- WriteContractErrorType if the write contract fails.

## Throws

- [InsufficientBalanceError](/reference/filoz/synapse-core/errors/classes/insufficientbalanceerror/) if the balance is insufficient.

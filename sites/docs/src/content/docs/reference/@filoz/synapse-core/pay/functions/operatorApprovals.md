---
title: operatorApprovals
next: true
prev: true
editUrl: false

---

> **operatorApprovals**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/operator-approvals.ts:82](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/operator-approvals.ts#L82)

Get operator approval information from the Filecoin Pay contract

Returns the approval status and allowances for an operator acting on behalf of a client.
Operators can create and manage payment rails within their approved allowances.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The viem client to use for the contract call. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/optionstype/) | [operatorApprovals.OptionsType](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)\>

The operator approval information [operatorApprovals.OutputType](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)

## Throws

Errors [operatorApprovals.ErrorType](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/errortype/)

## Example

```ts
import { operatorApprovals } from '@filoz/synapse-core/pay'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const approval = await operatorApprovals(client, {
  address: '0x1234567890123456789012345678901234567890',
})

console.log(approval.isApproved)
console.log(approval.rateAllowance)
console.log(approval.lockupAllowance)
```

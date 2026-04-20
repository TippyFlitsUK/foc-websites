---
title: settleTerminatedRailWithoutValidation
next: true
prev: true
editUrl: false

---

> **settleTerminatedRailWithoutValidation**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pay/settle-terminated-rail-without-validation.ts:70](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/settle-terminated-rail-without-validation.ts#L70)

Settle a terminated payment rail without validation

Emergency settlement for terminated rails only - bypasses service contract validation.
This ensures payment even if the validator contract is buggy or unresponsive (pays in full).
Can only be called by the client after the max settlement epoch has passed.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidation/type-aliases/optionstype/) | [settleTerminatedRailWithoutValidation.OptionsType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidation/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash

## Throws

Errors [settleTerminatedRailWithoutValidation.ErrorType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidation/type-aliases/errortype/)

## Example

```ts
import { settleTerminatedRailWithoutValidation } from '@filoz/synapse-core/pay'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

// Settle terminated rail
const hash = await settleTerminatedRailWithoutValidation(client, {
  railId: 1n,
})

console.log(hash)
```

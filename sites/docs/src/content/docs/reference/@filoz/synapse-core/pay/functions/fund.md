---
title: fund
next: true
prev: true
editUrl: false

---

> **fund**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pay/fund.ts:72](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/fund.ts#L72)

Smart deposit that picks the right contract call based on FWSS approval state

Routes to the appropriate action based on current state:
- Needs approval + amount > 0: `depositAndApprove` (deposit with permit + approve FWSS operator)
- Needs approval + amount === 0: `setOperatorApproval` (approve FWSS operator only)
- Already approved + amount > 0: `depositWithPermit` (deposit only via permit)
- Already approved + amount === 0: throws (nothing to do)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/fund/type-aliases/optionstype/) | [fund.OptionsType](/reference/filoz/synapse-core/pay/namespaces/fund/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash

## Throws

Errors [fund.ErrorType](/reference/filoz/synapse-core/pay/namespaces/fund/type-aliases/errortype/)

## Example

```ts
import { fund } from '@filoz/synapse-core/pay'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

// Deposit 100 USDFC (auto-detects approval state)
const hash = await fund(client, {
  amount: parseUnits('100', 18),
})

console.log(hash)
```

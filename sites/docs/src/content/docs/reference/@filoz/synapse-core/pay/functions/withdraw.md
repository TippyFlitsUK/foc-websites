---
title: withdraw
next: true
prev: true
editUrl: false

---

> **withdraw**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pay/withdraw.ts:71](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/withdraw.ts#L71)

Withdraw funds from the Filecoin Pay contract

Withdraws ERC20 tokens from the payments contract to the caller's address.
The withdrawal amount must not exceed available funds (deposited funds minus locked funds).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/withdraw/type-aliases/optionstype/) | [withdraw.OptionsType](/reference/filoz/synapse-core/pay/namespaces/withdraw/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash

## Throws

Errors [withdraw.ErrorType](/reference/filoz/synapse-core/pay/namespaces/withdraw/type-aliases/errortype/)

## Example

```ts
import { withdraw } from '@filoz/synapse-core/pay'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

// Withdraw 100 USDFC to own account
const hash = await withdraw(client, {
  amount: parseUnits('100', 18),
})

console.log(hash)
```

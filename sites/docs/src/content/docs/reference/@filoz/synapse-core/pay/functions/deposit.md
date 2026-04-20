---
title: deposit
next: true
prev: true
editUrl: false

---

> **deposit**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pay/deposit.ts:79](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit.ts#L79)

Deposit funds into the Filecoin Pay contract

Deposits ERC20 tokens into the Filecoin Pay contract for the specified recipient.
The deposit must be approved on the token contract before calling this function.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/deposit/type-aliases/optionstype/) | [deposit.OptionsType](/reference/filoz/synapse-core/pay/namespaces/deposit/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash

## Throws

Errors [deposit.ErrorType](/reference/filoz/synapse-core/pay/namespaces/deposit/type-aliases/errortype/)

## Example

```ts
import { deposit } from '@filoz/synapse-core/pay'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

// Deposit 100 USDFC to own account
const hash = await deposit(client, {
  amount: parseUnits('100', 18),
})

// Deposit to another address
const hash2 = await deposit(client, {
  amount: parseUnits('50', 18),
  to: '0x1234567890123456789012345678901234567890',
})

console.log(hash)
```

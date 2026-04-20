---
title: depositWithPermit
next: true
prev: true
editUrl: false

---

> **depositWithPermit**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/pay/deposit-with-permit.ts:78](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/deposit-with-permit.ts#L78)

Deposit funds into the Filecoin Pay contract using an ERC-2612 permit

Signs an EIP-712 permit for the token and calls the `depositWithPermit` contract function
to approve and deposit in a single transaction (no prior ERC20 approval needed).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/depositwithpermit/type-aliases/optionstype/) | [depositWithPermit.OptionsType](/reference/filoz/synapse-core/pay/namespaces/depositwithpermit/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash

## Throws

Errors [depositWithPermit.ErrorType](/reference/filoz/synapse-core/pay/namespaces/depositwithpermit/type-aliases/errortype/)

## Example

```ts
import { depositWithPermit } from '@filoz/synapse-core/pay'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const hash = await depositWithPermit(client, {
  amount: parseUnits('100', 18),
})

console.log(hash)
```

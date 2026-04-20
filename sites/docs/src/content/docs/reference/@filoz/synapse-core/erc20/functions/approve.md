---
title: approve
next: true
prev: true
editUrl: false

---

> **approve**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/erc20/approve.ts:75](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/approve.ts#L75)

Approve an ERC20 token allowance

Approves a spender to transfer tokens on behalf of the caller up to the specified amount.
This is required before depositing tokens into the Filecoin Pay contract or allowing operators
to manage payment rails.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The viem client with account to use for the transaction. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/erc20/namespaces/approve/type-aliases/optionstype/) | [approve.OptionsType](/reference/filoz/synapse-core/erc20/namespaces/approve/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [approve.OutputType](/reference/filoz/synapse-core/erc20/namespaces/approve/type-aliases/outputtype/)

## Throws

Errors [approve.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/approve/type-aliases/errortype/)

## Example

```ts
import { approve } from '@filoz/synapse-core/erc20'
import { createWalletClient, http, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

// Approve Filecoin Pay contract to spend 100 USDFC
const hash = await approve(client, {
  amount: parseUnits('100', 18),
})

// Approve custom spender
const hash2 = await approve(client, {
  amount: parseUnits('50', 18),
  spender: '0x1234567890123456789012345678901234567890',
})

console.log(hash)
```

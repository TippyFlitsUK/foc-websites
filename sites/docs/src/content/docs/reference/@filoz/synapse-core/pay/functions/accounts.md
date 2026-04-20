---
title: accounts
next: true
prev: true
editUrl: false

---

> **accounts**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/accounts.ts:79](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/accounts.ts#L79)

Get account information from the Filecoin Pay contract

Returns the raw account state including deposited funds and lockup details.
The lockup mechanism ensures funds are available for ongoing payment rails.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the account info. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/optionstype/) | [accounts.OptionsType](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)\>

The account information [accounts.OutputType](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)

## Throws

Errors [accounts.ErrorType](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/errortype/)

## Example

```ts
import { accounts } from '@filoz/synapse-core/pay'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const accountInfo = await accounts(client, {
  address: '0x1234567890123456789012345678901234567890',
})

console.log(accountInfo.funds)
console.log(accountInfo.lockupCurrent)
```

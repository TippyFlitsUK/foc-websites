---
title: schedulePieceDeletion
next: true
prev: true
editUrl: false

---

> **schedulePieceDeletion**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/deletepiece/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/sp/schedule-piece-deletion.ts:98](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/schedule-piece-deletion.ts#L98)

Schedule a piece deletion

Call the Service Provider API to schedule the piece deletion.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to schedule the piece deletion. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/sp/namespaces/schedulepiecedeletion/type-aliases/optionstype/) | [schedulePieceDeletion.OptionsType](/reference/filoz/synapse-core/sp/namespaces/schedulepiecedeletion/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/sp/namespaces/deletepiece/type-aliases/outputtype/)\>

schedule piece deletion operation hash [schedulePieceDeletion.OutputType](/reference/filoz/synapse-core/sp/namespaces/schedulepiecedeletion/type-aliases/outputtype/)

## Throws

Errors [schedulePieceDeletion.ErrorType](/reference/filoz/synapse-core/sp/namespaces/schedulepiecedeletion/type-aliases/errortype/)

## Example

```ts
import { schedulePieceDeletion } from '@filoz/synapse-core/sp'
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { calibration } from '@filoz/synapse-core/chains'

const account = privateKeyToAccount('0x...')
const client = createWalletClient({
  account,
  chain: calibration,
  transport: http(),
})

const result = await schedulePieceDeletion(client, {
  pieceId: 1n,
  dataSetId: 1n,
  clientDataSetId: 1n,
  serviceURL: 'https://pdp.example.com',
})

console.log(result.hash)
```

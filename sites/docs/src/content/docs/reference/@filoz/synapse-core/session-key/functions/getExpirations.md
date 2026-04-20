---
title: getExpirations
next: true
prev: true
editUrl: false

---

> **getExpirations**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Expirations`](/reference/filoz/synapse-core/session-key/type-aliases/expirations/)\>

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:205](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L205)

Get the expirations for all FWSS permissions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use. |
| `options` | \{ `address`: `` `0x${string}` ``; `contractAddress?`: `` `0x${string}` ``; `permissions?`: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[]; `sessionKeyAddress`: `` `0x${string}` ``; \} | [getExpirations.OptionsType](/reference/filoz/synapse-core/session-key/namespaces/getexpirations/type-aliases/optionstype/) |
| `options.address` | `` `0x${string}` `` | The address of the user account. |
| `options.contractAddress?` | `` `0x${string}` `` | Session key registry contract address. If not provided, the default is the session key registry contract address for the chain. |
| `options.permissions?` | [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[] | - |
| `options.sessionKeyAddress` | `` `0x${string}` `` | The address of the session key. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Expirations`](/reference/filoz/synapse-core/session-key/type-aliases/expirations/)\>

Expirations [getExpirations.OutputType](/reference/filoz/synapse-core/session-key/namespaces/getexpirations/type-aliases/outputtype/)

## Throws

Errors [getExpirations.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/getexpirations/type-aliases/errortype/)

## Example

```ts
import { getExpirations } from '@filoz/synapse-core/session-key'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const expirations = await getExpirations(client, {
  address: '0x1234567890123456789012345678901234567890',
  sessionKeyAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
})

console.log(expirations)

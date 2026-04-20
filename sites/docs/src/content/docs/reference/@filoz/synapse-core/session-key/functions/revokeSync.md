---
title: revokeSync
next: true
prev: true
editUrl: false

---

> **revokeSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/session-key/namespaces/revokesync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/session-key/revoke.ts:82](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/revoke.ts#L82)

Revoke session key permissions and wait for confirmation.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to revoke session key permissions. |
| `options` | \{ `address`: `` `0x${string}` ``; `contractAddress?`: `` `0x${string}` ``; `onHash?`: (`hash`) => `void`; `origin?`: `string`; `permissions?`: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[]; \} | [revokeSync.OptionsType](/reference/filoz/synapse-core/session-key/namespaces/revokesync/type-aliases/optionstype/) |
| `options.address` | `` `0x${string}` `` | Session key address. |
| `options.contractAddress?` | `` `0x${string}` `` | Session key registry contract address. If not provided, defaults to the chain contract address. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.origin?` | `string` | The origin of the revoke operation. Defaults to 'synapse'. |
| `options.permissions?` | [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[] | The permissions to revoke from the session key. Defaults to all permissions. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/session-key/namespaces/revokesync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [revokeSync.OutputType](/reference/filoz/synapse-core/session-key/namespaces/revokesync/type-aliases/outputtype/)

## Throws

Errors [revokeSync.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/revokesync/type-aliases/errortype/)

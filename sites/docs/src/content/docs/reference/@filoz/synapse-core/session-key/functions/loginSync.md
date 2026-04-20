---
title: loginSync
next: true
prev: true
editUrl: false

---

> **loginSync**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/session-key/namespaces/loginsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/session-key/login.ts:87](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L87)

Authorize a session key and wait for confirmation.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to authorize the session key. |
| `options` | \{ `address`: `` `0x${string}` ``; `contractAddress?`: `` `0x${string}` ``; `expiresAt?`: `bigint`; `onHash?`: (`hash`) => `void`; `origin?`: `string`; `permissions?`: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[]; \} | [loginSync.OptionsType](/reference/filoz/synapse-core/session-key/namespaces/loginsync/type-aliases/optionstype/) |
| `options.address` | `` `0x${string}` `` | Session key address. |
| `options.contractAddress?` | `` `0x${string}` `` | Session key registry contract address. If not provided, defaults to the chain contract address. |
| `options.expiresAt?` | `bigint` | The expiry time as Unix timestamp (seconds). Defaults to now + 1 hour. |
| `options.onHash?` | (`hash`) => `void` | Callback function called with the transaction hash before waiting for the receipt. |
| `options.origin?` | `string` | The origin of the session key authorization. Defaults to 'synapse'. |
| `options.permissions?` | [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[] | The permissions to authorize for the session key. Defaults to all FWSS permissions. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/session-key/namespaces/loginsync/type-aliases/outputtype/)\>

The transaction receipt and extracted event [loginSync.OutputType](/reference/filoz/synapse-core/session-key/namespaces/loginsync/type-aliases/outputtype/)

## Throws

Errors [loginSync.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/loginsync/type-aliases/errortype/)

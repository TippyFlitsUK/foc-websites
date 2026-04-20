---
title: isExpired
next: true
prev: true
editUrl: false

---

> **isExpired**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:162](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L162)

Check if the session key is expired.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use. |
| `options` | \{ `address`: `` `0x${string}` ``; `contractAddress?`: `` `0x${string}` ``; `permission`: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/); `sessionKeyAddress`: `` `0x${string}` ``; \} | The options to use. |
| `options.address` | `` `0x${string}` `` | The address of the user account. |
| `options.contractAddress?` | `` `0x${string}` `` | Session key registry contract address. If not provided, the default is the session key registry contract address for the chain. |
| `options.permission` | [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/) | The session key permission. |
| `options.sessionKeyAddress` | `` `0x${string}` `` | The address of the session key. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Whether the session key is expired.

## Throws

- [isExpired.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/isexpired/type-aliases/errortype/) if the read contract fails.

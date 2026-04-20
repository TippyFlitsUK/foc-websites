---
title: revoke
next: true
prev: true
editUrl: false

---

> **revoke**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/session-key/revoke.ts:46](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/revoke.ts#L46)

Revoke session key permissions.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to revoke session key permissions. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/session-key/namespaces/revoke/type-aliases/optionstype/) | [revoke.OptionsType](/reference/filoz/synapse-core/session-key/namespaces/revoke/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [revoke.OutputType](/reference/filoz/synapse-core/session-key/namespaces/revoke/type-aliases/outputtype/)

## Throws

Errors [revoke.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/revoke/type-aliases/errortype/)

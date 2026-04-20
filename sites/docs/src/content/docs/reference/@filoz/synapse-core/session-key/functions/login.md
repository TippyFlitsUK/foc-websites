---
title: login
next: true
prev: true
editUrl: false

---

> **login**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/session-key/login.ts:50](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L50)

Authorize a session key with permissions until expiry.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to authorize the session key. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/session-key/namespaces/login/type-aliases/optionstype/) | [login.OptionsType](/reference/filoz/synapse-core/session-key/namespaces/login/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

The transaction hash [login.OutputType](/reference/filoz/synapse-core/session-key/namespaces/login/type-aliases/outputtype/)

## Throws

Errors [login.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/login/type-aliases/errortype/)

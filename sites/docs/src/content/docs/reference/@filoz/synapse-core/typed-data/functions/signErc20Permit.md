---
title: signErc20Permit
next: true
prev: true
editUrl: false

---

> **signErc20Permit**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/typed-data/sign-erc20-permit.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-erc20-permit.ts#L43)

Sign the ERC20 permit message

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to sign the message. |
| `options` | [`SignErc20PermitOptions`](/reference/filoz/synapse-core/typed-data/type-aliases/signerc20permitoptions/) | The options for the ERC20 permit message. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

---
title: watchUsdfc
next: true
prev: true
editUrl: false

---

> **watchUsdfc**(`client`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [packages/synapse-core/src/usdfc.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/usdfc.ts#L23)

Requests that the user tracks the token in their wallet. Returns a boolean indicating if the token was successfully added.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

The result of the watchAsset call.

## See

https://viem.sh/docs/actions/watchAsset.html

---
title: ping
next: true
prev: true
editUrl: false

---

> **ping**(`serviceURL`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [packages/synapse-core/src/sp/ping.ts:12](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/ping.ts#L12)

Ping the PDP API.

GET /pdp/ping

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serviceURL` | `string` | The service URL of the PDP API. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

void

## Throws

Errors [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

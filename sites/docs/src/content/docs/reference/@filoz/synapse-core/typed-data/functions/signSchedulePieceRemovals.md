---
title: signSchedulePieceRemovals
next: true
prev: true
editUrl: false

---

> **signSchedulePieceRemovals**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-core/src/typed-data/sign-schedule-piece-removals.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/sign-schedule-piece-removals.ts#L17)

Sign the schedule piece removals and abi encode the signature

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`, `Account`\> | The client to use to sign the message. |
| `options` | [`SignSchedulePieceRemovalsOptions`](/reference/filoz/synapse-core/typed-data/type-aliases/signschedulepieceremovalsoptions/) | The options for the schedule piece removals message. |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

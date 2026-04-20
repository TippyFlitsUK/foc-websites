---
title: PullOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:574](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L574)

Options for pulling pieces from a source provider

## Properties

### extraData?

> `optional` **extraData?**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:584](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L584)

Pre-built signed extraData (avoids double wallet prompts)

***

### from

> **from**: [`PullSource`](/reference/filoz/synapse-sdk/synapse/type-aliases/pullsource/)

Defined in: [packages/synapse-sdk/src/types.ts:578](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L578)

Source provider to pull from (URL or context with getPieceUrl)

***

### onProgress?

> `optional` **onProgress?**: (`pieceCid`, `status`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:582](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L582)

Pull progress callback

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pieceCid` | `PieceLink` |
| `status` | [`PullStatus`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/pullstatus/) |

#### Returns

`void`

***

### pieces

> **pieces**: `PieceLink`[]

Defined in: [packages/synapse-sdk/src/types.ts:576](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L576)

Pieces to pull

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-sdk/src/types.ts:580](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L580)

Optional AbortSignal

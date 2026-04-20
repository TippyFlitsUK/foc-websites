---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp/find-piece.ts:8](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/find-piece.ts#L8)

## Properties

### pieceCid

> **pieceCid**: [`PieceCID`](/reference/filoz/synapse-core/piece/type-aliases/piececid/)

Defined in: [packages/synapse-core/src/sp/find-piece.ts:12](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/find-piece.ts#L12)

The piece CID to find.

***

### pollInterval?

> `optional` **pollInterval?**: `number`

Defined in: [packages/synapse-core/src/sp/find-piece.ts:20](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/find-piece.ts#L20)

The poll interval in milliseconds. Defaults to 1 second.

***

### retry?

> `optional` **retry?**: `boolean`

Defined in: [packages/synapse-core/src/sp/find-piece.ts:16](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/find-piece.ts#L16)

Whether to retry the request. Defaults to false.

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp/find-piece.ts:10](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/find-piece.ts#L10)

The service URL of the PDP API.

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-core/src/sp/find-piece.ts:14](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/find-piece.ts#L14)

The signal to abort the request.

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [packages/synapse-core/src/sp/find-piece.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/find-piece.ts#L18)

The timeout in milliseconds. Defaults to 5 minutes.

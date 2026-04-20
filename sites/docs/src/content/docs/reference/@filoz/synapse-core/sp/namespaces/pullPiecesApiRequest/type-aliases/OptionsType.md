---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:56](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L56)

Options for pulling pieces from external SPs.

## Properties

### dataSetId?

> `optional` **dataSetId?**: `bigint`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:64](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L64)

Optional target dataset ID (omit or 0n to create new).

***

### extraData

> **extraData**: `Hex`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:62](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L62)

EIP-712 signed extraData for authorization.

***

### pieces

> **pieces**: [`PullPieceInput`](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/type-aliases/pullpieceinput/)[]

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:66](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L66)

Pieces to pull with their source URLs.

***

### recordKeeper

> **recordKeeper**: `Address`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:60](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L60)

The record keeper contract address (e.g., FWSS).

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:58](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L58)

The service URL of the PDP API.

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:68](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L68)

Optional AbortSignal to cancel the request.

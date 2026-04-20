---
title: BasePullPiecesOptions
next: true
prev: true
editUrl: false

---

> **BasePullPiecesOptions** = `object`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:239](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L239)

Base options for pulling pieces.

## Properties

### extraData?

> `optional` **extraData?**: `Hex`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:251](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L251)

Pre-built signed extraData. When provided, skips internal EIP-712 signing.

***

### nonce?

> `optional` **nonce?**: `bigint`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:245](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L245)

Optional nonce for the add pieces signature. Ignored when extraData is provided.

***

### pieces

> **pieces**: [`PullPieceInput`](/reference/filoz/synapse-core/sp/type-aliases/pullpieceinput/)[]

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:243](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L243)

Pieces to pull with their source URLs.

***

### recordKeeper?

> `optional` **recordKeeper?**: `Address`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:247](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L247)

The address of the record keeper. If not provided, the default is the Warm Storage contract address.

***

### serviceURL

> **serviceURL**: `string`

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:241](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L241)

The service URL of the PDP API.

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-core/src/sp/pull-pieces.ts:249](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/pull-pieces.ts#L249)

Optional AbortSignal to cancel the request.

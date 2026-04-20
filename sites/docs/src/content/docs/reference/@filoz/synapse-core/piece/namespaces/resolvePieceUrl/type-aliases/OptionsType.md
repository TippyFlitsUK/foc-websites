---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:14](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L14)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:18](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L18)

The address of the user.

***

### client

> **client**: `Client`\<`Transport`, `Chain`\>

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:16](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L16)

The client to use to resolve the piece URL.

***

### pieceCid

> **pieceCid**: [`PieceCID`](/reference/filoz/synapse-core/piece/type-aliases/piececid/)

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:20](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L20)

The piece CID to resolve.

***

### resolvers?

> `optional` **resolvers?**: [`ResolverFnType`](/reference/filoz/synapse-core/piece/namespaces/resolvepieceurl/type-aliases/resolverfntype/)[]

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:24](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L24)

The resolvers to use to resolve the piece URL. Defaults to [defaultResolvers](/reference/filoz/synapse-core/piece/variables/defaultresolvers/).

***

### signal?

> `optional` **signal?**: [`AbortSignal`](https://developer.mozilla.org/docs/Web/API/AbortSignal)

Defined in: [packages/synapse-core/src/piece/resolve-piece-url.ts:22](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/piece/resolve-piece-url.ts#L22)

The signal to abort the request.

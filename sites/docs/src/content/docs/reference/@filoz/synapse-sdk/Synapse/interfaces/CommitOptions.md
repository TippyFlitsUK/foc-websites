---
title: CommitOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:600](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L600)

Options for committing pieces on-chain

## Properties

### extraData?

> `optional` **extraData?**: `` `0x${string}` ``

Defined in: [packages/synapse-sdk/src/types.ts:604](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L604)

Pre-built signed extraData (avoids re-signing)

***

### onSubmitted?

> `optional` **onSubmitted?**: (`txHash`) => `void`

Defined in: [packages/synapse-sdk/src/types.ts:606](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L606)

Called when the commit transaction is submitted (before on-chain confirmation)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `txHash` | `` `0x${string}` `` |

#### Returns

`void`

***

### pieces

> **pieces**: `object`[]

Defined in: [packages/synapse-sdk/src/types.ts:602](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L602)

Pieces to commit with optional per-piece metadata

#### pieceCid

> **pieceCid**: `PieceLink`

#### pieceMetadata?

> `optional` **pieceMetadata?**: [`MetadataObject`](/reference/filoz/synapse-sdk/synapse/type-aliases/metadataobject/)

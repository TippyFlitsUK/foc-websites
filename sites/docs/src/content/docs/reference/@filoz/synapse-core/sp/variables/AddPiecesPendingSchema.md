---
title: AddPiecesPendingSchema
next: true
prev: true
editUrl: false

---

> `const` **AddPiecesPendingSchema**: `ZodObject`\<\{ `addMessageOk`: `ZodNull`; `dataSetId`: `ZodCodec`\<`ZodInt`, `ZodBigInt`\>; `pieceCount`: `ZodNumber`; `piecesAdded`: `ZodLiteral`\<`false`\>; `txHash`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `txStatus`: `ZodLiteral`\<`"pending"`\>; \}, `$strip`\>

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:145](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L145)

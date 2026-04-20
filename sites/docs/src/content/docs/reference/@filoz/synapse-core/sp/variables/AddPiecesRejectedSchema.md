---
title: AddPiecesRejectedSchema
next: true
prev: true
editUrl: false

---

> `const` **AddPiecesRejectedSchema**: `ZodObject`\<\{ `addMessageOk`: `ZodNull`; `dataSetId`: `ZodCodec`\<`ZodInt`, `ZodBigInt`\>; `pieceCount`: `ZodNumber`; `piecesAdded`: `ZodLiteral`\<`false`\>; `txHash`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `txStatus`: `ZodLiteral`\<`"rejected"`\>; \}, `$strip`\>

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:154](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L154)

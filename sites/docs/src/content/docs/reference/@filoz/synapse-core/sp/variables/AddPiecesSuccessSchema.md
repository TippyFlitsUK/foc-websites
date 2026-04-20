---
title: AddPiecesSuccessSchema
next: true
prev: true
editUrl: false

---

> `const` **AddPiecesSuccessSchema**: `ZodObject`\<\{ `addMessageOk`: `ZodLiteral`\<`true`\>; `confirmedPieceIds`: `ZodArray`\<`ZodCodec`\<`ZodInt`, `ZodBigInt`\>\>; `dataSetId`: `ZodCodec`\<`ZodInt`, `ZodBigInt`\>; `pieceCount`: `ZodNumber`; `piecesAdded`: `ZodLiteral`\<`true`\>; `txHash`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `txStatus`: `ZodLiteral`\<`"confirmed"`\>; \}, `$strip`\>

Defined in: [packages/synapse-core/src/sp/add-pieces.ts:163](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/add-pieces.ts#L163)

---
title: DataSetSchema
next: true
prev: true
editUrl: false

---

> `const` **DataSetSchema**: `ZodObject`\<\{ `id`: `ZodCodec`\<`ZodInt`, `ZodBigInt`\>; `nextChallengeEpoch`: `ZodNumber`; `pieces`: `ZodArray`\<`ZodObject`\<\{ `pieceCid`: `ZodCodec`\<`ZodCustom`\<`string`, `string`\>, `ZodCustom`\<`PieceLink`, `PieceLink`\>\>; `pieceId`: `ZodCodec`\<`ZodInt`, `ZodBigInt`\>; `subPieceCid`: `ZodCodec`\<`ZodCustom`\<`string`, `string`\>, `ZodCustom`\<`PieceLink`, `PieceLink`\>\>; `subPieceOffset`: `ZodNumber`; \}, `$strip`\>\>; \}, `$strip`\>

Defined in: [packages/synapse-core/src/sp/get-data-set.ts:13](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/get-data-set.ts#L13)

---
title: CreateDataSetSuccessSchema
next: true
prev: true
editUrl: false

---

> `const` **CreateDataSetSuccessSchema**: `ZodObject`\<\{ `createMessageHash`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `dataSetCreated`: `ZodLiteral`\<`true`\>; `dataSetId`: `ZodCodec`\<`ZodInt`, `ZodBigInt`\>; `ok`: `ZodLiteral`\<`true`\>; `service`: `ZodString`; `txStatus`: `ZodLiteral`\<`"confirmed"`\>; \}, `$strip`\>

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:173](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L173)

Schema for the create data set success response.

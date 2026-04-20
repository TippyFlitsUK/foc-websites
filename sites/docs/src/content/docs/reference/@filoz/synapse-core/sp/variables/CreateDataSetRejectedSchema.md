---
title: CreateDataSetRejectedSchema
next: true
prev: true
editUrl: false

---

> `const` **CreateDataSetRejectedSchema**: `ZodObject`\<\{ `createMessageHash`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `dataSetCreated`: `ZodLiteral`\<`false`\>; `ok`: `ZodLiteral`\<`false`\>; `service`: `ZodString`; `txStatus`: `ZodLiteral`\<`"rejected"`\>; \}, `$strip`\>

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:162](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L162)

Schema for the create data set rejected response.

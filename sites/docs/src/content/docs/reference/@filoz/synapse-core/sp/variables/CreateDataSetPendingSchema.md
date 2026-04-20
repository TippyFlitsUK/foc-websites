---
title: CreateDataSetPendingSchema
next: true
prev: true
editUrl: false

---

> `const` **CreateDataSetPendingSchema**: `ZodObject`\<\{ `createMessageHash`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `dataSetCreated`: `ZodLiteral`\<`false`\>; `ok`: `ZodNull`; `service`: `ZodString`; `txStatus`: `ZodUnion`\<readonly \[`ZodLiteral`\<`"pending"`\>, `ZodLiteral`\<`"confirmed"`\>\]\>; \}, `$strip`\>

Defined in: [packages/synapse-core/src/sp/create-dataset.ts:151](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp/create-dataset.ts#L151)

Schema for the create data set pending response.

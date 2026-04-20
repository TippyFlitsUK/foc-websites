---
title: FailedAttempt
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:487](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L487)

A provider attempt that did not produce a successful copy.

A non-empty `failedAttempts` array does NOT mean the upload failed.
Failed attempts include providers that were tried and replaced by
successful attempts on other providers. Always check `UploadResult.complete`
to determine overall success.

## Properties

### error

> **error**: `string`

Defined in: [packages/synapse-sdk/src/types.ts:493](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L493)

Error description

***

### explicit

> **explicit**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:495](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L495)

Whether the provider was explicitly specified (no auto-retry for explicit)

***

### providerId

> **providerId**: `bigint`

Defined in: [packages/synapse-sdk/src/types.ts:489](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L489)

Provider ID that was attempted

***

### role

> **role**: [`CopyRole`](/reference/filoz/synapse-sdk/synapse/type-aliases/copyrole/)

Defined in: [packages/synapse-sdk/src/types.ts:491](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L491)

Role the provider was being used for

---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts#L17)

## Properties

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts#L23)

Warm storage contract address. If not provided, the default is the storage view contract address for the chain.

***

### limit?

> `optional` **limit?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts#L21)

Maximum number of providers to return. Use 0 to get all remaining providers. Defaults to 0.

***

### offset?

> `optional` **offset?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-approved-provider-ids.ts#L19)

Starting index (0-based). Use 0 to start from beginning. Defaults to 0.

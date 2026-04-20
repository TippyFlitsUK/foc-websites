---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-sets.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-sets.ts#L19)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-sets.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-sets.ts#L21)

Client address to fetch data sets for.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-sets.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-sets.ts#L27)

Warm storage contract address. If not provided, the default is the storage view contract address for the chain.

***

### limit?

> `optional` **limit?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-sets.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-sets.ts#L25)

Maximum number of data sets to return. Use `0` to get all remaining. Defaults to `0n` (all).

***

### offset?

> `optional` **offset?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-sets.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-sets.ts#L23)

Starting index (0-based). Use `0` to start from the beginning. Defaults to `0n`.

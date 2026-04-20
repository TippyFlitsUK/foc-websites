---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts:17](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts#L17)

## Properties

### address

> **address**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts:19](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts#L19)

Client address to fetch data set IDs for.

***

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts#L25)

Warm storage contract address. If not provided, the default is the storage view contract address for the chain.

***

### limit?

> `optional` **limit?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts#L23)

Maximum number of dataset IDs to return. Use 0 to get all remaining IDs. Defaults to 0.

***

### offset?

> `optional` **offset?**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts:21](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/get-client-data-set-ids.ts#L21)

Starting index (0-based). Use 0 to start from beginning. Defaults to 0.

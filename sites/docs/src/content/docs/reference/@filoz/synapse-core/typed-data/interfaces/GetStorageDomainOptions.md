---
title: GetStorageDomainOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/typed-data/type-definitions.ts:50](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/type-definitions.ts#L50)

## Properties

### chain

> **chain**: [`Chain`](/reference/filoz/synapse-core/chains/interfaces/chain/)

Defined in: [packages/synapse-core/src/typed-data/type-definitions.ts:54](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/type-definitions.ts#L54)

The chain id to use.

***

### verifyingContract?

> `optional` **verifyingContract?**: `` `0x${string}` ``

Defined in: [packages/synapse-core/src/typed-data/type-definitions.ts:58](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/typed-data/type-definitions.ts#L58)

The verifying contract to use. If not provided, the default is the FilecoinWarmStorageService contract address.

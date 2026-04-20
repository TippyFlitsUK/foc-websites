---
title: OptionsType
next: true
prev: true
editUrl: false

---

> **OptionsType** = `object`

Defined in: [packages/synapse-core/src/warm-storage/remove-approved-provider.ts:23](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/remove-approved-provider.ts#L23)

## Properties

### contractAddress?

> `optional` **contractAddress?**: `Address`

Defined in: [packages/synapse-core/src/warm-storage/remove-approved-provider.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/remove-approved-provider.ts#L33)

Warm storage contract address. If not provided, the default is the storage contract address for the chain.

***

### index

> **index**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/remove-approved-provider.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/remove-approved-provider.ts#L31)

The index of the provider in the approvedProviderIds array.
Must match the providerId at that index (reverts on mismatch).
Use `getApprovedProviders` to find the correct index.

***

### providerId

> **providerId**: `bigint`

Defined in: [packages/synapse-core/src/warm-storage/remove-approved-provider.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/warm-storage/remove-approved-provider.ts#L25)

The ID of the provider to remove from approved list. Reverts if provider is not in list.

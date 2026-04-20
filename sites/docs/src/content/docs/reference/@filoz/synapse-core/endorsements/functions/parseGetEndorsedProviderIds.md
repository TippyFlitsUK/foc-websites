---
title: parseGetEndorsedProviderIds
next: true
prev: true
editUrl: false

---

> **parseGetEndorsedProviderIds**(`data`): [`OutputType`](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/endorsements/get-endorsed-provider-ids.ts:135](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/endorsements/get-endorsed-provider-ids.ts#L135)

Parse the result of the getEndorsedProviderIds function

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | readonly `bigint`[] | The result of the getEndorsedProviderIds function [getEndorsedProviderIds.ContractOutputType](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/contractoutputtype/) |

## Returns

[`OutputType`](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/outputtype/)

Array of endorsed provider IDs [getEndorsedProviderIds.OutputType](/reference/filoz/synapse-core/endorsements/namespaces/getendorsedproviderids/type-aliases/outputtype/)

## Example

```ts
import { parseGetEndorsedProviderIds } from '@filoz/synapse-core/endorsements'

const providerIds = parseGetEndorsedProviderIds([1n, 2n, 1n])
console.log(providerIds) // [1n, 2n]
```

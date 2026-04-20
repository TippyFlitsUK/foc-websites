---
title: decodePDPOffering
next: true
prev: true
editUrl: false

---

> **decodePDPOffering**(`provider`): [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/)

Defined in: [packages/synapse-core/src/utils/pdp-capabilities.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/pdp-capabilities.ts#L43)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `provider` | \{ `product`: \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \}; `productCapabilityValues`: readonly `` `0x${string}` ``[]; `providerId`: `bigint`; `providerInfo`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; \} |
| `provider.product` | \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \} |
| `provider.product.capabilityKeys` | readonly `string`[] |
| `provider.product.isActive` | `boolean` |
| `provider.product.productType` | `number` |
| `provider.productCapabilityValues` | readonly `` `0x${string}` ``[] |
| `provider.providerId` | `bigint` |
| `provider.providerInfo` | \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \} |
| `provider.providerInfo.description` | `string` |
| `provider.providerInfo.isActive` | `boolean` |
| `provider.providerInfo.name` | `string` |
| `provider.providerInfo.payee` | `` `0x${string}` `` |
| `provider.providerInfo.serviceProvider` | `` `0x${string}` `` |

## Returns

[`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/)

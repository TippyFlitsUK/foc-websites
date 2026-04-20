---
title: parsePDPProvider
next: true
prev: true
editUrl: false

---

> **parsePDPProvider**(`data`): [`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)

Defined in: [packages/synapse-core/src/sp-registry/get-pdp-provider.ts:119](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-pdp-provider.ts#L119)

Parse the contract output into a PDPProvider object

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | \{ `product`: \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \}; `productCapabilityValues`: readonly `` `0x${string}` ``[]; `providerId`: `bigint`; `providerInfo`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; \} | The contract output from the getPDPProvider function [getPDPProvider.ContractOutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovider/type-aliases/contractoutputtype/) |
| `data.product` | \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \} | - |
| `data.product.capabilityKeys` | readonly `string`[] | - |
| `data.product.isActive` | `boolean` | - |
| `data.product.productType` | `number` | - |
| `data.productCapabilityValues` | readonly `` `0x${string}` ``[] | - |
| `data.providerId` | `bigint` | - |
| `data.providerInfo` | \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \} | - |
| `data.providerInfo.description` | `string` | - |
| `data.providerInfo.isActive` | `boolean` | - |
| `data.providerInfo.name` | `string` | - |
| `data.providerInfo.payee` | `` `0x${string}` `` | - |
| `data.providerInfo.serviceProvider` | `` `0x${string}` `` | - |

## Returns

[`PDPProvider`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpprovider/)

The PDPProvider object [getPDPProvider.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpprovider/type-aliases/outputtype/)

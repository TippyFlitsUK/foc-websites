---
title: parsePDPProviders
next: true
prev: true
editUrl: false

---

> **parsePDPProviders**(`data`): [`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/outputtype/)

Defined in: [packages/synapse-core/src/sp-registry/get-pdp-providers.ts:139](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/sp-registry/get-pdp-providers.ts#L139)

Parse the contract output into a PDPProvider array

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | \{ `hasMore`: `boolean`; `providers`: readonly `object`[]; \} | The contract output from the getPDPProviders function [getPDPProviders.ContractOutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/contractoutputtype/) |
| `data.hasMore` | `boolean` | - |
| `data.providers` | readonly `object`[] | - |

## Returns

[`OutputType`](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/outputtype/)

The PDPProvider array [getPDPProviders.OutputType](/reference/filoz/synapse-core/sp-registry/namespaces/getpdpproviders/type-aliases/outputtype/)

---
title: decodePDPCapabilities
next: true
prev: true
editUrl: false

---

> **decodePDPCapabilities**(`capabilities`): [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/)

Defined in: [packages/synapse-core/src/utils/pdp-capabilities.ts:59](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/pdp-capabilities.ts#L59)

Decode PDP capabilities from keys/values arrays into a PDPOffering object.
Based on Curio's capabilitiesToOffering function.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `capabilities` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `Hex`\> |

## Returns

[`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/)

---
title: encodePDPCapabilities
next: true
prev: true
editUrl: false

---

> **encodePDPCapabilities**(`pdpOffering`, `capabilities?`): \[`string`[], `` `0x${string}` ``[]\]

Defined in: [packages/synapse-core/src/utils/pdp-capabilities.ts:99](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/pdp-capabilities.ts#L99)

Encode PDP capabilities from a PDPOffering object and a capabilities object into a capability keys and values array.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pdpOffering` | [`PDPOffering`](/reference/filoz/synapse-core/sp-registry/interfaces/pdpoffering/) | The PDP offering to encode. |
| `capabilities?` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\> | The capabilities to encode. |

## Returns

\[`string`[], `` `0x${string}` ``[]\]

The encoded capability keys and values.

## Todo

add zod schema validation for the pdp offering and capabilities.

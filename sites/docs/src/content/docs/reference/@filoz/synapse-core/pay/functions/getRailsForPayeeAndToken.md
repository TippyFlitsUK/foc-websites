---
title: getRailsForPayeeAndToken
next: true
prev: true
editUrl: false

---

> **getRailsForPayeeAndToken**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/get-rails-for-payee-and-token.ts:88](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rails-for-payee-and-token.ts#L88)

Get rails for a payee and token with pagination

Returns paginated list of rails where the specified address is the payee for the given token.
Use pagination (offset and limit) to handle large result sets efficiently.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the rails. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/optionstype/) | [getRailsForPayeeAndToken.OptionsType](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/outputtype/)\>

Paginated rail results [getRailsForPayeeAndToken.OutputType](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/outputtype/)

## Throws

Errors [getRailsForPayeeAndToken.ErrorType](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/type-aliases/errortype/)

## Example

```ts
import { getRailsForPayeeAndToken } from '@filoz/synapse-core/pay'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

// Get first 10 rails
const result = await getRailsForPayeeAndToken(client, {
  payee: '0x1234567890123456789012345678901234567890',
  offset: 0n,
  limit: 10n,
})

console.log(`Found ${result.total} total rails`)
console.log(`Returned ${result.results.length} rails`)
for (const rail of result.results) {
  console.log(`Rail ${rail.railId}: ${rail.isTerminated ? 'Terminated' : 'Active'}`)
}
```

---
title: getRail
next: true
prev: true
editUrl: false

---

> **getRail**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/outputtype/)\>

Defined in: [packages/synapse-core/src/pay/get-rail.ts:91](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/pay/get-rail.ts#L91)

Get rail information from the Filecoin Pay contract

Returns detailed information about a payment rail including payer, payee, payment rate,
lockup details, settlement status, and termination status.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the rail info. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/optionstype/) | [getRail.OptionsType](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/outputtype/)\>

The rail information [getRail.OutputType](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/outputtype/)

## Throws

Errors [getRail.ErrorType](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/errortype/)

## Example

```ts
import { getRail } from '@filoz/synapse-core/pay'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const rail = await getRail(client, {
  railId: 1n,
})

console.log('Payer:', rail.from)
console.log('Payee:', rail.to)
console.log('Payment rate:', rail.paymentRate)
console.log('Is terminated:', rail.endEpoch > 0n)
```

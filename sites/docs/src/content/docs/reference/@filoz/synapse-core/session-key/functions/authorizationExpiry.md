---
title: authorizationExpiry
next: true
prev: true
editUrl: false

---

> **authorizationExpiry**(`client`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:76](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L76)

Get the authorization expiry timestamp for a session key permission.

Returns the Unix timestamp (in seconds) when the authorization for the given
address, sessionKeyAddress, and permission combination expires. Returns 0 if no authorization exists.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `client` | `Client`\<`Transport`, `Chain`\> | The client to use to get the authorization expiry. |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpiry/type-aliases/optionstype/) | [authorizationExpiry.OptionsType](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpiry/type-aliases/optionstype/) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The expiry timestamp as a bigint (Unix timestamp in seconds) [authorizationExpiry.OutputType](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpiry/type-aliases/outputtype/)

## Throws

Errors [authorizationExpiry.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpiry/type-aliases/errortype/)

## Example

```ts
import { authorizationExpiry, CreateDataSetPermission } from '@filoz/synapse-core/session-key'
import { createPublicClient, http } from 'viem'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const expiry = await authorizationExpiry(client, {
  address: '0x1234567890123456789012345678901234567890',
  sessionKeyAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
  permission: CreateDataSetPermission,
})

console.log('Authorization expires at:', expiry)
```

---
title: authorizationExpiryCall
next: true
prev: true
editUrl: false

---

> **authorizationExpiryCall**(`options`): `object`

Defined in: [packages/synapse-core/src/session-key/authorization-expiry.ts:138](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/authorization-expiry.ts#L138)

Create a call to the authorizationExpiry function

This function is used to create a call to the authorizationExpiry function for use with the multicall or readContract function.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address`: `` `0x${string}` ``; `chain`: `Chain`; `contractAddress?`: `` `0x${string}` ``; `permission`: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/); `sessionKeyAddress`: `` `0x${string}` ``; \} | [authorizationExpiryCall.OptionsType](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpirycall/type-aliases/optionstype/) |
| `options.address` | `` `0x${string}` `` | The address of the user account. |
| `options.chain` | `Chain` | The chain to use to make the call. |
| `options.contractAddress?` | `` `0x${string}` `` | Session key registry contract address. If not provided, the default is the session key registry contract address for the chain. |
| `options.permission` | [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/) | The session key permission. |
| `options.sessionKeyAddress` | `` `0x${string}` `` | The address of the session key. |

## Returns

`object`

The call to the authorizationExpiry function [authorizationExpiryCall.OutputType](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpirycall/type-aliases/outputtype/)

### abi

> **abi**: readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"permission"`; `type`: `"bytes32"`; \}\]; `name`: `"authorizationExpiry"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"login"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address payable"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"loginAndFund"`; `outputs`: readonly \[\]; `stateMutability`: `"payable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"revoke"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"identity"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `indexed`: `false`; `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"AuthorizationsUpdated"`; `type`: `"event"`; \}\] = `chain.contracts.sessionKeyRegistry.abi`

### address

> **address**: `` `0x${string}` ``

### args

> **args**: \[`` `0x${string}` ``, `` `0x${string}` ``, [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)\]

### functionName

> **functionName**: `"authorizationExpiry"` = `'authorizationExpiry'`

## Throws

Errors [authorizationExpiryCall.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpirycall/type-aliases/errortype/)

## Example

```ts
import { authorizationExpiryCall, CreateDataSetPermission } from '@filoz/synapse-core/session-key'
import { createPublicClient, http } from 'viem'
import { multicall } from 'viem/actions'
import { calibration } from '@filoz/synapse-core/chains'

const client = createPublicClient({
  chain: calibration,
  transport: http(),
})

const results = await multicall(client, {
  contracts: [
    authorizationExpiryCall({
      chain: calibration,
      address: '0x1234567890123456789012345678901234567890',
      sessionKeyAddress: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
      permission: CreateDataSetPermission,
    }),
  ],
})

console.log(results[0])
```

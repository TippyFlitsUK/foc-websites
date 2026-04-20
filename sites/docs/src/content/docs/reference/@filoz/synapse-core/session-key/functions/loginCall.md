---
title: loginCall
next: true
prev: true
editUrl: false

---

> **loginCall**(`options`): `object`

Defined in: [packages/synapse-core/src/session-key/login.ts:116](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/login.ts#L116)

Create a call to the login function.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `address`: `` `0x${string}` ``; `chain`: `Chain`; `contractAddress?`: `` `0x${string}` ``; `expiresAt?`: `bigint`; `origin?`: `string`; `permissions?`: [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[]; \} | [loginCall.OptionsType](/reference/filoz/synapse-core/session-key/namespaces/logincall/type-aliases/optionstype/) |
| `options.address` | `` `0x${string}` `` | Session key address. |
| `options.chain` | `Chain` | The chain to use to make the call. |
| `options.contractAddress?` | `` `0x${string}` `` | Session key registry contract address. If not provided, defaults to the chain contract address. |
| `options.expiresAt?` | `bigint` | The expiry time as Unix timestamp (seconds). Defaults to now + 1 hour. |
| `options.origin?` | `string` | The origin of the session key authorization. Defaults to 'synapse'. |
| `options.permissions?` | [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[] | The permissions to authorize for the session key. Defaults to all FWSS permissions. |

## Returns

`object`

The call object [loginCall.OutputType](/reference/filoz/synapse-core/session-key/namespaces/logincall/type-aliases/outputtype/)

### abi

> **abi**: readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"permission"`; `type`: `"bytes32"`; \}\]; `name`: `"authorizationExpiry"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"login"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address payable"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"loginAndFund"`; `outputs`: readonly \[\]; `stateMutability`: `"payable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"revoke"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"identity"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `indexed`: `false`; `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"AuthorizationsUpdated"`; `type`: `"event"`; \}\] = `chain.contracts.sessionKeyRegistry.abi`

### address

> **address**: `` `0x${string}` ``

### args

> **args**: \[`` `0x${string}` ``, `bigint`, [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[], `string`\]

### functionName

> **functionName**: `"login"` = `'login'`

## Throws

Errors [loginCall.ErrorType](/reference/filoz/synapse-core/session-key/namespaces/logincall/type-aliases/errortype/)

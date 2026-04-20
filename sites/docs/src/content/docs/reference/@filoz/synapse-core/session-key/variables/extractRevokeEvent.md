---
title: extractRevokeEvent
next: true
prev: true
editUrl: false

---

> `const` **extractRevokeEvent**: (`logs`) => `Log`\<`bigint`, `number`, `false`, `undefined`, `true`, readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"permission"`; `type`: `"bytes32"`; \}\]; `name`: `"authorizationExpiry"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"login"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address payable"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"loginAndFund"`; `outputs`: readonly \[\]; `stateMutability`: `"payable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"revoke"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"identity"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `indexed`: `false`; `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"AuthorizationsUpdated"`; `type`: `"event"`; \}\], `"AuthorizationsUpdated"`\> = `extractLoginEvent`

Defined in: [packages/synapse-core/src/session-key/revoke.ts:128](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/revoke.ts#L128)

Extracts the AuthorizationsUpdated event from transaction logs.

Extracts the AuthorizationsUpdated event from transaction logs.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `logs` | `Log`[] | The transaction logs. |

## Returns

`Log`\<`bigint`, `number`, `false`, `undefined`, `true`, readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"user"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32"`; `name`: `"permission"`; `type`: `"bytes32"`; \}\]; `name`: `"authorizationExpiry"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"login"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address payable"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"loginAndFund"`; `outputs`: readonly \[\]; `stateMutability`: `"payable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"revoke"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"identity"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"signer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"expiry"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"bytes32[]"`; `name`: `"permissions"`; `type`: `"bytes32[]"`; \}, \{ `indexed`: `false`; `internalType`: `"string"`; `name`: `"origin"`; `type`: `"string"`; \}\]; `name`: `"AuthorizationsUpdated"`; `type`: `"event"`; \}\], `"AuthorizationsUpdated"`\>

The AuthorizationsUpdated event.

## Param

The transaction logs.

## Returns

The AuthorizationsUpdated event.

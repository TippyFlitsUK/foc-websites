---
title: extractApproveEvent
next: true
prev: true
editUrl: false

---

> **extractApproveEvent**(`logs`): `Log`\<`bigint`, `number`, `false`, `undefined`, `true`, readonly \[\{ `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Approval"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"from"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `name`: `"to"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `name`: `"owner"`; `type`: `"address"`; \}, \{ `name`: `"spender"`; `type`: `"address"`; \}\]; `name`: `"allowance"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"spender"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"approve"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"balanceOf"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"decimals"`; `outputs`: readonly \[\{ `type`: `"uint8"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"name"`; `outputs`: readonly \[\{ `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"symbol"`; `outputs`: readonly \[\{ `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"totalSupply"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"recipient"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transfer"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"sender"`; `type`: `"address"`; \}, \{ `name`: `"recipient"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transferFrom"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}\], `"Approval"`\>

Defined in: [packages/synapse-core/src/erc20/approve.ts:218](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/erc20/approve.ts#L218)

Extracts the Approval event from transaction logs

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `logs` | `Log`[] | The transaction logs |

## Returns

`Log`\<`bigint`, `number`, `false`, `undefined`, `true`, readonly \[\{ `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Approval"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"from"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `name`: `"to"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `name`: `"owner"`; `type`: `"address"`; \}, \{ `name`: `"spender"`; `type`: `"address"`; \}\]; `name`: `"allowance"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"spender"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"approve"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"balanceOf"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"decimals"`; `outputs`: readonly \[\{ `type`: `"uint8"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"name"`; `outputs`: readonly \[\{ `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"symbol"`; `outputs`: readonly \[\{ `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"totalSupply"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"recipient"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transfer"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"sender"`; `type`: `"address"`; \}, \{ `name`: `"recipient"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transferFrom"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}\], `"Approval"`\>

The Approval event

## Throws

Error if the event is not found in the logs

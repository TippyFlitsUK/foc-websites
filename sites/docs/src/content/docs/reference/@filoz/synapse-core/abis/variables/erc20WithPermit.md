---
title: erc20WithPermit
next: true
prev: true
editUrl: false

---

> `const` **erc20WithPermit**: readonly \[\{ `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"owner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Approval"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `indexed`: `true`; `name`: `"from"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `name`: `"to"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `name`: `"value"`; `type`: `"uint256"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `name`: `"owner"`; `type`: `"address"`; \}, \{ `name`: `"spender"`; `type`: `"address"`; \}\]; `name`: `"allowance"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"spender"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"approve"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"balanceOf"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"decimals"`; `outputs`: readonly \[\{ `type`: `"uint8"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"name"`; `outputs`: readonly \[\{ `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"symbol"`; `outputs`: readonly \[\{ `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"totalSupply"`; `outputs`: readonly \[\{ `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"recipient"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transfer"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"sender"`; `type`: `"address"`; \}, \{ `name`: `"recipient"`; `type`: `"address"`; \}, \{ `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"transferFrom"`; `outputs`: readonly \[\{ `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"nonces"`; `outputs`: readonly \[\{ `name`: `""`; `type`: `"uint256"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"version"`; `outputs`: readonly \[\{ `name`: `""`; `type`: `"string"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}\]

Defined in: [packages/synapse-core/src/abis/erc20.ts:9](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/abis/erc20.ts#L9)

ERC20 ABI with Permit extension

## See

https://eips.ethereum.org/EIPS/eip-2612

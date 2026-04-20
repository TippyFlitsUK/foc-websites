---
title: fromSecp256k1
next: true
prev: true
editUrl: false

---

> **fromSecp256k1**(`options`): `Secp256k1SessionKey`

Defined in: [packages/synapse-core/src/session-key/secp256k1.ts:177](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/secp256k1.ts#L177)

Create a session key from a secp256k1 private key.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`FromSecp256k1Options`](/reference/filoz/synapse-core/session-key/interfaces/fromsecp256k1options/) | [FromSecp256k1Options](/reference/filoz/synapse-core/session-key/interfaces/fromsecp256k1options/) |

## Returns

`Secp256k1SessionKey`

SessionKey [SessionKey](/reference/filoz/synapse-core/session-key/interfaces/sessionkey/)

## Example

```ts
import { SessionKey, Account } from '@filoz/synapse-core/session-key'
import { mainnet } from '@filoz/synapse-core/chains'
import type { Hex } from 'viem'

const account = Account.fromSecp256k1({
  privateKey: '0xaa14e25eaea762df1533e72394b85e56dd0c7aa61cf6df3b1f13a842ca0361e5' as Hex,
  rootAddress: '0x1234567890123456789012345678901234567890',
})
const sessionKey = SessionKey.fromSecp256k1({
  account,
  chain: mainnet,
})
```

---
title: session-key
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

Session Key Contract Operations

## Example

```ts
import * as SessionKey from '@filoz/synapse-core/session-key'
import { privateKeyToAccount } from 'viem/accounts'
import { type Hex } from 'viem'
import { mainnet } from '@filoz/synapse-core/chains'

const rootAccount = privateKeyToAccount('0xaa14e25eaea762df1533e72394b85e56dd0c7aa61cf6df3b1f13a842ca0361e5' as Hex)

const sessionKey = SessionKey.fromSecp256k1({
  privateKey: '0xaa14e25eaea762df1533e72394b85e56dd0c7aa61cf6df3b1f13a842ca0361e5' as Hex,
  root: rootAccount,
  chain: mainnet,
})
sessionKey.on('expirationsUpdated', (e) => {console.log(e.detail)})
sessionKey.on('connected', (e) => {console.log(e.detail)})
sessionKey.on('disconnected', () => {console.log('disconnected')})
sessionKey.on('error', (e) => {console.log(e.detail)})

const { event: loginEvent } = await SessionKey.loginSync(client, {
  address: sessionKey.address,
  onHash(hash) {
    console.log(`Waiting for tx ${hash} to be mined...`)
  },
})

console.log('event login:', loginEvent.args)

await sessionKey.connect()

if(sessionKey.hasPermission('CreateDataSet')) {
  const hash = await createDataSet(sessionKey.client, {
    payee: '0x1234567890123456789012345678901234567890',
    payer: sessionKey.rootAddress,
    serviceURL: 'https://example.com',
  })
  console.log('event created dataset:', hash)
}

const { event: revokeEvent } = await SessionKey.revokeSync(client, {
  address: sessionKey.address,
  onHash(hash) {
    console.log(`Waiting for tx ${hash} to be mined...`)
  },
})
console.log('event revoked:', revokeEvent.args)
sessionKey.disconnect()
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [authorizationExpiry](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpiry/toc/) | - |
| [authorizationExpiryCall](/reference/filoz/synapse-core/session-key/namespaces/authorizationexpirycall/toc/) | - |
| [getExpirations](/reference/filoz/synapse-core/session-key/namespaces/getexpirations/toc/) | - |
| [isExpired](/reference/filoz/synapse-core/session-key/namespaces/isexpired/toc/) | - |
| [login](/reference/filoz/synapse-core/session-key/namespaces/login/toc/) | - |
| [loginCall](/reference/filoz/synapse-core/session-key/namespaces/logincall/toc/) | - |
| [loginSync](/reference/filoz/synapse-core/session-key/namespaces/loginsync/toc/) | - |
| [revoke](/reference/filoz/synapse-core/session-key/namespaces/revoke/toc/) | - |
| [revokeCall](/reference/filoz/synapse-core/session-key/namespaces/revokecall/toc/) | - |
| [revokeSync](/reference/filoz/synapse-core/session-key/namespaces/revokesync/toc/) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AccountFromSecp256k1Options](/reference/filoz/synapse-core/session-key/interfaces/accountfromsecp256k1options/) | - |
| [FromSecp256k1Options](/reference/filoz/synapse-core/session-key/interfaces/fromsecp256k1options/) | - |
| [SessionKey](/reference/filoz/synapse-core/session-key/interfaces/sessionkey/) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AddPiecesPermission](/reference/filoz/synapse-core/session-key/type-aliases/addpiecespermission/) | - |
| [CreateDataSetPermission](/reference/filoz/synapse-core/session-key/type-aliases/createdatasetpermission/) | - |
| [DeleteDataSetPermission](/reference/filoz/synapse-core/session-key/type-aliases/deletedatasetpermission/) | - |
| [Expirations](/reference/filoz/synapse-core/session-key/type-aliases/expirations/) | - |
| [Permission](/reference/filoz/synapse-core/session-key/type-aliases/permission/) | - |
| [SchedulePieceRemovalsPermission](/reference/filoz/synapse-core/session-key/type-aliases/schedulepieceremovalspermission/) | - |
| [SessionKeyAccount](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyaccount/) | - |
| [SessionKeyEvents](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/) | - |
| [SessionKeyType](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeytype/) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [AddPiecesPermission](/reference/filoz/synapse-core/session-key/variables/addpiecespermission/) | - |
| [CreateDataSetPermission](/reference/filoz/synapse-core/session-key/variables/createdatasetpermission/) | - |
| [DefaultEmptyExpirations](/reference/filoz/synapse-core/session-key/variables/defaultemptyexpirations/) | - |
| [DefaultFwssPermissions](/reference/filoz/synapse-core/session-key/variables/defaultfwsspermissions/) | - |
| [DeleteDataSetPermission](/reference/filoz/synapse-core/session-key/variables/deletedatasetpermission/) | - |
| [extractRevokeEvent](/reference/filoz/synapse-core/session-key/variables/extractrevokeevent/) | Extracts the AuthorizationsUpdated event from transaction logs. |
| [SchedulePieceRemovalsPermission](/reference/filoz/synapse-core/session-key/variables/schedulepieceremovalspermission/) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [accountFromSecp256k1](/reference/filoz/synapse-core/session-key/functions/accountfromsecp256k1/) | Create a session key account from a secp256k1 private key. |
| [authorizationExpiry](/reference/filoz/synapse-core/session-key/functions/authorizationexpiry/) | Get the authorization expiry timestamp for a session key permission. |
| [authorizationExpiryCall](/reference/filoz/synapse-core/session-key/functions/authorizationexpirycall/) | Create a call to the authorizationExpiry function |
| [extractLoginEvent](/reference/filoz/synapse-core/session-key/functions/extractloginevent/) | Extracts the AuthorizationsUpdated event from transaction logs. |
| [fromSecp256k1](/reference/filoz/synapse-core/session-key/functions/fromsecp256k1/) | Create a session key from a secp256k1 private key. |
| [getExpirations](/reference/filoz/synapse-core/session-key/functions/getexpirations/) | Get the expirations for all FWSS permissions. |
| [isExpired](/reference/filoz/synapse-core/session-key/functions/isexpired/) | Check if the session key is expired. |
| [login](/reference/filoz/synapse-core/session-key/functions/login/) | Authorize a session key with permissions until expiry. |
| [loginCall](/reference/filoz/synapse-core/session-key/functions/logincall/) | Create a call to the login function. |
| [loginSync](/reference/filoz/synapse-core/session-key/functions/loginsync/) | Authorize a session key and wait for confirmation. |
| [revoke](/reference/filoz/synapse-core/session-key/functions/revoke/) | Revoke session key permissions. |
| [revokeCall](/reference/filoz/synapse-core/session-key/functions/revokecall/) | Create a call to the revoke function. |
| [revokeSync](/reference/filoz/synapse-core/session-key/functions/revokesync/) | Revoke session key permissions and wait for confirmation. |

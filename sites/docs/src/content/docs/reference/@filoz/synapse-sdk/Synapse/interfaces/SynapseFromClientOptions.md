---
title: SynapseFromClientOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/types.ts:126](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L126)

## Properties

### client

> **client**: `Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/), `Account`\>

Defined in: [packages/synapse-sdk/src/types.ts:132](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L132)

Viem wallet client

#### See

https://viem.sh/docs/clients/wallet#optional-hoist-the-account

***

### sessionClient?

> `optional` **sessionClient?**: `Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-sdk/synapse/interfaces/chain/), \{ `address`: `` `0x${string}` ``; `keyType`: `"Secp256k1"`; `nonceManager?`: `NonceManager`; `publicKey`: `` `0x${string}` ``; `rootAddress`: `` `0x${string}` ``; `sign`: (`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signAuthorization`: (`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`SignAuthorizationReturnType`\>; `signMessage`: (`__namedParameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signTransaction`: \<`serializer`, `transaction`\>(`transaction`, `options?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signTypedData`: \<`typedData`, `primaryType`\>(`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `source`: `"sessionKey"`; `type`: `"local"`; \}\>

Defined in: [packages/synapse-sdk/src/types.ts:135](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L135)

***

### source

> **source**: `string` \| `null`

Defined in: [packages/synapse-sdk/src/types.ts:145](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L145)

Application identifier for namespace isolation. When set to a non-empty string, datasets
are tagged with this value and only datasets with a matching source are reused. Set to
`null` to explicitly opt out.

***

### withCDN?

> `optional` **withCDN?**: `boolean`

Defined in: [packages/synapse-sdk/src/types.ts:138](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/types.ts#L138)

Whether to use CDN for retrievals (default: false)

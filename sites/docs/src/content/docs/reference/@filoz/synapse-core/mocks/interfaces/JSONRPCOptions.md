---
title: JSONRPCOptions
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L32)

Options for the JSONRPC server

## Properties

### debug?

> `optional` **debug?**: `boolean`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L33)

***

### endorsements?

> `optional` **endorsements?**: [`EndorsementsOptions`](/reference/filoz/synapse-core/mocks/interfaces/endorsementsoptions/)

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:70](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L70)

***

### erc20?

> `optional` **erc20?**: [`ERC20Options`](/reference/filoz/synapse-core/mocks/interfaces/erc20options/)

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:69](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L69)

***

### eth\_accounts?

> `optional` **eth\_accounts?**: `string`[]

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:62](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L62)

***

### eth\_blockNumber?

> `optional` **eth\_blockNumber?**: `string`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:35](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L35)

***

### eth\_chainId?

> `optional` **eth\_chainId?**: `string`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L34)

***

### eth\_estimateGas?

> `optional` **eth\_estimateGas?**: (`params`) => `` `0x${string}` ``

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:45](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L45)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`TransactionRequest`\] \| \[`TransactionRequest`, `bigint` \| `BlockTag`\] \| \[`TransactionRequest`, `bigint` \| `BlockTag`, `RpcStateOverride`\] |

#### Returns

`` `0x${string}` ``

***

### eth\_fillTransaction?

> `optional` **eth\_fillTransaction?**: (`params`) => `object`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:39](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L39)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`TransactionRequest`\] |

#### Returns

`object`

##### raw

> **raw**: `` `0x${string}` ``

##### tx

> **tx**: `RpcTransaction`

***

### eth\_gasPrice?

> `optional` **eth\_gasPrice?**: () => `` `0x${string}` ``

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:59](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L59)

#### Returns

`` `0x${string}` ``

***

### eth\_getBalance?

> `optional` **eth\_getBalance?**: (`params`) => `` `0x${string}` ``

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:36](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L36)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`` `0x${string}` ``, `bigint` \| `BlockTag`\] |

#### Returns

`` `0x${string}` ``

***

### eth\_getBlockByNumber?

> `optional` **eth\_getBlockByNumber?**: (`params`) => `Block`\<`` `0x${string}` ``, `boolean`, `BlockTag`, `RpcTransaction`\<`false`\>\> \| `null`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:51](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L51)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`bigint` \| `BlockTag`, `boolean`\] |

#### Returns

`Block`\<`` `0x${string}` ``, `boolean`, `BlockTag`, `RpcTransaction`\<`false`\>\> \| `null`

***

### eth\_getTransactionByHash?

> `optional` **eth\_getTransactionByHash?**: (`params`) => `any`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:37](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L37)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `any` |

#### Returns

`any`

***

### eth\_getTransactionCount?

> `optional` **eth\_getTransactionCount?**: (`params`) => `` `0x${string}` ``

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`` `0x${string}` ``, `bigint` \| `BlockTag` \| `BlockIdentifier`\] |

#### Returns

`` `0x${string}` ``

***

### eth\_getTransactionReceipt?

> `optional` **eth\_getTransactionReceipt?**: (`params`) => `any`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:38](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L38)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `any` |

#### Returns

`any`

***

### eth\_maxPriorityFeePerGas?

> `optional` **eth\_maxPriorityFeePerGas?**: () => `` `0x${string}` ``

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:60](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L60)

#### Returns

`` `0x${string}` ``

***

### eth\_sendRawTransaction?

> `optional` **eth\_sendRawTransaction?**: (`params`) => `` `0x${string}` ``

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:61](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L61)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`` `0x${string}` ``\] |

#### Returns

`` `0x${string}` ``

***

### eth\_signTypedData\_v4?

> `optional` **eth\_signTypedData\_v4?**: (`params`) => `string`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:43](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `any` |

#### Returns

`string`

***

### payments?

> `optional` **payments?**: [`PaymentsOptions`](/reference/filoz/synapse-core/mocks/interfaces/paymentsoptions/)

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:65](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L65)

***

### pdpVerifier?

> `optional` **pdpVerifier?**: [`PDPVerifierOptions`](/reference/filoz/synapse-core/mocks/interfaces/pdpverifieroptions/)

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:64](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L64)

***

### serviceRegistry?

> `optional` **serviceRegistry?**: [`ServiceRegistryOptions`](/reference/filoz/synapse-core/mocks/interfaces/serviceregistryoptions/)

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:67](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L67)

***

### sessionKeyRegistry?

> `optional` **sessionKeyRegistry?**: [`SessionKeyRegistryOptions`](/reference/filoz/synapse-core/mocks/interfaces/sessionkeyregistryoptions/)

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:68](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L68)

***

### warmStorage?

> `optional` **warmStorage?**: [`WarmStorageOptions`](/reference/filoz/synapse-core/mocks/interfaces/warmstorageoptions/)

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:63](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L63)

***

### warmStorageView?

> `optional` **warmStorageView?**: [`WarmStorageViewOptions`](/reference/filoz/synapse-core/mocks/interfaces/warmstorageviewoptions/)

Defined in: [packages/synapse-core/src/mocks/jsonrpc/types.ts:66](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/types.ts#L66)

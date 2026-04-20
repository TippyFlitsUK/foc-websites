---
title: presets
next: true
prev: true
editUrl: false

---

> `const` **presets**: `object`

Defined in: [packages/synapse-core/src/mocks/jsonrpc/index.ts:301](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/mocks/jsonrpc/index.ts#L301)

## Type Declaration

### basic

> **basic**: `object`

#### basic.debug

> **debug**: `boolean`

#### basic.endorsements

> **endorsements**: `object`

#### basic.endorsements.getProviderIds

> **getProviderIds**: (`args`) => readonly \[readonly `bigint`[]\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[readonly `bigint`[]\]

#### basic.erc20

> **erc20**: `object`

#### basic.erc20.allowance

> **allowance**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``\] |

##### Returns

readonly \[`bigint`\]

#### basic.erc20.approve

> **approve**: (`args`) => readonly \[`boolean`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `bigint`\] |

##### Returns

readonly \[`boolean`\]

#### basic.erc20.balanceOf

> **balanceOf**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

##### Returns

readonly \[`bigint`\]

#### basic.erc20.decimals

> **decimals**: (`args`) => readonly \[`number`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`number`\]

#### basic.erc20.name

> **name**: (`args`) => readonly \[`string`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`string`\]

#### basic.erc20.nonces

> **nonces**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

##### Returns

readonly \[`bigint`\]

#### basic.erc20.symbol

> **symbol**: (`args`) => readonly \[`string`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`string`\]

#### basic.erc20.version

> **version**: (`args`) => readonly \[`string`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`string`\]

#### basic.eth\_accounts

> **eth\_accounts**: `string`[]

#### basic.eth\_blockNumber

> **eth\_blockNumber**: `string`

#### basic.eth\_chainId

> **eth\_chainId**: `string`

#### basic.eth\_estimateGas

> **eth\_estimateGas**: (`params`) => `` `0x${string}` ``

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`TransactionRequest`\] \| \[`TransactionRequest`, `bigint` \| `BlockTag`\] \| \[`TransactionRequest`, `bigint` \| `BlockTag`, `RpcStateOverride`\] |

##### Returns

`` `0x${string}` ``

#### basic.eth\_fillTransaction

> **eth\_fillTransaction**: (`params`) => `object`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`TransactionRequest`\] |

##### Returns

`object`

###### raw

> **raw**: `` `0x${string}` ``

###### tx

> **tx**: `RpcTransaction`

#### basic.eth\_gasPrice

> **eth\_gasPrice**: () => `` `0x${string}` ``

##### Returns

`` `0x${string}` ``

#### basic.eth\_getBalance

> **eth\_getBalance**: (`params`) => `` `0x${string}` ``

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`` `0x${string}` ``, `bigint` \| `BlockTag`\] |

##### Returns

`` `0x${string}` ``

#### basic.eth\_getBlockByNumber

> **eth\_getBlockByNumber**: (`params`) => `Block`\<`` `0x${string}` ``, `boolean`, `BlockTag`, `RpcTransaction`\<`false`\>\> \| `null`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`bigint` \| `BlockTag`, `boolean`\] |

##### Returns

`Block`\<`` `0x${string}` ``, `boolean`, `BlockTag`, `RpcTransaction`\<`false`\>\> \| `null`

#### basic.eth\_getTransactionByHash

> **eth\_getTransactionByHash**: (`params`) => `any`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `any` |

##### Returns

`any`

#### basic.eth\_getTransactionCount

> **eth\_getTransactionCount**: (`params`) => `` `0x${string}` ``

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`` `0x${string}` ``, `bigint` \| `BlockTag` \| `BlockIdentifier`\] |

##### Returns

`` `0x${string}` ``

#### basic.eth\_getTransactionReceipt

> **eth\_getTransactionReceipt**: (`params`) => `any`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `any` |

##### Returns

`any`

#### basic.eth\_maxPriorityFeePerGas

> **eth\_maxPriorityFeePerGas**: () => `` `0x${string}` ``

##### Returns

`` `0x${string}` ``

#### basic.eth\_sendRawTransaction

> **eth\_sendRawTransaction**: (`params`) => `` `0x${string}` ``

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | \[`` `0x${string}` ``\] |

##### Returns

`` `0x${string}` ``

#### basic.eth\_signTypedData\_v4

> **eth\_signTypedData\_v4**: (`params`) => `string`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | `any` |

##### Returns

`string`

#### basic.payments

> **payments**: `object`

#### basic.payments.accounts

> **accounts**: (`args`) => readonly \[`bigint`, `bigint`, `bigint`, `bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``\] |

##### Returns

readonly \[`bigint`, `bigint`, `bigint`, `bigint`\]

#### basic.payments.deposit

> **deposit**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`\] |

##### Returns

readonly \[\]

#### basic.payments.depositWithPermit

> **depositWithPermit**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`, `number`, `` `0x${string}` ``, `` `0x${string}` ``\] |

##### Returns

readonly \[\]

#### basic.payments.depositWithPermitAndApproveOperator

> **depositWithPermitAndApproveOperator**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`, `number`, `` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`, `bigint`\] |

##### Returns

readonly \[\]

#### basic.payments.getRail

> **getRail**: (`args`) => readonly \[\{ `commissionRateBps`: `bigint`; `endEpoch`: `bigint`; `from`: `` `0x${string}` ``; `lockupFixed`: `bigint`; `lockupPeriod`: `bigint`; `operator`: `` `0x${string}` ``; `paymentRate`: `bigint`; `serviceFeeRecipient`: `` `0x${string}` ``; `settledUpTo`: `bigint`; `to`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; `validator`: `` `0x${string}` ``; \}\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[\{ `commissionRateBps`: `bigint`; `endEpoch`: `bigint`; `from`: `` `0x${string}` ``; `lockupFixed`: `bigint`; `lockupPeriod`: `bigint`; `operator`: `` `0x${string}` ``; `paymentRate`: `bigint`; `serviceFeeRecipient`: `` `0x${string}` ``; `settledUpTo`: `bigint`; `to`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; `validator`: `` `0x${string}` ``; \}\]

#### basic.payments.getRailsForPayeeAndToken

> **getRailsForPayeeAndToken**: (`args`) => readonly \[readonly `object`[], `bigint`, `bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`\] |

##### Returns

readonly \[readonly `object`[], `bigint`, `bigint`\]

#### basic.payments.getRailsForPayerAndToken

> **getRailsForPayerAndToken**: (`args`) => readonly \[readonly `object`[], `bigint`, `bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`\] |

##### Returns

readonly \[readonly `object`[], `bigint`, `bigint`\]

#### basic.payments.operatorApprovals

> **operatorApprovals**: (`args`) => readonly \[`boolean`, `bigint`, `bigint`, `bigint`, `bigint`, `bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``\] |

##### Returns

readonly \[`boolean`, `bigint`, `bigint`, `bigint`, `bigint`, `bigint`\]

#### basic.payments.setOperatorApproval

> **setOperatorApproval**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `boolean`, `bigint`, `bigint`, `bigint`\] |

##### Returns

readonly \[\]

#### basic.payments.settleRail

> **settleRail**: (`args`) => readonly \[`bigint`, `bigint`, `bigint`, `bigint`, `bigint`, `string`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

##### Returns

readonly \[`bigint`, `bigint`, `bigint`, `bigint`, `bigint`, `string`\]

#### basic.payments.settleTerminatedRailWithoutValidation

> **settleTerminatedRailWithoutValidation**: (`args`) => readonly \[`bigint`, `bigint`, `bigint`, `bigint`, `bigint`, `string`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`bigint`, `bigint`, `bigint`, `bigint`, `bigint`, `string`\]

#### basic.payments.withdraw

> **withdraw**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `bigint`\] |

##### Returns

readonly \[\]

#### basic.payments.withdrawTo

> **withdrawTo**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `bigint`\] |

##### Returns

readonly \[\]

#### basic.pdpVerifier

> **pdpVerifier**: `object`

#### basic.pdpVerifier.dataSetLive

> **dataSetLive**: (`args`) => readonly \[`boolean`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`boolean`\]

#### basic.pdpVerifier.getActivePieceCount

> **getActivePieceCount**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`bigint`\]

#### basic.pdpVerifier.getActivePieces

> **getActivePieces**: (`args`) => readonly \[readonly `object`[], readonly `bigint`[], `boolean`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`, `bigint`\] |

##### Returns

readonly \[readonly `object`[], readonly `bigint`[], `boolean`\]

#### basic.pdpVerifier.getDataSetLeafCount

> **getDataSetLeafCount**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`bigint`\]

#### basic.pdpVerifier.getDataSetListener

> **getDataSetListener**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.pdpVerifier.getDataSetStorageProvider

> **getDataSetStorageProvider**: (`args`) => readonly \[`` `0x${string}` ``, `` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`` `0x${string}` ``, `` `0x${string}` ``\]

#### basic.pdpVerifier.getNextChallengeEpoch

> **getNextChallengeEpoch**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`bigint`\]

#### basic.pdpVerifier.getNextPieceId

> **getNextPieceId**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`bigint`\]

#### basic.pdpVerifier.getScheduledRemovals

> **getScheduledRemovals**: (`args`) => readonly \[readonly `bigint`[]\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[readonly `bigint`[]\]

#### basic.serviceRegistry

> **serviceRegistry**: `object`

#### basic.serviceRegistry.activeProviderCount

> **activeProviderCount**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`bigint`\]

#### basic.serviceRegistry.addProduct

> **addProduct**: (`args`, `value`, `from`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`number`, readonly `string`[], readonly `` `0x${string}` ``[]\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

##### Returns

readonly \[\]

#### basic.serviceRegistry.getAllActiveProviders

> **getAllActiveProviders**: (`args`) => readonly \[readonly `bigint`[], `boolean`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

##### Returns

readonly \[readonly `bigint`[], `boolean`\]

#### basic.serviceRegistry.getProvider

> **getProvider**: (`args`) => readonly \[\{ `info`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; `providerId`: `bigint`; \}\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[\{ `info`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; `providerId`: `bigint`; \}\]

#### basic.serviceRegistry.getProviderByAddress

> **getProviderByAddress**: (`args`) => readonly \[\{ `info`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; `providerId`: `bigint`; \}\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

##### Returns

readonly \[\{ `info`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; `providerId`: `bigint`; \}\]

#### basic.serviceRegistry.getProviderCount

> **getProviderCount**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`bigint`\]

#### basic.serviceRegistry.getProviderIdByAddress

> **getProviderIdByAddress**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

##### Returns

readonly \[`bigint`\]

#### basic.serviceRegistry.getProvidersByProductType

> **getProvidersByProductType**: (`args`) => readonly \[\{ `hasMore`: `boolean`; `providers`: readonly `object`[]; \}\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`number`, `boolean`, `bigint`, `bigint`\] |

##### Returns

readonly \[\{ `hasMore`: `boolean`; `providers`: readonly `object`[]; \}\]

#### basic.serviceRegistry.getProviderWithProduct

> **getProviderWithProduct**: (`args`) => readonly \[\{ `product`: \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \}; `productCapabilityValues`: readonly `` `0x${string}` ``[]; `providerId`: `bigint`; `providerInfo`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; \}\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `number`\] |

##### Returns

readonly \[\{ `product`: \{ `capabilityKeys`: readonly `string`[]; `isActive`: `boolean`; `productType`: `number`; \}; `productCapabilityValues`: readonly `` `0x${string}` ``[]; `providerId`: `bigint`; `providerInfo`: \{ `description`: `string`; `isActive`: `boolean`; `name`: `string`; `payee`: `` `0x${string}` ``; `serviceProvider`: `` `0x${string}` ``; \}; \}\]

#### basic.serviceRegistry.isProviderActive

> **isProviderActive**: (`args`) => readonly \[`boolean`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`boolean`\]

#### basic.serviceRegistry.isRegisteredProvider

> **isRegisteredProvider**: (`args`) => readonly \[`boolean`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

##### Returns

readonly \[`boolean`\]

#### basic.serviceRegistry.registerProvider

> **registerProvider**: (`args`, `value`, `from`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `string`, `string`, `number`, readonly `string`[], readonly `` `0x${string}` ``[]\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

##### Returns

readonly \[`bigint`\]

#### basic.serviceRegistry.REGISTRATION\_FEE

> **REGISTRATION\_FEE**: () => `bigint`

##### Returns

`bigint`

#### basic.serviceRegistry.removeProduct

> **removeProduct**: (`args`, `value`, `from`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`number`\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

##### Returns

readonly \[\]

#### basic.serviceRegistry.removeProvider

> **removeProvider**: (`args`, `value`, `from`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

##### Returns

readonly \[\]

#### basic.serviceRegistry.updateProduct

> **updateProduct**: (`args`, `value`, `from`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`number`, readonly `string`[], readonly `` `0x${string}` ``[]\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

##### Returns

readonly \[\]

#### basic.serviceRegistry.updateProviderInfo

> **updateProviderInfo**: (`args`, `value`, `from`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`string`, `string`\] |
| `value` | `` `0x${string}` `` |
| `from` | `` `0x${string}` `` |

##### Returns

readonly \[\]

#### basic.sessionKeyRegistry

> **sessionKeyRegistry**: `object`

#### basic.sessionKeyRegistry.authorizationExpiry

> **authorizationExpiry**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``\] |

##### Returns

readonly \[`bigint`\]

#### basic.warmStorage

> **warmStorage**: `object`

#### basic.warmStorage.addApprovedProvider

> **addApprovedProvider**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[\]

#### basic.warmStorage.filBeamBeneficiaryAddress

> **filBeamBeneficiaryAddress**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.warmStorage.getServicePrice

> **getServicePrice**: (`args`) => readonly \[\{ `epochsPerMonth`: `bigint`; `minimumPricePerMonth`: `bigint`; `pricePerTiBCacheMissEgress`: `bigint`; `pricePerTiBCdnEgress`: `bigint`; `pricePerTiBPerMonthNoCDN`: `bigint`; `tokenAddress`: `` `0x${string}` ``; \}\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[\{ `epochsPerMonth`: `bigint`; `minimumPricePerMonth`: `bigint`; `pricePerTiBCacheMissEgress`: `bigint`; `pricePerTiBCdnEgress`: `bigint`; `pricePerTiBPerMonthNoCDN`: `bigint`; `tokenAddress`: `` `0x${string}` ``; \}\]

#### basic.warmStorage.owner

> **owner**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.warmStorage.paymentsContractAddress

> **paymentsContractAddress**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.warmStorage.pdpVerifierAddress

> **pdpVerifierAddress**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.warmStorage.removeApprovedProvider

> **removeApprovedProvider**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

##### Returns

readonly \[\]

#### basic.warmStorage.serviceProviderRegistry

> **serviceProviderRegistry**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.warmStorage.sessionKeyRegistry

> **sessionKeyRegistry**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.warmStorage.terminateService

> **terminateService**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[\]

#### basic.warmStorage.topUpCDNPaymentRails

> **topUpCDNPaymentRails**: (`args`) => readonly \[\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`, `bigint`\] |

##### Returns

readonly \[\]

#### basic.warmStorage.usdfcTokenAddress

> **usdfcTokenAddress**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.warmStorage.viewContractAddress

> **viewContractAddress**: (`args`) => readonly \[`` `0x${string}` ``\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`` `0x${string}` ``\]

#### basic.warmStorageView

> **warmStorageView**: `object`

#### basic.warmStorageView.clientDataSets

> **clientDataSets**: (`args`) => [`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `internalType`: `"uint256[]"`; `name`: `"dataSetIds"`; `type`: `"uint256[]"`; \}\] \| readonly \[\{ `internalType`: `"uint256[]"`; `name`: `"dataSetIds"`; `type`: `"uint256[]"`; \}\]\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"offset"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"limit"`; `type`: `"uint256"`; \}\] \| readonly \[\{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}\]\> |

##### Returns

[`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `internalType`: `"uint256[]"`; `name`: `"dataSetIds"`; `type`: `"uint256[]"`; \}\] \| readonly \[\{ `internalType`: `"uint256[]"`; `name`: `"dataSetIds"`; `type`: `"uint256[]"`; \}\]\>

#### basic.warmStorageView.clientNonces

> **clientNonces**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``, `bigint`\] |

##### Returns

readonly \[`bigint`\]

#### basic.warmStorageView.getAllDataSetMetadata

> **getAllDataSetMetadata**: (`args`) => readonly \[readonly `string`[], readonly `string`[]\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[readonly `string`[], readonly `string`[]\]

#### basic.warmStorageView.getAllPieceMetadata

> **getAllPieceMetadata**: (`args`) => readonly \[readonly `string`[], readonly `string`[]\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

##### Returns

readonly \[readonly `string`[], readonly `string`[]\]

#### basic.warmStorageView.getApprovedProviders

> **getApprovedProviders**: (`args`) => readonly \[readonly `bigint`[]\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`\] |

##### Returns

readonly \[readonly `bigint`[]\]

#### basic.warmStorageView.getClientDataSets

> **getClientDataSets**: (`args`) => [`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `components`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"pdpRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cacheMissRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cdnRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"payee"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"serviceProvider"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commissionBps"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"pdpEndEpoch"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"dataSetId"`; `type`: `"uint256"`; \}\]; `internalType`: `"struct FilecoinWarmStorageService.DataSetInfoView[]"`; `name`: `"infos"`; `type`: `"tuple[]"`; \}\] \| readonly \[\{ `components`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"pdpRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cacheMissRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cdnRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"payee"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"serviceProvider"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commissionBps"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"pdpEndEpoch"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"dataSetId"`; `type`: `"uint256"`; \}\]; `internalType`: `"struct FilecoinWarmStorageService.DataSetInfoView[]"`; `name`: `"infos"`; `type`: `"tuple[]"`; \}\]\>

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | [`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `internalType`: `"address"`; `name`: `"client"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"offset"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"limit"`; `type`: `"uint256"`; \}\] \| readonly \[\{ `internalType`: `"address"`; `name`: `"client"`; `type`: `"address"`; \}\]\> |

##### Returns

[`AbiToType`](/reference/filoz/synapse-core/mocks/type-aliases/abitotype/)\<readonly \[\{ `components`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"pdpRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cacheMissRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cdnRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"payee"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"serviceProvider"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commissionBps"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"pdpEndEpoch"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"dataSetId"`; `type`: `"uint256"`; \}\]; `internalType`: `"struct FilecoinWarmStorageService.DataSetInfoView[]"`; `name`: `"infos"`; `type`: `"tuple[]"`; \}\] \| readonly \[\{ `components`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"pdpRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cacheMissRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"cdnRailId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"address"`; `name`: `"payer"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"payee"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"serviceProvider"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commissionBps"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"clientDataSetId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"pdpEndEpoch"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"providerId"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"dataSetId"`; `type`: `"uint256"`; \}\]; `internalType`: `"struct FilecoinWarmStorageService.DataSetInfoView[]"`; `name`: `"infos"`; `type`: `"tuple[]"`; \}\]\>

#### basic.warmStorageView.getClientDataSetsLength

> **getClientDataSetsLength**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`` `0x${string}` ``\] |

##### Returns

readonly \[`bigint`\]

#### basic.warmStorageView.getDataSet

> **getDataSet**: (`args`) => readonly \[\{ `cacheMissRailId`: `bigint`; `cdnRailId`: `bigint`; `clientDataSetId`: `bigint`; `commissionBps`: `bigint`; `dataSetId`: `bigint`; `payee`: `` `0x${string}` ``; `payer`: `` `0x${string}` ``; `pdpEndEpoch`: `bigint`; `pdpRailId`: `bigint`; `providerId`: `bigint`; `serviceProvider`: `` `0x${string}` ``; \}\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[\{ `cacheMissRailId`: `bigint`; `cdnRailId`: `bigint`; `clientDataSetId`: `bigint`; `commissionBps`: `bigint`; `dataSetId`: `bigint`; `payee`: `` `0x${string}` ``; `payer`: `` `0x${string}` ``; `pdpEndEpoch`: `bigint`; `pdpRailId`: `bigint`; `providerId`: `bigint`; `serviceProvider`: `` `0x${string}` ``; \}\]

#### basic.warmStorageView.getDataSetMetadata

> **getDataSetMetadata**: (`args`) => readonly \[`boolean`, `string`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `string`\] |

##### Returns

readonly \[`boolean`, `string`\]

#### basic.warmStorageView.getPDPConfig

> **getPDPConfig**: (`args`) => readonly \[`bigint`, `bigint`, `bigint`, `bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[\] |

##### Returns

readonly \[`bigint`, `bigint`, `bigint`, `bigint`\]

#### basic.warmStorageView.getPieceMetadata

> **getPieceMetadata**: (`args`) => readonly \[`boolean`, `string`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`, `bigint`, `string`\] |

##### Returns

readonly \[`boolean`, `string`\]

#### basic.warmStorageView.isProviderApproved

> **isProviderApproved**: (`args`) => readonly \[`boolean`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`boolean`\]

#### basic.warmStorageView.railToDataSet

> **railToDataSet**: (`args`) => readonly \[`bigint`\]

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `args` | readonly \[`bigint`\] |

##### Returns

readonly \[`bigint`\]

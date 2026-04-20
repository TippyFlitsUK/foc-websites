---
title: PaymentsService
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-sdk/src/payments/service.ts:42](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L42)

PaymentsService - Filecoin Pay client for managing deposits, approvals, and payment rails

## Constructors

### Constructor

> **new PaymentsService**(`options`): `PaymentsService`

Defined in: [packages/synapse-sdk/src/payments/service.ts:52](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L52)

Create a new PaymentsService instance

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `client`: `Client`\<`Transport`, `Chain`, `Account`\>; \} | Options for the PaymentsService |
| `options.client` | `Client`\<`Transport`, `Chain`, `Account`\> | Viem wallet client |

#### Returns

`PaymentsService`

A new PaymentsService instance

## Methods

### accountInfo()

> **accountInfo**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:108](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L108)

Get detailed account information from the payments contract

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `token?`: `string`; \} | Options for the account info |
| `options.token?` | `string` | The token to get account info for (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)\>

Account information [Pay.accounts.OutputType](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/outputtype/)

#### Throws

Errors [Pay.accounts.ErrorType](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/errortype/)

***

### accountSummary()

> **accountSummary**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:720](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L720)

Get a comprehensive account summary including balances, rates, lockup breakdown, and timeline.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `epoch?`: `bigint`; `token?`: `string`; \} | Options for the account summary |
| `options.epoch?` | `bigint` | Epoch to evaluate at (defaults to current block number) |
| `options.token?` | `string` | The token to query (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/outputtype/)\>

Full account summary [Pay.getAccountSummary.OutputType](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/outputtype/)

#### Throws

Errors [Pay.getAccountSummary.ErrorType](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/type-aliases/errortype/)

***

### allowance()

> **allowance**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:188](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L188)

Check the current ERC20 token allowance for a spender

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `spender`: `` `0x${string}` ``; `token?`: `string`; \} | Options for the allowance check |
| `options.spender` | `` `0x${string}` `` | The address to check allowance for |
| `options.token?` | `string` | The token to check allowance for (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The current allowance amount as bigint

#### Throws

Errors [ERC20.balance.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/balance/type-aliases/errortype/)

***

### approve()

> **approve**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:223](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L223)

Approve an ERC20 token spender

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `amount`: `bigint`; `spender`: `` `0x${string}` ``; `token?`: `string`; \} | Options for the approve |
| `options.amount` | `bigint` | The amount to approve |
| `options.spender` | `` `0x${string}` `` | The address to approve as spender |
| `options.token?` | `string` | The token to approve spending for (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response object

***

### approveService()

> **approveService**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:262](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L262)

Approve a service contract to act as an operator for payment rails
This allows the service contract (such as Warm Storage) to create and manage payment rails on behalf
of the client

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `lockupAllowance?`: `bigint`; `maxLockupPeriod?`: `bigint`; `rateAllowance?`: `bigint`; `service?`: `` `0x${string}` ``; `token?`: `string`; \} | Options for the approve service |
| `options.lockupAllowance?` | `bigint` | Maximum lockup amount the operator can set (defaults to maxUint256) |
| `options.maxLockupPeriod?` | `bigint` | Maximum lockup period in epochs the operator can set (defaults to 30 days in epochs) |
| `options.rateAllowance?` | `bigint` | Maximum payment rate per epoch the operator can set (defaults to maxUint256) |
| `options.service?` | `` `0x${string}` `` | The service contract address to approve (defaults to Warm Storage contract address) |
| `options.token?` | `string` | The token to approve for (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

#### Throws

Errors [Pay.setOperatorApproval.ErrorType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapproval/type-aliases/errortype/)

***

### balance()

> **balance**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:87](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L87)

Get the balance of the payments contract

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `token?`: `string`; \} | Options for the balance |
| `options.token?` | `string` | The token to get balance for (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The balance of the payments contract

#### Throws

Errors [Pay.accounts.ErrorType](/reference/filoz/synapse-core/pay/namespaces/accounts/type-aliases/errortype/)

***

### decimals()

> **decimals**(): `number`

Defined in: [packages/synapse-sdk/src/payments/service.ts:174](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L174)

#### Returns

`number`

***

### deposit()

> **deposit**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:377](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L377)

Deposit funds into the payments contract

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`DepositOptions`](/reference/filoz/synapse-sdk/payments/interfaces/depositoptions/) | Options for the deposit [DepositOptions](/reference/filoz/synapse-sdk/payments/interfaces/depositoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

#### Throws

Errors [ERC20.balance.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/balance/type-aliases/errortype/) | [ERC20.approve.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/approve/type-aliases/errortype/) | [Pay.deposit.ErrorType](/reference/filoz/synapse-core/pay/namespaces/deposit/type-aliases/errortype/)

***

### depositWithPermit()

> **depositWithPermit**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:441](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L441)

Deposit funds using ERC-2612 permit to approve and deposit in a single transaction
This method creates an EIP-712 typed-data signature for the USDFC token's permit,
then calls the Payments contract `depositWithPermit` to pull funds and credit the account.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `amount`: `bigint`; `deadline?`: `bigint`; `token?`: `string`; \} | Options for the deposit with permit DepositWithPermitOptions |
| `options.amount` | `bigint` | Amount of USDFC to deposit (in base units) |
| `options.deadline?` | `bigint` | Unix timestamp (seconds) when the permit expires. Defaults to now + 1 hour. |
| `options.token?` | `string` | Token identifier (currently only USDFC is supported) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response object Hash

#### Throws

Errors [ERC20.balanceForPermit.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/balanceforpermit/type-aliases/errortype/) | ERC20.permit.ErrorType | [Pay.depositWithPermit.ErrorType](/reference/filoz/synapse-core/pay/namespaces/depositwithpermit/type-aliases/errortype/)

***

### depositWithPermitAndApproveOperator()

> **depositWithPermitAndApproveOperator**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:479](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L479)

Deposit funds using ERC-2612 permit and approve an operator in a single transaction
This signs an EIP-712 permit for the USDFC token and calls the Payments contract
function `depositWithPermitAndApproveOperator` which both deposits and sets operator approval.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `amount`: `bigint`; `deadline?`: `bigint`; `lockupAllowance?`: `bigint`; `maxLockupPeriod?`: `bigint`; `operator?`: `` `0x${string}` ``; `rateAllowance?`: `bigint`; `token?`: `string`; \} | Options for the deposit with permit and approve operator |
| `options.amount` | `bigint` | Amount of USDFC to deposit (in base units) |
| `options.deadline?` | `bigint` | Unix timestamp (seconds) when the permit expires. Defaults to now + 1 hour. |
| `options.lockupAllowance?` | `bigint` | Max lockup amount operator can set |
| `options.maxLockupPeriod?` | `bigint` | Max lockup period in epochs operator can set |
| `options.operator?` | `` `0x${string}` `` | Service/operator address to approve |
| `options.rateAllowance?` | `bigint` | Max payment rate per epoch operator can set |
| `options.token?` | `string` | Token identifier (currently only USDFC supported) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

#### Throws

Errors [ERC20.balanceForPermit.ErrorType](/reference/filoz/synapse-core/erc20/namespaces/balanceforpermit/type-aliases/errortype/) | ERC20.permit.ErrorType | Pay.depositWithPermitAndApproveOperator.ErrorType

***

### fund()

> **fund**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:533](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L533)

Smart deposit method that picks the right contract call based on FWSS approval state.

- If FWSS needs approval AND amount > 0: calls `depositWithPermitAndApproveOperator` with maxUint256 rate/lockup allowances and LOCKUP_PERIOD.
- If FWSS needs approval AND amount === 0: calls `approveService` with maxUint256 rate/lockup allowances and LOCKUP_PERIOD.
- If FWSS is approved AND amount > 0: calls `depositWithPermit`.
- If FWSS is approved AND amount === 0: no-op, returns empty hash.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/fund/type-aliases/optionstype/) | [FundOptions](/reference/filoz/synapse-sdk/synapse/type-aliases/fundoptions/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

***

### fundSync()

> **fundSync**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:551](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L551)

Smart deposit and wait for confirmation.

Same routing logic as [fund](/reference/filoz/synapse-sdk/payments/classes/paymentsservice/#fund), but waits for the transaction receipt.
Supports an `onHash` callback that fires once the transaction is submitted
(before waiting for confirmation).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`OptionsType`](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/optionstype/) | [Pay.fundSync.OptionsType](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/optionstype/) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/outputtype/)\>

Transaction hash and receipt [Pay.fundSync.OutputType](/reference/filoz/synapse-core/pay/namespaces/fundsync/type-aliases/outputtype/)

***

### getRail()

> **getRail**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:658](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L658)

Get detailed information about a specific rail

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `railId`: `bigint`; \} | Options for the get rail |
| `options.railId` | `bigint` | The rail ID to query |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/outputtype/)\>

Rail information including all parameters and current state [Pay.getRail.OutputType](/reference/filoz/synapse-core/pay/namespaces/getrail/type-aliases/outputtype/)

#### Throws

When the rail does not exist or is inactive

***

### getRailsAsPayee()

> **getRailsAsPayee**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RailInfo`](/reference/filoz/synapse-sdk/synapse/type-aliases/railinfo/)[]\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:812](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L812)

Get all rails where the wallet is the payee

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `token?`: `string`; \} | Options for the get rails as payee |
| `options.token?` | `string` | The token to filter by (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RailInfo`](/reference/filoz/synapse-sdk/synapse/type-aliases/railinfo/)[]\>

Array of rail information [\[\]](/reference/filoz/synapse-sdk/synapse/type-aliases/railinfo/)

***

### getRailsAsPayer()

> **getRailsAsPayer**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RailInfo`](/reference/filoz/synapse-sdk/synapse/type-aliases/railinfo/)[]\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:785](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L785)

Get all rails where the wallet is the payer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `token?`: `string`; \} | Options for the get rails as payer |
| `options.token?` | `string` | The token to filter by (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`RailInfo`](/reference/filoz/synapse-sdk/synapse/type-aliases/railinfo/)[]\>

Array of rail information [\[\]](/reference/filoz/synapse-sdk/synapse/type-aliases/railinfo/)

***

### getSettlementAmounts()

> **getSettlementAmounts**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SettlementResult`](/reference/filoz/synapse-sdk/synapse/interfaces/settlementresult/)\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:601](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L601)

Get the expected settlement amounts for a rail (read-only simulation)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `railId`: `bigint`; `untilEpoch?`: `bigint`; \} | Options for the get settlement amounts |
| `options.railId` | `bigint` | The rail ID to check |
| `options.untilEpoch?` | `bigint` | The epoch to settle up to (must be <= current epoch; defaults to current). Can be used to preview partial settlements to a past epoch. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SettlementResult`](/reference/filoz/synapse-sdk/synapse/interfaces/settlementresult/)\>

Settlement result with amounts and details [SettlementResult](/reference/filoz/synapse-sdk/synapse/interfaces/settlementresult/)

***

### revokeService()

> **revokeService**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:307](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L307)

Revoke a service contract's operator approval

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `service?`: `` `0x${string}` ``; `token?`: `string`; \} | Options for the revoke service |
| `options.service?` | `` `0x${string}` `` | The service contract address to revoke (defaults to Warm Storage contract address) |
| `options.token?` | `string` | The token to revoke approval for (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

#### Throws

Errors [Pay.setOperatorApproval.ErrorType](/reference/filoz/synapse-core/pay/namespaces/setoperatorapproval/type-aliases/errortype/)

***

### serviceApproval()

> **serviceApproval**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:342](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L342)

Get the operator approval status and allowances for a service

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `service?`: `` `0x${string}` ``; `token?`: `string`; \} | Options for the service approval |
| `options.service?` | `` `0x${string}` `` | The service contract address to check (defaults to Warm Storage contract address) |
| `options.token?` | `string` | The token to check approval for (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)\>

Approval status and allowances [Pay.operatorApprovals.OutputType](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/outputtype/)

#### Throws

Errors [Pay.operatorApprovals.ErrorType](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/type-aliases/errortype/)

***

### settle()

> **settle**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:589](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L589)

Settle a payment rail up to a specific epoch (sends a transaction)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `railId`: `bigint`; `untilEpoch?`: `bigint`; \} | Options for the settle |
| `options.railId` | `bigint` | The rail ID to settle |
| `options.untilEpoch?` | `bigint` | The epoch to settle up to (must be <= current epoch; defaults to current). Can be used for partial settlements to a past epoch. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

#### Throws

Errors [Pay.settleRail.ErrorType](/reference/filoz/synapse-core/pay/namespaces/settlerail/type-aliases/errortype/)

***

### settleAuto()

> **settleAuto**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:697](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L697)

Automatically settle a rail, detecting whether it's terminated or active
This method checks the rail status and calls the appropriate settlement method:
- For terminated rails: calls settleTerminatedRail()
- For active rails: calls settle() with optional untilEpoch

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `railId`: `bigint`; `untilEpoch?`: `bigint`; \} | Options for the settle auto |
| `options.railId` | `bigint` | The rail ID to settle |
| `options.untilEpoch?` | `bigint` | The epoch to settle up to (must be <= current epoch for active rails; ignored for terminated rails) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction response object Hash

#### Throws

Error if rail doesn't exist (contract reverts with RailInactiveOrSettled) or other settlement errors

#### Example

```ts
// Automatically detect and settle appropriately
const hash = await synapse.payments.settleAuto({ railId })

// For active rails, can specify epoch
const hash = await synapse.payments.settleAuto({ railId, untilEpoch: specificEpoch })
```

***

### settleTerminatedRail()

> **settleTerminatedRail**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:647](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L647)

Emergency settlement for terminated rails only - bypasses service contract validation
This ensures payment even if the validator contract is buggy or unresponsive (pays in full)
Can only be called by the client after the max settlement epoch has passed

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `railId`: `bigint`; \} | Options for the settle terminated rail |
| `options.railId` | `bigint` | The rail ID to settle |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

#### Throws

Errors [Pay.settleTerminatedRailWithoutValidation.ErrorType](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidation/type-aliases/errortype/)

***

### totalAccountFixedLockup()

> **totalAccountFixedLockup**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/outputtype/)\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:753](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L753)

Get the total fixed lockup across all rails.

Fetches all rails for the account and sums their `lockupFixed` values.
Includes terminated-but-not-finalized rails since they still hold locked funds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `token?`: `string`; \} | Options for the total account fixed lockup |
| `options.token?` | `string` | The token to query (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OutputType`](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/outputtype/)\>

Total fixed lockup [Pay.totalAccountFixedLockup.OutputType](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/outputtype/)

#### Throws

Errors [Pay.totalAccountFixedLockup.ErrorType](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/type-aliases/errortype/)

***

### walletBalance()

> **walletBalance**(`options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:130](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L130)

Get the balance of the wallet

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `token?`: `string`; \} | Options for the wallet balance |
| `options.token?` | `string` | The token to get wallet balance for (defaults to FIL) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`bigint`\>

The balance of the wallet

#### Throws

Errors getBalance.ErrorType

***

### withdraw()

> **withdraw**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Defined in: [packages/synapse-sdk/src/payments/service.ts:568](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L568)

Withdraw funds from the payments contract

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `amount`: `bigint`; `token?`: `string`; \} | Options for the withdraw |
| `options.amount` | `bigint` | The amount to withdraw |
| `options.token?` | `string` | The token to withdraw (defaults to USDFC) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>

Transaction hash Hash

#### Throws

Errors [Pay.withdraw.ErrorType](/reference/filoz/synapse-core/pay/namespaces/withdraw/type-aliases/errortype/)

***

### create()

> `static` **create**(`options`): `PaymentsService`

Defined in: [packages/synapse-sdk/src/payments/service.ts:65](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-sdk/src/payments/service.ts#L65)

Create a new PaymentsService with pre-configured client

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `account`: `Account`; `chain?`: `Chain`; `transport?`: `Transport`; \} | Options for the PaymentsService |
| `options.account` | `Account` | Viem account (required) |
| `options.chain?` | `Chain` | Filecoin chain (optional, defaults to [DEFAULT\_CHAIN](/reference/filoz/synapse-sdk/synapse/variables/default_chain/)) |
| `options.transport?` | `Transport` | Viem transport (optional, defaults to http()) |

#### Returns

`PaymentsService`

A new [PaymentsService](/reference/filoz/synapse-sdk/payments/classes/paymentsservice/) instance

---
title: pay
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

Payments Contract Operations

## Example

```ts
import * as Pay from '@filoz/synapse-core/pay'
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [accounts](/reference/filoz/synapse-core/pay/namespaces/accounts/toc/) | - |
| [accountsCall](/reference/filoz/synapse-core/pay/namespaces/accountscall/toc/) | - |
| [calculateAccountDebt](/reference/filoz/synapse-core/pay/namespaces/calculateaccountdebt/toc/) | - |
| [deposit](/reference/filoz/synapse-core/pay/namespaces/deposit/toc/) | - |
| [depositCall](/reference/filoz/synapse-core/pay/namespaces/depositcall/toc/) | - |
| [depositSync](/reference/filoz/synapse-core/pay/namespaces/depositsync/toc/) | - |
| [depositWithPermit](/reference/filoz/synapse-core/pay/namespaces/depositwithpermit/toc/) | - |
| [depositWithPermitSync](/reference/filoz/synapse-core/pay/namespaces/depositwithpermitsync/toc/) | - |
| [fund](/reference/filoz/synapse-core/pay/namespaces/fund/toc/) | - |
| [fundSync](/reference/filoz/synapse-core/pay/namespaces/fundsync/toc/) | - |
| [getAccountSummary](/reference/filoz/synapse-core/pay/namespaces/getaccountsummary/toc/) | - |
| [getRail](/reference/filoz/synapse-core/pay/namespaces/getrail/toc/) | - |
| [getRailCall](/reference/filoz/synapse-core/pay/namespaces/getrailcall/toc/) | - |
| [getRailsForPayeeAndToken](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtoken/toc/) | - |
| [getRailsForPayeeAndTokenCall](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayeeandtokencall/toc/) | - |
| [getRailsForPayerAndToken](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayerandtoken/toc/) | - |
| [getRailsForPayerAndTokenCall](/reference/filoz/synapse-core/pay/namespaces/getrailsforpayerandtokencall/toc/) | - |
| [isFwssMaxApproved](/reference/filoz/synapse-core/pay/namespaces/isfwssmaxapproved/toc/) | - |
| [operatorApprovals](/reference/filoz/synapse-core/pay/namespaces/operatorapprovals/toc/) | - |
| [operatorApprovalsCall](/reference/filoz/synapse-core/pay/namespaces/operatorapprovalscall/toc/) | - |
| [resolveAccountState](/reference/filoz/synapse-core/pay/namespaces/resolveaccountstate/toc/) | - |
| [setOperatorApproval](/reference/filoz/synapse-core/pay/namespaces/setoperatorapproval/toc/) | - |
| [setOperatorApprovalCall](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalcall/toc/) | - |
| [setOperatorApprovalSync](/reference/filoz/synapse-core/pay/namespaces/setoperatorapprovalsync/toc/) | - |
| [settleRail](/reference/filoz/synapse-core/pay/namespaces/settlerail/toc/) | - |
| [settleRailCall](/reference/filoz/synapse-core/pay/namespaces/settlerailcall/toc/) | - |
| [settleRailSync](/reference/filoz/synapse-core/pay/namespaces/settlerailsync/toc/) | - |
| [settleTerminatedRailWithoutValidation](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidation/toc/) | - |
| [settleTerminatedRailWithoutValidationCall](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationcall/toc/) | - |
| [settleTerminatedRailWithoutValidationSync](/reference/filoz/synapse-core/pay/namespaces/settleterminatedrailwithoutvalidationsync/toc/) | - |
| [totalAccountFixedLockup](/reference/filoz/synapse-core/pay/namespaces/totalaccountfixedlockup/toc/) | - |
| [withdraw](/reference/filoz/synapse-core/pay/namespaces/withdraw/toc/) | - |
| [withdrawCall](/reference/filoz/synapse-core/pay/namespaces/withdrawcall/toc/) | - |
| [withdrawSync](/reference/filoz/synapse-core/pay/namespaces/withdrawsync/toc/) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [DepositAndApproveOptions](/reference/filoz/synapse-core/pay/type-aliases/depositandapproveoptions/) | - |
| [RailInfo](/reference/filoz/synapse-core/pay/type-aliases/railinfo/) | Rail information |

## Functions

| Function | Description |
| ------ | ------ |
| [accounts](/reference/filoz/synapse-core/pay/functions/accounts/) | Get account information from the Filecoin Pay contract |
| [accountsCall](/reference/filoz/synapse-core/pay/functions/accountscall/) | Create a call to the accounts function |
| [calculateAccountDebt](/reference/filoz/synapse-core/pay/functions/calculateaccountdebt/) | Compute account debt — the unsettled lockup amount exceeding available funds. |
| [deposit](/reference/filoz/synapse-core/pay/functions/deposit/) | Deposit funds into the Filecoin Pay contract |
| [depositAndApprove](/reference/filoz/synapse-core/pay/functions/depositandapprove/) | Deposit funds to the payments contract and approve an operator. |
| [depositCall](/reference/filoz/synapse-core/pay/functions/depositcall/) | Create a call to the deposit function |
| [depositSync](/reference/filoz/synapse-core/pay/functions/depositsync/) | Deposit funds into the Filecoin Pay contract and wait for confirmation |
| [depositWithPermit](/reference/filoz/synapse-core/pay/functions/depositwithpermit/) | Deposit funds into the Filecoin Pay contract using an ERC-2612 permit |
| [depositWithPermitSync](/reference/filoz/synapse-core/pay/functions/depositwithpermitsync/) | Deposit funds using an ERC-2612 permit and wait for confirmation |
| [extractDepositEvent](/reference/filoz/synapse-core/pay/functions/extractdepositevent/) | Extracts the DepositRecorded event from transaction logs |
| [extractDepositWithPermitEvent](/reference/filoz/synapse-core/pay/functions/extractdepositwithpermitevent/) | Extracts the DepositRecorded event from transaction logs |
| [extractSetOperatorApprovalEvent](/reference/filoz/synapse-core/pay/functions/extractsetoperatorapprovalevent/) | Extracts the OperatorApprovalUpdated event from transaction logs |
| [extractSettleRailEvent](/reference/filoz/synapse-core/pay/functions/extractsettlerailevent/) | Extracts the RailSettled event from transaction logs |
| [extractSettleTerminatedRailWithoutValidationEvent](/reference/filoz/synapse-core/pay/functions/extractsettleterminatedrailwithoutvalidationevent/) | Extracts the RailSettled event from transaction logs |
| [extractWithdrawEvent](/reference/filoz/synapse-core/pay/functions/extractwithdrawevent/) | Extracts the WithdrawRecorded event from transaction logs |
| [fund](/reference/filoz/synapse-core/pay/functions/fund/) | Smart deposit that picks the right contract call based on FWSS approval state |
| [fundSync](/reference/filoz/synapse-core/pay/functions/fundsync/) | Smart deposit and wait for confirmation |
| [getAccountSummary](/reference/filoz/synapse-core/pay/functions/getaccountsummary/) | Get a comprehensive account summary from the Payments contract. |
| [getRail](/reference/filoz/synapse-core/pay/functions/getrail/) | Get rail information from the Filecoin Pay contract |
| [getRailCall](/reference/filoz/synapse-core/pay/functions/getrailcall/) | Create a call to the getRail function |
| [getRailsForPayeeAndToken](/reference/filoz/synapse-core/pay/functions/getrailsforpayeeandtoken/) | Get rails for a payee and token with pagination |
| [getRailsForPayeeAndTokenCall](/reference/filoz/synapse-core/pay/functions/getrailsforpayeeandtokencall/) | Create a call to the getRailsForPayeeAndToken function |
| [getRailsForPayerAndToken](/reference/filoz/synapse-core/pay/functions/getrailsforpayerandtoken/) | Get rails for a payer and token with pagination |
| [getRailsForPayerAndTokenCall](/reference/filoz/synapse-core/pay/functions/getrailsforpayerandtokencall/) | Create a call to the getRailsForPayerAndToken function |
| [isFwssMaxApproved](/reference/filoz/synapse-core/pay/functions/isfwssmaxapproved/) | Check whether FWSS is approved with sufficient rate/lockup allowances and at least LOCKUP_PERIOD (30 days) for maxLockupPeriod. |
| [operatorApprovals](/reference/filoz/synapse-core/pay/functions/operatorapprovals/) | Get operator approval information from the Filecoin Pay contract |
| [operatorApprovalsCall](/reference/filoz/synapse-core/pay/functions/operatorapprovalscall/) | Create a call to the operatorApprovals function |
| [parseAccounts](/reference/filoz/synapse-core/pay/functions/parseaccounts/) | Parse the contract output into the accounts output type |
| [parseGetRailsForPayeeAndToken](/reference/filoz/synapse-core/pay/functions/parsegetrailsforpayeeandtoken/) | Parse the contract output into the getRailsForPayeeAndToken output type |
| [parseGetRailsForPayerAndToken](/reference/filoz/synapse-core/pay/functions/parsegetrailsforpayerandtoken/) | Parse the contract output into the getRailsForPayerAndToken output type |
| [parseOperatorApprovals](/reference/filoz/synapse-core/pay/functions/parseoperatorapprovals/) | Parse the contract output into the operatorApprovals output type |
| [resolveAccountState](/reference/filoz/synapse-core/pay/functions/resolveaccountstate/) | Project account state forward to `currentEpoch` by simulating settlement locally. |
| [setOperatorApproval](/reference/filoz/synapse-core/pay/functions/setoperatorapproval/) | Set operator approval on the Filecoin Pay contract |
| [setOperatorApprovalCall](/reference/filoz/synapse-core/pay/functions/setoperatorapprovalcall/) | Create a call to the setOperatorApproval function |
| [setOperatorApprovalSync](/reference/filoz/synapse-core/pay/functions/setoperatorapprovalsync/) | Set operator approval on the Filecoin Pay contract and wait for confirmation |
| [settleRail](/reference/filoz/synapse-core/pay/functions/settlerail/) | Settle a payment rail up to a specific epoch |
| [settleRailCall](/reference/filoz/synapse-core/pay/functions/settlerailcall/) | Create a call to the settleRail function |
| [settleRailSync](/reference/filoz/synapse-core/pay/functions/settlerailsync/) | Settle a payment rail up to a specific epoch and wait for confirmation |
| [settleTerminatedRailWithoutValidation](/reference/filoz/synapse-core/pay/functions/settleterminatedrailwithoutvalidation/) | Settle a terminated payment rail without validation |
| [settleTerminatedRailWithoutValidationCall](/reference/filoz/synapse-core/pay/functions/settleterminatedrailwithoutvalidationcall/) | Create a call to the settleTerminatedRailWithoutValidation function |
| [settleTerminatedRailWithoutValidationSync](/reference/filoz/synapse-core/pay/functions/settleterminatedrailwithoutvalidationsync/) | Settle a terminated payment rail without validation and wait for confirmation |
| [totalAccountFixedLockup](/reference/filoz/synapse-core/pay/functions/totalaccountfixedlockup/) | Get the total fixed lockup across all rails for an account. |
| [withdraw](/reference/filoz/synapse-core/pay/functions/withdraw/) | Withdraw funds from the Filecoin Pay contract |
| [withdrawCall](/reference/filoz/synapse-core/pay/functions/withdrawcall/) | Create a call to the withdraw function |
| [withdrawSync](/reference/filoz/synapse-core/pay/functions/withdrawsync/) | Withdraw funds from the Filecoin Pay contract and wait for confirmation |

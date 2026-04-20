---
title: useFundWallet
next: true
prev: true
editUrl: false

---

> **useFundWallet**(`props?`): `UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `void`, `unknown`\>

Defined in: [synapse-react/src/calibration.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-react/src/calibration.ts#L25)

Fund the wallet with USDFC and FIL.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `props?` | [`UseFundWalletProps`](/reference/filoz/synapse-react/interfaces/usefundwalletprops/) | The props for the fund wallet. [UseFundWalletProps](/reference/filoz/synapse-react/interfaces/usefundwalletprops/) |

## Returns

`UseMutationResult`\<`TransactionReceipt`, [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `void`, `unknown`\>

The mutation to fund the wallet.

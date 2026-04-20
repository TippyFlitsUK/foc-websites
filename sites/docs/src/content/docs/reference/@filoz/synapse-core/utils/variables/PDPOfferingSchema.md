---
title: PDPOfferingSchema
next: true
prev: true
editUrl: false

---

> `const` **PDPOfferingSchema**: `ZodObject`\<\{ `ipniIpfs`: `ZodOptional`\<`ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>\>; `ipniPeerId`: `ZodOptional`\<`ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>\>; `ipniPiece`: `ZodOptional`\<`ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>\>; `location`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `maxPieceSizeInBytes`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `minPieceSizeInBytes`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `minProvingPeriodInEpochs`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `paymentTokenAddress`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `serviceURL`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; `storagePricePerTibPerDay`: `ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>; \}, `$catchall`\<`ZodCustom`\<`` `0x${string}` ``, `` `0x${string}` ``\>\>\>

Defined in: [packages/synapse-core/src/utils/pdp-capabilities.ts:15](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/pdp-capabilities.ts#L15)

Zod schema for PDP offering

## See

https://github.com/FilOzone/filecoin-services/blob/a86e4a5018133f17a25b4bb6b5b99da4d34fe664/service_contracts/src/ServiceProviderRegistry.sol#L14

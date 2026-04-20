---
title: TIME_CONSTANTS
next: true
prev: true
editUrl: false

---

> `const` **TIME\_CONSTANTS**: `object`

Defined in: [packages/synapse-core/src/utils/constants.ts:4](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/utils/constants.ts#L4)

Time and size constants

## Type Declaration

### DAYS\_PER\_MONTH

> `readonly` **DAYS\_PER\_MONTH**: `30n` = `30n`

Number of days in a month (used for pricing calculations)

### DEFAULT\_LOCKUP\_DAYS

> `readonly` **DEFAULT\_LOCKUP\_DAYS**: `30n` = `30n`

Default lockup period in days

### EPOCH\_DURATION

> `readonly` **EPOCH\_DURATION**: `30` = `30`

Duration of each epoch in seconds on Filecoin

### EPOCHS\_PER\_DAY

> `readonly` **EPOCHS\_PER\_DAY**: `2880n` = `2880n`

Number of epochs in a day (24 hours * 60 minutes * 2 epochs per minute)

### EPOCHS\_PER\_MONTH

> `readonly` **EPOCHS\_PER\_MONTH**: `86400n` = `86400n`

Number of epochs in a month (30 days)

### PERMIT\_DEADLINE\_DURATION

> `readonly` **PERMIT\_DEADLINE\_DURATION**: `3600` = `3600`

Default expiry time for EIP-2612 permit signatures (in seconds)
Permits are time-limited approvals that expire after this duration

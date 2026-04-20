---
title: SessionKey
next: true
prev: true
editUrl: false

---

Defined in: [packages/synapse-core/src/session-key/types.ts:25](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L25)

## Extends

- `TypedEventTarget`\<[`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/)\>

## Type Parameters

| Type Parameter |
| ------ |
| `KeyType` *extends* [`SessionKeyType`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeytype/) |

## Properties

### account

> `readonly` **account**: `Account`

Defined in: [packages/synapse-core/src/session-key/types.ts:29](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L29)

***

### address

> `readonly` **address**: `` `0x${string}` ``

Defined in: [packages/synapse-core/src/session-key/types.ts:27](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L27)

***

### client

> `readonly` **client**: `Client`\<`Transport`, [`Chain`](/reference/filoz/synapse-core/chains/interfaces/chain/), \{ `address`: `` `0x${string}` ``; `keyType`: `KeyType`; `nonceManager?`: `NonceManager`; `publicKey`: `` `0x${string}` ``; `rootAddress`: `` `0x${string}` ``; `sign`: (`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signAuthorization`: (`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`SignAuthorizationReturnType`\>; `signMessage`: (`__namedParameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signTransaction`: \<`serializer`, `transaction`\>(`transaction`, `options?`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `signTypedData`: \<`typedData`, `primaryType`\>(`parameters`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`` `0x${string}` ``\>; `source`: `"sessionKey"`; `type`: `"local"`; \}\>

Defined in: [packages/synapse-core/src/session-key/types.ts:26](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L26)

***

### expirations

> `readonly` **expirations**: [`Expirations`](/reference/filoz/synapse-core/session-key/type-aliases/expirations/)

Defined in: [packages/synapse-core/src/session-key/types.ts:31](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L31)

***

### hasPermission

> **hasPermission**: (`permission`) => `boolean`

Defined in: [packages/synapse-core/src/session-key/types.ts:32](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `permission` | [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/) |

#### Returns

`boolean`

***

### hasPermissions

> **hasPermissions**: (`permissions`) => `boolean`

Defined in: [packages/synapse-core/src/session-key/types.ts:33](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L33)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `permissions` | [`Permission`](/reference/filoz/synapse-core/session-key/type-aliases/permission/)[] |

#### Returns

`boolean`

***

### rootAddress

> `readonly` **rootAddress**: `` `0x${string}` ``

Defined in: [packages/synapse-core/src/session-key/types.ts:28](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L28)

***

### syncExpirations

> **syncExpirations**: () => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/synapse-core/src/session-key/types.ts:34](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L34)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### type

> `readonly` **type**: `KeyType`

Defined in: [packages/synapse-core/src/session-key/types.ts:30](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L30)

***

### unwatch

> **unwatch**: () => `void`

Defined in: [packages/synapse-core/src/session-key/types.ts:44](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L44)

Stop watching the session key for expirations updates.

#### Returns

`void`

***

### watch

> **watch**: () => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<() => `void`\>

Defined in: [packages/synapse-core/src/session-key/types.ts:40](https://github.com/FilOzone/synapse-sdk/blob/3122f8d73d8ad2c239837ef6f561996a746d514e/packages/synapse-core/src/session-key/types.ts#L40)

Watch the session key for expirations updates.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<() => `void`\>

A function to stop watching the session key.

## Methods

### addEventListener()

> **addEventListener**\<`T`\>(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/.pnpm/iso-web@2.1.1/node\_modules/iso-web/dist/src/event-target/index.d.ts:29

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `"error"` \| `"expirationsUpdated"` \| `"connected"` \| `"disconnected"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `T` |
| `callback` | `TypedEventListenerOrEventListenerObject`\<[`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/), `T`\> \| `null` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherit Doc

#### Inherited from

`TypedEventTarget.addEventListener`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.dom.d.ts:11575

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`Event`](https://developer.mozilla.org/docs/Web/API/Event) |

#### Returns

`boolean`

#### Inherited from

`TypedEventTarget.dispatchEvent`

***

### dispatchTypedEvent()

> **dispatchTypedEvent**\<`T`\>(`_type`, `event`): `boolean`

Defined in: node\_modules/.pnpm/iso-web@2.1.1/node\_modules/iso-web/dist/src/event-target/index.d.ts:20

Dispatches a synthetic event to target and returns true if either
event's cancelable attribute value is false or its preventDefault() method
was not invoked, and false otherwise.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_type` | `T` |
| `event` | [`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/)\[`T`\] |

#### Returns

`boolean`

#### Inherited from

`TypedEventTarget.dispatchTypedEvent`

***

### emit()

> **emit**\<`T`\>(...`args`): `boolean`

Defined in: node\_modules/.pnpm/iso-web@2.1.1/node\_modules/iso-web/dist/src/event-target/index.d.ts:21

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | [`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/)\[`T`\]\[`"detail"`\] *extends* `IsAny`\<[`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/)\[`T`\]\[`"detail"`\]\> ? \[`T`, `unknown`\] : \[`T`, [`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/)\[`T`\]\[`"detail"`\]\] |

#### Returns

`boolean`

#### Inherited from

`TypedEventTarget.emit`

***

### off()

> **off**\<`T`\>(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/.pnpm/iso-web@2.1.1/node\_modules/iso-web/dist/src/event-target/index.d.ts:55

Alias for [TypedEventTarget.removeEventListener](/reference/filoz/synapse-core/session-key/interfaces/sessionkey/#removeeventlistener)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `"error"` \| `"expirationsUpdated"` \| `"connected"` \| `"disconnected"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `T` |
| `callback` | `TypedEventListenerOrEventListenerObject`\<[`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/), `T`\> \| `null` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

`TypedEventTarget.off`

***

### on()

> **on**\<`T`\>(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/.pnpm/iso-web@2.1.1/node\_modules/iso-web/dist/src/event-target/index.d.ts:38

Alias for [TypedEventTarget.addEventListener](/reference/filoz/synapse-core/session-key/interfaces/sessionkey/#addeventlistener)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `"error"` \| `"expirationsUpdated"` \| `"connected"` \| `"disconnected"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `T` |
| `callback` | `TypedEventListenerOrEventListenerObject`\<[`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/), `T`\> \| `null` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

`TypedEventTarget.on`

***

### removeEventListener()

> **removeEventListener**\<`T`\>(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/.pnpm/iso-web@2.1.1/node\_modules/iso-web/dist/src/event-target/index.d.ts:46

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `"error"` \| `"expirationsUpdated"` \| `"connected"` \| `"disconnected"` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `T` |
| `callback` | `TypedEventListenerOrEventListenerObject`\<[`SessionKeyEvents`](/reference/filoz/synapse-core/session-key/type-aliases/sessionkeyevents/), `T`\> \| `null` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherit Doc

#### Inherited from

`TypedEventTarget.removeEventListener`

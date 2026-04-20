---
title: utils
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [createPieceUrl](/reference/filoz/synapse-core/utils/namespaces/createpieceurl/toc/) | - |
| [createPieceUrlPDP](/reference/filoz/synapse-core/utils/namespaces/createpieceurlpdp/toc/) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [MetadataDataSetInternal](/reference/filoz/synapse-core/utils/interfaces/metadatadatasetinternal/) | - |
| [MetadataPieceInternal](/reference/filoz/synapse-core/utils/interfaces/metadatapieceinternal/) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ClaimTokenResponse](/reference/filoz/synapse-core/utils/type-aliases/claimtokenresponse/) | - |
| [ClaimTokenResponseError](/reference/filoz/synapse-core/utils/type-aliases/claimtokenresponseerror/) | - |
| [ClaimTokensOptions](/reference/filoz/synapse-core/utils/type-aliases/claimtokensoptions/) | - |
| [FormatUnitsOptions](/reference/filoz/synapse-core/utils/type-aliases/formatunitsoptions/) | - |
| [MetadataArray](/reference/filoz/synapse-core/utils/type-aliases/metadataarray/) | The metadata array is a tuple of two arrays: the keys and the values. Return type from the getAllDataSetMetadata function. |
| [MetadataEntry](/reference/filoz/synapse-core/utils/type-aliases/metadataentry/) | - |
| [MetadataObject](/reference/filoz/synapse-core/utils/type-aliases/metadataobject/) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [CAP\_IPNI\_IPFS](/reference/filoz/synapse-core/utils/variables/cap_ipni_ipfs/) | - |
| [CAP\_IPNI\_PEER\_ID](/reference/filoz/synapse-core/utils/variables/cap_ipni_peer_id/) | - |
| [~~CAP\_IPNI\_PEER\_ID\_LEGACY~~](/reference/filoz/synapse-core/utils/variables/cap_ipni_peer_id_legacy/) | - |
| [CAP\_IPNI\_PIECE](/reference/filoz/synapse-core/utils/variables/cap_ipni_piece/) | - |
| [CAP\_LOCATION](/reference/filoz/synapse-core/utils/variables/cap_location/) | - |
| [CAP\_MAX\_PIECE\_SIZE](/reference/filoz/synapse-core/utils/variables/cap_max_piece_size/) | - |
| [CAP\_MIN\_PIECE\_SIZE](/reference/filoz/synapse-core/utils/variables/cap_min_piece_size/) | - |
| [CAP\_MIN\_PROVING\_PERIOD](/reference/filoz/synapse-core/utils/variables/cap_min_proving_period/) | - |
| [CAP\_PAYMENT\_TOKEN](/reference/filoz/synapse-core/utils/variables/cap_payment_token/) | - |
| [CAP\_SERVICE\_URL](/reference/filoz/synapse-core/utils/variables/cap_service_url/) | - |
| [CAP\_STORAGE\_PRICE](/reference/filoz/synapse-core/utils/variables/cap_storage_price/) | - |
| [CDN\_FIXED\_LOCKUP](/reference/filoz/synapse-core/utils/variables/cdn_fixed_lockup/) | CDN fixed lockup amounts charged at dataset creation time. These are one-time lockups for CDN egress and cache miss egress rails. |
| [DEFAULT\_BUFFER\_EPOCHS](/reference/filoz/synapse-core/utils/variables/default_buffer_epochs/) | Default safety margin in epochs when calculating deposit amounts. Accounts for epoch drift between balance check and on-chain execution. |
| [DEFAULT\_RUNWAY\_EPOCHS](/reference/filoz/synapse-core/utils/variables/default_runway_epochs/) | Default extra runway in epochs beyond the required lockup. 0n means no additional runway beyond the lockup period. |
| [LOCKUP\_PERIOD](/reference/filoz/synapse-core/utils/variables/lockup_period/) | - |
| [METADATA\_LIMITS](/reference/filoz/synapse-core/utils/variables/metadata_limits/) | - |
| [PDPOfferingSchema](/reference/filoz/synapse-core/utils/variables/pdpofferingschema/) | Zod schema for PDP offering |
| [RETRY\_CONSTANTS](/reference/filoz/synapse-core/utils/variables/retry_constants/) | - |
| [SIZE\_CONSTANTS](/reference/filoz/synapse-core/utils/variables/size_constants/) | Data size constants |
| [TIME\_CONSTANTS](/reference/filoz/synapse-core/utils/variables/time_constants/) | Time and size constants |
| [USDFC\_SYBIL\_FEE](/reference/filoz/synapse-core/utils/variables/usdfc_sybil_fee/) | USDFC sybil fee charged on new dataset creation. Extracted from client funds into the payments auction pool to prevent state-growth spam. Matches PDPVerifier.USDFC_SYBIL_FEE (immutable, only changes with contract upgrade). |
| [zHex](/reference/filoz/synapse-core/utils/variables/zhex/) | - |
| [zNumberToBigInt](/reference/filoz/synapse-core/utils/variables/znumbertobigint/) | - |
| [zPieceCid](/reference/filoz/synapse-core/utils/variables/zpiececid/) | - |
| [zPieceCidString](/reference/filoz/synapse-core/utils/variables/zpiececidstring/) | - |
| [zStringToCid](/reference/filoz/synapse-core/utils/variables/zstringtocid/) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [asReadableStream](/reference/filoz/synapse-core/utils/functions/asreadablestream/) | Convert AsyncIterable or ReadableStream to ReadableStream |
| [asyncIterableToReadableStream](/reference/filoz/synapse-core/utils/functions/asynciterabletoreadablestream/) | Convert AsyncIterable to ReadableStream with broad browser compatibility. Provides fallback for environments where ReadableStream.from() is not available. |
| [calculateLastProofDate](/reference/filoz/synapse-core/utils/functions/calculatelastproofdate/) | Calculate when the last proof should have been submitted based on current time |
| [capabilitiesListToObject](/reference/filoz/synapse-core/utils/functions/capabilitieslisttoobject/) | Convert capability arrays to object map |
| [claimTokens](/reference/filoz/synapse-core/utils/functions/claimtokens/) | - |
| [clientFromTransport](/reference/filoz/synapse-core/utils/functions/clientfromtransport/) | Create a Viem public client from a transport configuration |
| [createPieceUrl](/reference/filoz/synapse-core/utils/functions/createpieceurl/) | Create a piece URL for the CDN or PDP API |
| [createPieceUrlPDP](/reference/filoz/synapse-core/utils/functions/createpieceurlpdp/) | Create a piece URL for the PDP API |
| [datasetMetadataObjectToEntry](/reference/filoz/synapse-core/utils/functions/datasetmetadataobjecttoentry/) | Convert a dataset metadata object to an array of metadata entries to be signed. |
| [dateToEpoch](/reference/filoz/synapse-core/utils/functions/datetoepoch/) | Convert a JavaScript Date to a Filecoin epoch |
| [decodeAddressCapability](/reference/filoz/synapse-core/utils/functions/decodeaddresscapability/) | Matches the behavior of `address(uint160(BigEndian.decode(values[i])))` |
| [decodePDPCapabilities](/reference/filoz/synapse-core/utils/functions/decodepdpcapabilities/) | Decode PDP capabilities from keys/values arrays into a PDPOffering object. Based on Curio's capabilitiesToOffering function. |
| [decodePDPError](/reference/filoz/synapse-core/utils/functions/decodepdperror/) | - |
| [decodePDPOffering](/reference/filoz/synapse-core/utils/functions/decodepdpoffering/) | - |
| [encodePDPCapabilities](/reference/filoz/synapse-core/utils/functions/encodepdpcapabilities/) | Encode PDP capabilities from a PDPOffering object and a capabilities object into a capability keys and values array. |
| [epochToDate](/reference/filoz/synapse-core/utils/functions/epochtodate/) | Convert a Filecoin epoch to a JavaScript Date |
| [fallbackRandIndex](/reference/filoz/synapse-core/utils/functions/fallbackrandindex/) | - |
| [fallbackRandU256](/reference/filoz/synapse-core/utils/functions/fallbackrandu256/) | - |
| [formatBalance](/reference/filoz/synapse-core/utils/functions/formatbalance/) | - |
| [formatFraction](/reference/filoz/synapse-core/utils/functions/formatfraction/) | - |
| [formatUnits](/reference/filoz/synapse-core/utils/functions/formatunits/) | - |
| [isAsyncIterable](/reference/filoz/synapse-core/utils/functions/isasynciterable/) | Type guard to check if a value is an AsyncIterable |
| [isReadableStream](/reference/filoz/synapse-core/utils/functions/isreadablestream/) | Type guard to check if a value is a ReadableStream |
| [isUint8Array](/reference/filoz/synapse-core/utils/functions/isuint8array/) | Check if value is Uint8Array |
| [metadataArrayToObject](/reference/filoz/synapse-core/utils/functions/metadataarraytoobject/) | - |
| [parseUnits](/reference/filoz/synapse-core/utils/functions/parseunits/) | Parse a value to a bigint. |
| [pieceMetadataObjectToEntry](/reference/filoz/synapse-core/utils/functions/piecemetadataobjecttoentry/) | Convert a dataset metadata object to an array of metadata entries to be signed. |
| [randIndex](/reference/filoz/synapse-core/utils/functions/randindex/) | Provides a random index into an array of supplied length (0 <= index < length) |
| [randU256](/reference/filoz/synapse-core/utils/functions/randu256/) | - |
| [supportsStreamingFetchBody](/reference/filoz/synapse-core/utils/functions/supportsstreamingfetchbody/) | Detect whether the current environment supports ReadableStream as a fetch request body. Firefox stringifies the stream to "[object ReadableStream]" instead of consuming it, and Safari silently ignores the stream body and the duplex option. This check catches both: a browser that stringifies will set Content-Type to text/plain (string body), and one that ignores duplex will fail the duplexAccessed gate. The try/catch handles any future browser that throws on the Request constructor. |
| [timeUntilEpoch](/reference/filoz/synapse-core/utils/functions/timeuntilepoch/) | Calculate the time until a future epoch |
| [transportFromTransportConfig](/reference/filoz/synapse-core/utils/functions/transportfromtransportconfig/) | Create a Viem public client from a transport configuration |
| [uint8ArrayToAsyncIterable](/reference/filoz/synapse-core/utils/functions/uint8arraytoasynciterable/) | Convert Uint8Array to async iterable with optimal chunk size. |

---
title: sp
next: true
prev: true
editUrl: false
sidebar:
  order: 0

---

Service Provider HTTP Operations

## Example

```ts
import * as SP from '@filoz/synapse-core/sp'
```

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [addPieces](/reference/filoz/synapse-core/sp/namespaces/addpieces/toc/) | - |
| [addPiecesApiRequest](/reference/filoz/synapse-core/sp/namespaces/addpiecesapirequest/toc/) | - |
| [createDataSet](/reference/filoz/synapse-core/sp/namespaces/createdataset/toc/) | - |
| [createDataSetAndAddPieces](/reference/filoz/synapse-core/sp/namespaces/createdatasetandaddpieces/toc/) | - |
| [createDataSetAndAddPiecesApiRequest](/reference/filoz/synapse-core/sp/namespaces/createdatasetandaddpiecesapirequest/toc/) | - |
| [createDataSetApiRequest](/reference/filoz/synapse-core/sp/namespaces/createdatasetapirequest/toc/) | - |
| [deletePiece](/reference/filoz/synapse-core/sp/namespaces/deletepiece/toc/) | - |
| [findPiece](/reference/filoz/synapse-core/sp/namespaces/findpiece/toc/) | - |
| [getDataSet](/reference/filoz/synapse-core/sp/namespaces/getdataset/toc/) | - |
| [pullPieces](/reference/filoz/synapse-core/sp/namespaces/pullpieces/toc/) | - |
| [pullPiecesApiRequest](/reference/filoz/synapse-core/sp/namespaces/pullpiecesapirequest/toc/) | - |
| [schedulePieceDeletion](/reference/filoz/synapse-core/sp/namespaces/schedulepiecedeletion/toc/) | - |
| [upload](/reference/filoz/synapse-core/sp/namespaces/upload/toc/) | - |
| [uploadPiece](/reference/filoz/synapse-core/sp/namespaces/uploadpiece/toc/) | - |
| [uploadPieceStreaming](/reference/filoz/synapse-core/sp/namespaces/uploadpiecestreaming/toc/) | - |
| [waitForAddPieces](/reference/filoz/synapse-core/sp/namespaces/waitforaddpieces/toc/) | - |
| [waitForCreateDataSet](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedataset/toc/) | - |
| [waitForCreateDataSetAddPieces](/reference/filoz/synapse-core/sp/namespaces/waitforcreatedatasetaddpieces/toc/) | - |
| [waitForPullPieces](/reference/filoz/synapse-core/sp/namespaces/waitforpullpieces/toc/) | - |
| [waitForPullPiecesApiRequest](/reference/filoz/synapse-core/sp/namespaces/waitforpullpiecesapirequest/toc/) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [AbortError](/reference/filoz/synapse-core/sp/classes/aborterror/) | - |
| [NetworkError](/reference/filoz/synapse-core/sp/classes/networkerror/) | - |
| [TimeoutError](/reference/filoz/synapse-core/sp/classes/timeouterror/) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AddPiecesOutput](/reference/filoz/synapse-core/sp/type-aliases/addpiecesoutput/) | - |
| [AddPiecesPending](/reference/filoz/synapse-core/sp/type-aliases/addpiecespending/) | - |
| [AddPiecesRejected](/reference/filoz/synapse-core/sp/type-aliases/addpiecesrejected/) | - |
| [AddPiecesResponse](/reference/filoz/synapse-core/sp/type-aliases/addpiecesresponse/) | - |
| [AddPiecesSuccess](/reference/filoz/synapse-core/sp/type-aliases/addpiecessuccess/) | - |
| [BasePullPiecesOptions](/reference/filoz/synapse-core/sp/type-aliases/basepullpiecesoptions/) | Base options for pulling pieces. |
| [CreateDataSetAndAddPiecesOptions](/reference/filoz/synapse-core/sp/type-aliases/createdatasetandaddpiecesoptions/) | - |
| [CreateDataSetPending](/reference/filoz/synapse-core/sp/type-aliases/createdatasetpending/) | - |
| [CreateDataSetRejected](/reference/filoz/synapse-core/sp/type-aliases/createdatasetrejected/) | - |
| [CreateDataSetResponse](/reference/filoz/synapse-core/sp/type-aliases/createdatasetresponse/) | - |
| [CreateDataSetSuccess](/reference/filoz/synapse-core/sp/type-aliases/createdatasetsuccess/) | - |
| [DataSet](/reference/filoz/synapse-core/sp/type-aliases/dataset/) | Data set from the PDP API. |
| [PullPieceInput](/reference/filoz/synapse-core/sp/type-aliases/pullpieceinput/) | Input piece for a pull request with typed PieceCID. |
| [PullToExistingDataSetOptions](/reference/filoz/synapse-core/sp/type-aliases/pulltoexistingdatasetoptions/) | Options for pulling pieces into an existing data set. |
| [PullToNewDataSetOptions](/reference/filoz/synapse-core/sp/type-aliases/pulltonewdatasetoptions/) | Options for creating a new data set and pulling pieces into it. |
| [UploadPieceStreamingData](/reference/filoz/synapse-core/sp/type-aliases/uploadpiecestreamingdata/) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [AddPiecesPendingSchema](/reference/filoz/synapse-core/sp/variables/addpiecespendingschema/) | - |
| [AddPiecesRejectedSchema](/reference/filoz/synapse-core/sp/variables/addpiecesrejectedschema/) | - |
| [AddPiecesSuccessSchema](/reference/filoz/synapse-core/sp/variables/addpiecessuccessschema/) | - |
| [CreateDataSetPendingSchema](/reference/filoz/synapse-core/sp/variables/createdatasetpendingschema/) | Schema for the create data set pending response. |
| [CreateDataSetRejectedSchema](/reference/filoz/synapse-core/sp/variables/createdatasetrejectedschema/) | Schema for the create data set rejected response. |
| [CreateDataSetSuccessSchema](/reference/filoz/synapse-core/sp/variables/createdatasetsuccessschema/) | Schema for the create data set success response. |
| [DataSetSchema](/reference/filoz/synapse-core/sp/variables/datasetschema/) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [addPieces](/reference/filoz/synapse-core/sp/functions/addpieces/) | Add pieces to a data set |
| [addPiecesApiRequest](/reference/filoz/synapse-core/sp/functions/addpiecesapirequest/) | Add pieces to a data set on the PDP API. |
| [createDataSet](/reference/filoz/synapse-core/sp/functions/createdataset/) | Create a data set |
| [createDataSetAndAddPieces](/reference/filoz/synapse-core/sp/functions/createdatasetandaddpieces/) | Create a data set and add pieces to it |
| [createDataSetAndAddPiecesApiRequest](/reference/filoz/synapse-core/sp/functions/createdatasetandaddpiecesapirequest/) | Create a data set and add pieces to it on PDP API |
| [createDataSetApiRequest](/reference/filoz/synapse-core/sp/functions/createdatasetapirequest/) | Create a data set on PDP API |
| [deletePiece](/reference/filoz/synapse-core/sp/functions/deletepiece/) | Delete a piece from a data set on the PDP API. |
| [findPiece](/reference/filoz/synapse-core/sp/functions/findpiece/) | Find a piece on the PDP API. |
| [~~getDataSet~~](/reference/filoz/synapse-core/sp/functions/getdataset/) | Get a data set from the PDP API. |
| [ping](/reference/filoz/synapse-core/sp/functions/ping/) | Ping the PDP API. |
| [pullPieces](/reference/filoz/synapse-core/sp/functions/pullpieces/) | Pull pieces from external storage providers into a data set. |
| [pullPiecesApiRequest](/reference/filoz/synapse-core/sp/functions/pullpiecesapirequest/) | Initiate a piece pull request or get status of an existing one. |
| [schedulePieceDeletion](/reference/filoz/synapse-core/sp/functions/schedulepiecedeletion/) | Schedule a piece deletion |
| [upload](/reference/filoz/synapse-core/sp/functions/upload/) | Upload multiple pieces to a data set on the PDP API. |
| [uploadPiece](/reference/filoz/synapse-core/sp/functions/uploadpiece/) | Upload a piece to the PDP API. |
| [uploadPieceStreaming](/reference/filoz/synapse-core/sp/functions/uploadpiecestreaming/) | Upload piece data using the 3-step CommP-last streaming protocol. |
| [waitForAddPieces](/reference/filoz/synapse-core/sp/functions/waitforaddpieces/) | Wait for the add pieces status. |
| [waitForCreateDataSet](/reference/filoz/synapse-core/sp/functions/waitforcreatedataset/) | Wait for the data set creation status. |
| [waitForCreateDataSetAddPieces](/reference/filoz/synapse-core/sp/functions/waitforcreatedatasetaddpieces/) | Wait for the data set creation status. |
| [waitForPullPieces](/reference/filoz/synapse-core/sp/functions/waitforpullpieces/) | Wait for pull pieces completion. |
| [waitForPullPiecesApiRequest](/reference/filoz/synapse-core/sp/functions/waitforpullpiecesapirequest/) | Wait for pull pieces completion API request. |

<div align="left">

[![Visit Oyster](./header.png)](https://oysterhr.com)

# [Oyster](https://oysterhr.com)<a id="oyster"></a>

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`oyster.authentication.createAccessToken`](#oysterauthenticationcreateaccesstoken)
  * [`oyster.company.detailsRetrieve`](#oystercompanydetailsretrieve)
  * [`oyster.departments.getAll`](#oysterdepartmentsgetall)
  * [`oyster.engagements.getAll`](#oysterengagementsgetall)
  * [`oyster.engagements.getById`](#oysterengagementsgetbyid)
  * [`oyster.expenses.approveExpense`](#oysterexpensesapproveexpense)
  * [`oyster.expenses.createOperationKey`](#oysterexpensescreateoperationkey)
  * [`oyster.expenses.declineExpense`](#oysterexpensesdeclineexpense)
  * [`oyster.expenses.getById`](#oysterexpensesgetbyid)
  * [`oyster.operations.getByOperationKey`](#oysteroperationsgetbyoperationkey)
  * [`oyster.payroll.getAllPayrolls`](#oysterpayrollgetallpayrolls)
  * [`oyster.payroll.getById`](#oysterpayrollgetbyid)
  * [`oyster.timeOff.approveRequest`](#oystertimeoffapproverequest)
  * [`oyster.timeOff.getAllRequests`](#oystertimeoffgetallrequests)
  * [`oyster.timeOff.getEntitlements`](#oystertimeoffgetentitlements)
  * [`oyster.timeOff.getRequest`](#oystertimeoffgetrequest)
  * [`oyster.timeOff.rejectRequest`](#oystertimeoffrejectrequest)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Oyster&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Oyster } from "oyster-typescript-sdk";

const oyster = new Oyster({
  // Defining the base path is optional and defaults to https://api.oysterhr.com
  // basePath: "https://api.oysterhr.com",
  accessToken: "ACCESS_TOKEN",
});

const createAccessTokenResponse = await oyster.authentication.createAccessToken(
  {
    client_id: "1234ABCD",
    client_secret: "1234ABCD",
    grant_type: "authorization_code",
    code: "1234ABCD",
    redirect_uri: "https://example.com/inbound",
    refresh_token: "https://example.com/inbound",
  }
);

console.log(createAccessTokenResponse);
```

## Reference<a id="reference"></a>


### `oyster.authentication.createAccessToken`<a id="oysterauthenticationcreateaccesstoken"></a>

Oyster grants access to API resources based on OAuth. This means that individual customers grant API access to Developer Apps that you create. This applies to both customers and partners. Follow these simple steps: <br><br> 1. [Create an Oyster account](https://app.oysterhr.com/sign_up) or [log in](https://app.oysterhr.com/users/sign_in) to your existing account. <br> <br> 2. Create an Oyster Developer App in the [Developer Tab](https://app.oysterhr.com/developer) (If you can't see the developer tab please contact us to enable it for your account). <br> Hint: If you are a customer doing this as a one time action you don't need to specify a functioning URL as step 3 will explain. <br> <br> 3. If you are a customer you can simply click on the "Authorization URL" and grant access to your own app. You will be redirected to the URL you specified when creating the Developer App. In the URL you will see that `?code=xxx` has been added to the URL. This is the `code` you need to create an access token. <br> If you are a partner add "Authorization URL to your application. The redirect_url should be a URL that goes back to your app and you're able to programmatically retrieve the URL query param of `?code=xxx` to then create an access token. <br> <br> 4. You need to first request an `authorization_code` with the API request detailed below. This will provide an `access_token` that is used as the Bearer Token for making API requests to Oyster. Ensure that you store the `refresh_token` for making future API requests. <br> <br> 5. If your `access_token` has expired then request a new one using your `refresh_token` that you have stored earlier. Ensure you store the new `refresh_token` each time as the previous ones will expire.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAccessTokenResponse = await oyster.authentication.createAccessToken(
  {
    client_id: "1234ABCD",
    client_secret: "1234ABCD",
    grant_type: "authorization_code",
    code: "1234ABCD",
    redirect_uri: "https://example.com/inbound",
    refresh_token: "https://example.com/inbound",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clientId: `string`<a id="clientid-string"></a>

The client_id of your Developer App. This can be found by visting https://app.oysterhr.com/developer

##### clientSecret: `string`<a id="clientsecret-string"></a>

The secret of your Developer App.

##### grantType: `string`<a id="granttype-string"></a>

First you need to request an `authorization_code`. Afterwards you can request a `refresh_token`.

##### code: `string`<a id="code-string"></a>

The code is required when requesting an `authorization_code`.

##### redirectUri: `string`<a id="redirecturi-string"></a>

The redirect_uri is required when requesting an `authorization_code`.

##### refreshToken: `string`<a id="refreshtoken-string"></a>

A `refresh_token` is required when requesting a `refresh_token`. A `refresh_token` will be provided when requesting an `authorization_code`

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth2/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.company.detailsRetrieve`<a id="oystercompanydetailsretrieve"></a>

Returns details about the connected company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const detailsRetrieveResponse = await oyster.company.detailsRetrieve();
```

#### 🔄 Return<a id="🔄-return"></a>

[CompanyDetailsRetrieveResponse](./models/company-details-retrieve-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.departments.getAll`<a id="oysterdepartmentsgetall"></a>

Returns a list of departments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await oyster.departments.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### perPage: `number`<a id="perpage-number"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DepartmentsGetAllResponse](./models/departments-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/departments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.engagements.getAll`<a id="oysterengagementsgetall"></a>

Returns a list of engagements

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await oyster.engagements.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### perPage: `number`<a id="perpage-number"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EngagementsGetAllResponse](./models/engagements-get-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/engagements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.engagements.getById`<a id="oysterengagementsgetbyid"></a>

Returns details for an engagement with a given engagement ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await oyster.engagements.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Engagement ID

#### 🔄 Return<a id="🔄-return"></a>

[EngagementsGetByIdResponse](./models/engagements-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/engagements/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.expenses.approveExpense`<a id="oysterexpensesapproveexpense"></a>

Approves an expense.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveExpenseResponse = await oyster.expenses.approveExpense({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Expense ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/{id}/approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.expenses.createOperationKey`<a id="oysterexpensescreateoperationkey"></a>

Creates a new expense for an engagement. This is an asynchronous operation. Returns operationKey that can be used to retrieve the operation to know if it's successfully completed

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOperationKeyResponse = await oyster.expenses.createOperationKey({
  engagementId: "engagementId_example",
  name: "name_example",
  incurredOn: "1970-01-01",
  category: "category_example",
  receiptUrl: "receiptUrl_example",
  receiptAmount: {
    decimal: "decimal_example",
    currencyCode: "currencyCode_example",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### engagementId: `string`<a id="engagementid-string"></a>

##### name: `string`<a id="name-string"></a>

##### incurredOn: `string`<a id="incurredon-string"></a>

##### category: `string`<a id="category-string"></a>

##### receiptUrl: `string`<a id="receipturl-string"></a>

##### receiptAmount: [`ExpensesCreateOperationKeyRequestReceiptAmount`](./models/expenses-create-operation-key-request-receipt-amount.ts)<a id="receiptamount-expensescreateoperationkeyrequestreceiptamountmodelsexpenses-create-operation-key-request-receipt-amountts"></a>

##### description: `string`<a id="description-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AsyncResponse](./models/async-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.expenses.declineExpense`<a id="oysterexpensesdeclineexpense"></a>

Declines an expense.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const declineExpenseResponse = await oyster.expenses.declineExpense({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Expense ID

##### reason: `string`<a id="reason-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/{id}/decline` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.expenses.getById`<a id="oysterexpensesgetbyid"></a>

Returns details for an expense with a given expense ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await oyster.expenses.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Expense ID

#### 🔄 Return<a id="🔄-return"></a>

[ExpensesGetByIdResponse](./models/expenses-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.operations.getByOperationKey`<a id="oysteroperationsgetbyoperationkey"></a>

Returns details for an operation with a given operation key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByOperationKeyResponse = await oyster.operations.getByOperationKey({
  operationKey: "operationKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### operationKey: `string`<a id="operationkey-string"></a>

Operation key

#### 🔄 Return<a id="🔄-return"></a>

[OperationsGetByOperationKeyResponse](./models/operations-get-by-operation-key-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/meta/operations/{operation_key}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.payroll.getAllPayrolls`<a id="oysterpayrollgetallpayrolls"></a>

Returns a list of payrolls

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPayrollsResponse = await oyster.payroll.getAllPayrolls({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### perPage: `number`<a id="perpage-number"></a>

##### page: `number`<a id="page-number"></a>

##### from: `string`<a id="from-string"></a>

##### to: `string`<a id="to-string"></a>

##### includeRecords: `boolean`<a id="includerecords-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayrollGetAllPayrollsResponse](./models/payroll-get-all-payrolls-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/payroll` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.payroll.getById`<a id="oysterpayrollgetbyid"></a>

Returns details for a payroll with a given payroll ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await oyster.payroll.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Payroll ID

#### 🔄 Return<a id="🔄-return"></a>

[PayrollGetByIdResponse](./models/payroll-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/payroll/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.timeOff.approveRequest`<a id="oystertimeoffapproverequest"></a>

Approves a time off request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveRequestResponse = await oyster.timeOff.approveRequest({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Time Off Request ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/time_off/requests/{id}/approve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.timeOff.getAllRequests`<a id="oystertimeoffgetallrequests"></a>

Returns all Time Off Requests for a company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllRequestsResponse = await oyster.timeOff.getAllRequests({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### perPage: `number`<a id="perpage-number"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffGetAllRequestsResponse](./models/time-off-get-all-requests-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/time_off/requests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.timeOff.getEntitlements`<a id="oystertimeoffgetentitlements"></a>

Returns entitlements for each engagement of the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEntitlementsResponse = await oyster.timeOff.getEntitlements({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### perPage: `number`<a id="perpage-number"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffGetEntitlementsResponse](./models/time-off-get-entitlements-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/time_off/entitlements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.timeOff.getRequest`<a id="oystertimeoffgetrequest"></a>

Returns details for a request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRequestResponse = await oyster.timeOff.getRequest({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Time Off Request ID

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffGetRequestResponse](./models/time-off-get-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/time_off/requests/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oyster.timeOff.rejectRequest`<a id="oystertimeoffrejectrequest"></a>

Rejects a time off request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const rejectRequestResponse = await oyster.timeOff.rejectRequest({
  id: "id_example",
  reason: "reason_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reason: `string`<a id="reason-string"></a>

##### id: `string`<a id="id-string"></a>

Time Off Request ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/time_off/requests/{id}/reject` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)

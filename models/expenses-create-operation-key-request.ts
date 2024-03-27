/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExpensesCreateOperationKeyRequestReceiptAmount } from './expenses-create-operation-key-request-receipt-amount';

/**
 * 
 * @export
 * @interface ExpensesCreateOperationKeyRequest
 */
export interface ExpensesCreateOperationKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof ExpensesCreateOperationKeyRequest
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ExpensesCreateOperationKeyRequest
     */
    'engagementId': string;
    /**
     * 
     * @type {string}
     * @memberof ExpensesCreateOperationKeyRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ExpensesCreateOperationKeyRequest
     */
    'incurredOn': string;
    /**
     * 
     * @type {string}
     * @memberof ExpensesCreateOperationKeyRequest
     */
    'category': string;
    /**
     * 
     * @type {string}
     * @memberof ExpensesCreateOperationKeyRequest
     */
    'receiptUrl': string;
    /**
     * 
     * @type {ExpensesCreateOperationKeyRequestReceiptAmount}
     * @memberof ExpensesCreateOperationKeyRequest
     */
    'receiptAmount': ExpensesCreateOperationKeyRequestReceiptAmount;
}

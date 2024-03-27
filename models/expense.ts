/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Amount } from './amount';
import { ExpenseEngagement } from './expense-engagement';

/**
 * 
 * @export
 * @interface Expense
 */
export interface Expense {
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'expenseId': string;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'name': string;
    /**
     * 
     * @type {Amount}
     * @memberof Expense
     */
    'amount': Amount;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'category': string;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'incurredOn'?: string;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'submittedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'reviewState'?: string;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'reviewedAt'?: string | null;
    /**
     * 
     * @type {Amount}
     * @memberof Expense
     */
    'receiptAmount': Amount;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'receiptUrl'?: string | null;
    /**
     * 
     * @type {ExpenseEngagement}
     * @memberof Expense
     */
    'engagement'?: ExpenseEngagement;
    /**
     * 
     * @type {string}
     * @memberof Expense
     */
    'source'?: string;
}


/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayrollRecord } from './payroll-record';

/**
 * 
 * @export
 * @interface Payroll
 */
export interface Payroll {
    /**
     * 
     * @type {string}
     * @memberof Payroll
     */
    'payrollId': string;
    /**
     * 
     * @type {string}
     * @memberof Payroll
     */
    'currencyCode': string;
    /**
     * 
     * @type {string}
     * @memberof Payroll
     */
    'cutoffTimeForPayroll': string | null;
    /**
     * 
     * @type {string}
     * @memberof Payroll
     */
    'state': string;
    /**
     * 
     * @type {number}
     * @memberof Payroll
     */
    'payrollRecordsCount': number;
    /**
     * 
     * @type {Array<PayrollRecord>}
     * @memberof Payroll
     */
    'records'?: Array<PayrollRecord>;
}

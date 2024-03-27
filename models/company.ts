/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CompanyAddresses } from './company-addresses';

/**
 * 
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    'companyId': string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    'registrationNumber': string;
    /**
     * 
     * @type {CompanyAddresses}
     * @memberof Company
     */
    'addresses': CompanyAddresses;
}

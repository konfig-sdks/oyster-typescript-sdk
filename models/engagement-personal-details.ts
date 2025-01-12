/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EngagementPersonalDetailsAddresses } from './engagement-personal-details-addresses';
import { EngagementPersonalDetailsPhoneNumbers } from './engagement-personal-details-phone-numbers';

/**
 * 
 * @export
 * @interface EngagementPersonalDetails
 */
export interface EngagementPersonalDetails {
    /**
     * 
     * @type {string}
     * @memberof EngagementPersonalDetails
     */
    'name': string | null;
    /**
     * 
     * @type {EngagementPersonalDetailsAddresses}
     * @memberof EngagementPersonalDetails
     */
    'addresses': EngagementPersonalDetailsAddresses;
    /**
     * 
     * @type {Array<string>}
     * @memberof EngagementPersonalDetails
     */
    'citizenships'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EngagementPersonalDetails
     */
    'dateOfBirth'?: string | null;
    /**
     * 
     * @type {EngagementPersonalDetailsPhoneNumbers}
     * @memberof EngagementPersonalDetails
     */
    'phoneNumbers'?: EngagementPersonalDetailsPhoneNumbers;
}


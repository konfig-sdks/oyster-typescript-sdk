/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Meta } from './meta';
import { TimeOffRequest } from './time-off-request';

/**
 * 
 * @export
 * @interface TimeOffGetAllRequestsResponse
 */
export interface TimeOffGetAllRequestsResponse {
    /**
     * 
     * @type {Array<TimeOffRequest>}
     * @memberof TimeOffGetAllRequestsResponse
     */
    'data': Array<TimeOffRequest>;
    /**
     * 
     * @type {Meta}
     * @memberof TimeOffGetAllRequestsResponse
     */
    'meta': Meta;
}

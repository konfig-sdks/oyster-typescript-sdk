/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeOffEngagementDetails } from './time-off-engagement-details';

/**
 * 
 * @export
 * @interface TimeOffEntitlementsInner
 */
export interface TimeOffEntitlementsInner {
    /**
     * 
     * @type {TimeOffEngagementDetails}
     * @memberof TimeOffEntitlementsInner
     */
    'engagement'?: TimeOffEngagementDetails;
    /**
     * 
     * @type {number}
     * @memberof TimeOffEntitlementsInner
     */
    'annualEntitlement'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffEntitlementsInner
     */
    'accrued'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffEntitlementsInner
     */
    'carried'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffEntitlementsInner
     */
    'adjustedAdhoc'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffEntitlementsInner
     */
    'taken'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffEntitlementsInner
     */
    'availableBalance'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffEntitlementsInner
     */
    'upcoming'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeOffEntitlementsInner
     */
    'projectedBalance'?: number;
    /**
     * 
     * @type {string}
     * @memberof TimeOffEntitlementsInner
     */
    'units'?: TimeOffEntitlementsInnerUnitsEnum;
}

type TimeOffEntitlementsInnerUnitsEnum = 'DAYS'


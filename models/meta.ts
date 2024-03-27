/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     * 
     * @type {number}
     * @memberof Meta
     */
    'items'?: number;
    /**
     * 
     * @type {number}
     * @memberof Meta
     */
    'count'?: number;
    /**
     * 
     * @type {number}
     * @memberof Meta
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof Meta
     */
    'pages'?: number;
    /**
     * 
     * @type {string}
     * @memberof Meta
     */
    'firstUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof Meta
     */
    'lastUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof Meta
     */
    'pageUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof Meta
     */
    'nextUrl'?: string;
    /**
     * 
     * @type {string}
     * @memberof Meta
     */
    'prevUrl'?: string;
}

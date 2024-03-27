/* tslint:disable */
/* eslint-disable */
/*
Endpoints

Oyster uses OAuth2 to enable customers to grant access to their data to third party applications. Customers also need to use this API to authenticate themselves when making API requests.

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DepartmentsGetAllResponse } from '../models';
// @ts-ignore
import { ModelError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DepartmentsApi - axios parameter creator
 * @export
 */
export const DepartmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of departments
         * @summary Retrieve all departments
         * @param {number} [perPage] 
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (perPage?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/departments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer_auth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/departments',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DepartmentsApi - functional programming interface
 * @export
 */
export const DepartmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DepartmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of departments
         * @summary Retrieve all departments
         * @param {DepartmentsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: DepartmentsApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DepartmentsGetAllResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.perPage, requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DepartmentsApi - factory interface
 * @export
 */
export const DepartmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DepartmentsApiFp(configuration)
    return {
        /**
         * Returns a list of departments
         * @summary Retrieve all departments
         * @param {DepartmentsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: DepartmentsApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<DepartmentsGetAllResponse> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAll operation in DepartmentsApi.
 * @export
 * @interface DepartmentsApiGetAllRequest
 */
export type DepartmentsApiGetAllRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof DepartmentsApiGetAll
    */
    readonly perPage?: number
    
    /**
    * 
    * @type {number}
    * @memberof DepartmentsApiGetAll
    */
    readonly page?: number
    
}

/**
 * DepartmentsApiGenerated - object-oriented interface
 * @export
 * @class DepartmentsApiGenerated
 * @extends {BaseAPI}
 */
export class DepartmentsApiGenerated extends BaseAPI {
    /**
     * Returns a list of departments
     * @summary Retrieve all departments
     * @param {DepartmentsApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DepartmentsApiGenerated
     */
    public getAll(requestParameters: DepartmentsApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return DepartmentsApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
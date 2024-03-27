type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/oauth2/token-POST': {
        parameters: [
            {
                name: 'client_id'
            },
            {
                name: 'client_secret'
            },
            {
                name: 'grant_type'
            },
            {
                name: 'code'
            },
            {
                name: 'redirect_uri'
            },
            {
                name: 'refresh_token'
            },
        ]
    },
    '/v1/company-GET': {
        parameters: [
        ]
    },
    '/v1/departments-GET': {
        parameters: [
            {
                name: 'per_page'
            },
            {
                name: 'page'
            },
        ]
    },
    '/v1/engagements-GET': {
        parameters: [
            {
                name: 'per_page'
            },
            {
                name: 'page'
            },
        ]
    },
    '/v1/engagements/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/expenses/{id}/approve-POST': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/expenses-POST': {
        parameters: [
            {
                name: 'engagementId'
            },
            {
                name: 'name'
            },
            {
                name: 'incurredOn'
            },
            {
                name: 'category'
            },
            {
                name: 'receiptUrl'
            },
            {
                name: 'receiptAmount'
            },
            {
                name: 'description'
            },
        ]
    },
    '/v1/expenses/{id}/decline-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'reason'
            },
        ]
    },
    '/v1/expenses/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/meta/operations/{operation_key}-GET': {
        parameters: [
            {
                name: 'operation_key'
            },
        ]
    },
    '/v1/payroll-GET': {
        parameters: [
            {
                name: 'per_page'
            },
            {
                name: 'page'
            },
            {
                name: 'from'
            },
            {
                name: 'to'
            },
            {
                name: 'include_records'
            },
        ]
    },
    '/v1/payroll/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time_off/requests/{id}/approve-POST': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time_off/requests-GET': {
        parameters: [
            {
                name: 'per_page'
            },
            {
                name: 'page'
            },
        ]
    },
    '/v1/time_off/entitlements-GET': {
        parameters: [
            {
                name: 'per_page'
            },
            {
                name: 'page'
            },
        ]
    },
    '/v1/time_off/requests/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/time_off/requests/{id}/reject-POST': {
        parameters: [
            {
                name: 'reason'
            },
            {
                name: 'id'
            },
        ]
    },
}
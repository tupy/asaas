export declare class AsaasAPIError extends Error {
    message: string;
    cause?: Error | undefined;
    data?: any;
    constructor(message: string, cause?: Error | undefined, data?: any);
}

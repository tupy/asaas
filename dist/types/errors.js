"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsaasAPIError = void 0;
class AsaasAPIError extends Error {
    constructor(message, cause, data) {
        super(message);
        this.message = message;
        this.cause = cause;
        this.data = data;
        Error.captureStackTrace(this, AsaasAPIError);
    }
}
exports.AsaasAPIError = AsaasAPIError;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixAPI = void 0;
const axios_1 = require("axios");
const errors_1 = require("../types/errors");
class PixAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    decodeQrCode(decodeData) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/pix/qrCodes/decode`, decodeData);
                return response.data;
            }
            catch (error) {
                const message = 'Erro ao decodificar o QRCode';
                const data = error instanceof axios_1.AxiosError ? (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error : undefined;
                const cause = error instanceof Error ? error : new Error('An unknown error occurred');
                throw new errors_1.AsaasAPIError(message, cause, data);
            }
        });
    }
    payQrCode(paymentData) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/pix/qrCodes/pay`, paymentData);
                return response.data;
            }
            catch (error) {
                const message = 'Erro ao pagar o QRCode';
                const data = error instanceof axios_1.AxiosError ? (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error : undefined;
                const cause = error instanceof Error ? error : new Error('An unknown error occurred');
                throw new errors_1.AsaasAPIError(message, cause, data);
            }
        });
    }
    getTransaction(id) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/pix/transactions`, {
                    params: { id },
                });
                return response.data;
            }
            catch (error) {
                const message = 'Erro ao buscar o QRCode';
                const data = error instanceof axios_1.AxiosError ? (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error : undefined;
                const cause = error instanceof Error ? error : new Error('An unknown error occurred');
                throw new errors_1.AsaasAPIError(message, cause, data);
            }
        });
    }
}
exports.PixAPI = PixAPI;

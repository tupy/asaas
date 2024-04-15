import { AxiosInstance } from 'axios';
import { IAsaasPixQRCodesDecode, IAsaasPixQRCodesDecodeResponse, IAsaasPixQRCodesPayment, IAsaasPixQRCodesPaymentResponse } from '../types/AsaasTypes';
export declare class PixAPI {
    private apiClient;
    constructor(apiClient: AxiosInstance);
    decodeQrCode(decodeData: IAsaasPixQRCodesDecode): Promise<IAsaasPixQRCodesDecodeResponse>;
    payQrCode(paymentData: IAsaasPixQRCodesPayment): Promise<IAsaasPixQRCodesPaymentResponse>;
    getTransaction(id: string): Promise<IAsaasPixQRCodesPaymentResponse>;
}

import { AxiosError, AxiosInstance } from 'axios';
import {
  IAsaasPixQRCodesDecode,
  IAsaasPixQRCodesDecodeResponse,
  IAsaasPixQRCodesPayment,
  IAsaasPixQRCodesPaymentResponse,
} from '../types/AsaasTypes';
import { AsaasAPIError } from '../types/errors';

export class PixAPI {
  constructor(private apiClient: AxiosInstance) {}

  async decodeQrCode(
    decodeData: IAsaasPixQRCodesDecode,
  ): Promise<IAsaasPixQRCodesDecodeResponse> {
    try {
      const response = await this.apiClient.post(
        `/pix/qrCodes/decode`,
        decodeData,
      );
      return response.data;
    } catch (error) {
      const message = 'Erro ao decodificar o QRCode';
      const data =
        error instanceof AxiosError ? error.response?.data?.error : undefined;
      const cause =
        error instanceof Error ? error : new Error('An unknown error occurred');
      throw new AsaasAPIError(message, cause, data);
    }
  }

  async payQrCode(
    paymentData: IAsaasPixQRCodesPayment,
  ): Promise<IAsaasPixQRCodesPaymentResponse> {
    try {
      const response = await this.apiClient.post(
        `/pix/qrCodes/pay`,
        paymentData,
      );
      return response.data;
    } catch (error) {
      const message = 'Erro ao pagar o QRCode';
      const data =
        error instanceof AxiosError ? error.response?.data?.error : undefined;
      const cause =
        error instanceof Error ? error : new Error('An unknown error occurred');
      throw new AsaasAPIError(message, cause, data);
    }
  }

  async getTransaction(id: string): Promise<IAsaasPixQRCodesPaymentResponse> {
    try {
      const response = await this.apiClient.get(`/pix/transactions`, {
        params: { id },
      });
      return response.data;
    } catch (error) {
      const message = 'Erro ao buscar o QRCode';
      const data =
        error instanceof AxiosError ? error.response?.data?.error : undefined;
      const cause =
        error instanceof Error ? error : new Error('An unknown error occurred');
      throw new AsaasAPIError(message, cause, data);
    }
  }
}

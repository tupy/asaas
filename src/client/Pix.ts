import { AxiosInstance } from 'axios';
import {
  IAsaasPixQRCodesDecode,
  IAsaasPixQRCodesDecodeResponse,
  IAsaasPixQRCodesPayment,
  IAsaasPixQRCodesPaymentResponse,
} from '../types/AsaasTypes';

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
      console.error('Erro ao decodificar o QRCode:', error);
      throw error;
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
      console.error('Erro ao pagar o QRCode:', error);
      throw error;
    }
  }

  async getTransaction(id: string): Promise<IAsaasPixQRCodesPaymentResponse> {
    try {
      const response = await this.apiClient.get(`/pix/transactions`, {
        params: { id },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar o QRCode:', error);
      throw error;
    }
  }
}

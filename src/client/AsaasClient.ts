import axios from 'axios';
import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from './Customers';
import { PaymentsAPI } from './Payments';
import { InstallmentsAPI } from './Installments';
import { SubscriptionsAPI } from './Subscriptions';
import { Webhooks } from './Webhooks';
import { PixAPI } from './Pix';

export class AsaasClient {
  public customers: CustomersAPI;
  public payments: PaymentsAPI;
  public pix: PixAPI;
  public installments: InstallmentsAPI;
  public subscriptions: SubscriptionsAPI;
  public webhooks: Webhooks;

  constructor(private apiKey: string, options: AsaasOptions = {}) {
    const apiClient = axios;
    apiClient.defaults.baseURL = options.sandbox
      ? options.sandboxUrl || 'https://sandbox.asaas.com/api/v3'
      : options.baseUrl
      ? options.baseUrl
      : 'https://api.asaas.com/v3';
    apiClient.defaults.headers.common['access_token'] = this.apiKey;

    this.customers = new CustomersAPI(apiClient);
    this.payments = new PaymentsAPI(apiClient);
    this.pix = new PixAPI(apiClient);
    this.installments = new InstallmentsAPI(apiClient);
    this.subscriptions = new SubscriptionsAPI(apiClient);
    this.webhooks = new Webhooks();
  }
}

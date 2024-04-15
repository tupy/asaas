import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from './Customers';
import { PaymentsAPI } from './Payments';
import { InstallmentsAPI } from './Installments';
import { SubscriptionsAPI } from './Subscriptions';
import { Webhooks } from './Webhooks';
import { PixAPI } from './Pix';
export declare class AsaasClient {
    private apiKey;
    customers: CustomersAPI;
    payments: PaymentsAPI;
    pix: PixAPI;
    installments: InstallmentsAPI;
    subscriptions: SubscriptionsAPI;
    webhooks: Webhooks;
    constructor(apiKey: string, options?: AsaasOptions);
}

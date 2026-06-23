import { serverFetch } from "../core/server";

export const getPaymentById = async(paymentId)=> {
    return serverFetch(`/api/payments?payment_id=${paymentId}`);
} 
import { protectedFetch } from "../core/server";

export const getPaymentById = async(paymentId)=> {
    return protectedFetch(`/api/payments?payment_id=${paymentId}`);
} 
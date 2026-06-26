import { protectedFetch } from "../core/server";


export const getAllPayments = async () => {
    return protectedFetch(`/api/subscriptions`);
};
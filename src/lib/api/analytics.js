import { serverFetch } from "../core/server";


export const getAdminAnalytics = async () => {
    return serverFetch(`/api/admin/analytics`);
};
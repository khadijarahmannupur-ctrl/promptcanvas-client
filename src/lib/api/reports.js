import { protectedFetch } from "../core/server";

export const getReportedPrompts = async () => {
    return protectedFetch('/api/reports');
};
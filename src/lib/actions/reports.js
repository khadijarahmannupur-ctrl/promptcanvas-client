'use server'
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const createReport = async (report) => {

    return serverMutation(`/api/reports`, report);

};

export const removeReportedPrompt = async (id) => {
    const result = serverMutation(`/api/reports/remove-prompt/${id}`, undefined, "DELETE");
    if (result.deletedCount) {
        revalidatePath("/dashboard/admin/reportedPrompts");
    }
    return result;
};

export const dismissReport = async (id) => {
    const result = serverMutation(`/api/reports/dismiss/${id}`, undefined, "DELETE");
    if (result.deletedCount) {
        revalidatePath("/dashboard/admin/reportedPrompts");
    }
    return result;
};
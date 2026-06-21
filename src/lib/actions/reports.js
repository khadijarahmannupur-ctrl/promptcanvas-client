import { serverMutation } from "../core/server";

export const createReport = async (report) => {

    return serverMutation(`/api/reports`, report);

};
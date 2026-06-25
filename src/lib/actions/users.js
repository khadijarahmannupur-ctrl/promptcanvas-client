'use server'
import { headers } from "next/headers";
import { auth } from "../auth";
import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const updateUserRole = async (userId, role) => {
    const data = await auth.api.setRole({
        body: {
            userId,
            role,
        },

        headers: await headers(),
    });
    revalidatePath('/api/dashboard/allUsers')
    return data;
}

export const deleteUser = async (id) => {
    return serverMutation(`/api/users/${id}`, undefined, 'DELETE');
};
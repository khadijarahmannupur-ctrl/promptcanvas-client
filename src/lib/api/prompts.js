'use server'

import { protectedFetch, serverFetch } from "../core/server";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// lib/api/prompts.js

export const getPrompts = async ({
    page = 1,
    search = "",
    category = "all",
    tool = "all",
    difficulty = "all",
    sort = "newest",
} = {}) => {
    const params = new URLSearchParams();

    params.set("page", page);
    if (search) params.set("search", search);
    if (category !== "all") params.set("category", category);
    if (tool !== "all") params.set("tool", tool);
    if (difficulty !== "all") params.set("difficulty", difficulty);
    if (sort) params.set("sort", sort);

    return serverFetch(`/api/prompts?${params.toString()}`);
};

export const getAdminPrompts = async () => {
    return protectedFetch(`/api/admin/prompts`)
}

export const getFeaturedPrompts = async () => {
    return serverFetch("/api/prompts/featured");
};

export const getPromptById = async (promptId) => {
    return protectedFetch(`/api/prompts/${promptId}`);
}

export const getCreatorPrompts = async (creatorId, status) => {

    let path = `/api/creator/prompts?creatorId=${creatorId}`;

    if (status) {
        path += `&status=${status}`;
    }

    return protectedFetch(path);
};

export const getTopCreators = async () => {
    return serverFetch("/api/creators/top");
};

// search
// export const getSearchPrompts = async ({
//     search = "",
//     category = "all",
//     tool = "all",
//     difficulty = "all",
//     sort = "newest",
// } = {}) => {

//     const params = new URLSearchParams();

//     if (search) {
//         params.set("search", search);
//     }

//     if (category !== "all") {
//         params.set("category", category);
//     }

//     if (tool !== "all") {
//         params.set("tool", tool);
//     }

//     if (difficulty !== "all") {
//         params.set("difficulty", difficulty);
//     }

//     if (sort) {
//         params.set("sort", sort);
//     }

//     return serverFetch(`/api/prompts?${params.toString()}`);
// };
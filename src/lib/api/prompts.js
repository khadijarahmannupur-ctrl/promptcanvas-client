'use server'

import { serverFetch } from "../core/server";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getPrompts = async()=> {
    return serverFetch(`/api/prompts`)
}

export const getFeaturedPrompts = async () => {
    return serverFetch("/api/prompts/featured");
};

export const getPromptById = async(promptId)=> {
    return serverFetch(`/api/prompts/${promptId}`);
} 

export const getCreatorPrompts = async (creatorId, status) => {

    let url = `${serverUrl}/api/prompts?creatorId=${creatorId}`;

    if (status) {
        url += `&status=${status}`;
    }

    const res = await fetch(url);

    return res.json();
};
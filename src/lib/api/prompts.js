'use server'

import { serverFetch } from "../core/server";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getPrompts = async()=> {
    return serverFetch(`/api/prompts`)
}

export const getRecruiterPrompts = async(creatorId, status = 'approved')=>{
    const res = await fetch(`${serverUrl}/api/prompts?creatorId=${creatorId}&status=${status}`)
    return res.json();
}
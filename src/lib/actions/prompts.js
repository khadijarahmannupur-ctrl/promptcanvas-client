'use server'

import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"


export const createPrompt = async(newPromptData)=>{
   return serverMutation('/api/prompts', newPromptData)    
}

export const updatedPrompt = async(id, data)=> {
   const result = serverMutation(`/api/prompts/${id}`, data, 'PATCH');
   revalidatePath('/dashboard/admin/allPrompts');
   return result;
}

export const deletePrompt = async (id) => {
    return serverMutation(`/api/prompts/${id}`, null, 'DELETE');
};
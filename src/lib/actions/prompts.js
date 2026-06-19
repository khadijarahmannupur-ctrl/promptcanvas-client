'use server'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const createPrompt = async(newPromptData)=>{
    const res = await fetch(`${serverUrl}/api/prompts`, {
        method: 'POST',
        headers:{
            'content-type' : 'application/json',
        },
        body: JSON.stringify(newPromptData),
    })
    return res.json();
}
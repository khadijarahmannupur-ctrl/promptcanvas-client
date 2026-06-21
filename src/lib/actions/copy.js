
// export const increaseCopyCount = async (id) => {

//     const res = await

// };

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const increaseCopyCount = async(id)=>{
    const res = await fetch(`${serverUrl}/api/prompts/copy/${id}`, {
        method: 'PATCH',
        headers:{
            'content-type' : 'application/json',
        },
        // body: JSON.stringify(id),
    })
    return res.json();
}
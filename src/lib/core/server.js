
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const serverFetch = async (path) => {
    const res = await fetch(`${serverUrl}${path}`);
    return res.json();
}


export const serverMutation = async (path, data, method = "POST") => {

    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (data !== undefined && data !== null) {
        options.body = JSON.stringify(data);
    }

    const res = await fetch(`${serverUrl}${path}`, options);

    return res.json();
};
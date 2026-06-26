'use server';

import { serverMutation } from "../core/server";

export const addBookmark = async (bookmarkData) => {
    return serverMutation("/api/bookmarks", bookmarkData);
};

export const removeBookmark = async (promptId, userEmail) => {
    return serverMutation(
        "/api/bookmarks",
        { promptId, userEmail },
        "DELETE"
    );
};
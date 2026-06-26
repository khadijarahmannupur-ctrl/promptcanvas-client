import { protectedFetch, serverFetch } from "../core/server";

export const getBookmarkedPrompts = async (userEmail) => {
    return protectedFetch(`/api/bookmarks?userEmail=${userEmail}`);
};

export const checkBookmark = async (promptId, userEmail) => {
    return serverFetch(
        `/api/bookmarks/check?promptId=${promptId}&userEmail=${userEmail}`
    );
};
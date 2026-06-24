import { serverFetch } from "../core/server";

export const getBookmarkedPrompts = async (userEmail) => {
    return serverFetch(`/api/bookmarks?userEmail=${userEmail}`);
};
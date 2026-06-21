
import { serverFetch } from "../core/server";

export const getReviews = async (promptId) => {
    return serverFetch(`/api/reviews/${promptId}`);
};

export const getAverageRating = async (promptId) => {
    return serverFetch(`/api/reviews/rating/${promptId}`);
};
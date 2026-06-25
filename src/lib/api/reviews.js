
import { serverFetch } from "../core/server";

export const getReviewsForReviewSection = async () => {
    return serverFetch('/api/reviews');
};

export const getReviewForDetailsPage = async (promptId, userId) => {
    return serverFetch(`/api/reviews/user-review?promptId=${promptId}&userId=${userId}`)
}

export const getAllReviewsByReviewer = async (userId) => {
    return serverFetch(`/api/reviews/user/${userId}`);
}

export const getAverageRating = async (promptId) => {
    return serverFetch(`/api/reviews/rating/${promptId}`);
};
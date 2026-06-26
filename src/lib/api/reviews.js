
import { protectedFetch, serverFetch } from "../core/server";

export const getReviewsForReviewSection = async () => {
    return serverFetch('/api/reviews');
};

export const getReviewForDetailsPage = async (promptId, userId) => {
    return protectedFetch(`/api/reviews/user-review?promptId=${promptId}&userId=${userId}`)
}

export const getAllReviewsByReviewer = async (userId) => {
    return protectedFetch(`/api/reviews/user/${userId}`);
}

export const getAverageRating = async (promptId) => {
    return protectedFetch(`/api/reviews/rating/${promptId}`);
};
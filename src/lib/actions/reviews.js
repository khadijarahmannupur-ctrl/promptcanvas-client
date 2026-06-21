import { serverMutation } from "../core/server";


export const createReview = async (review) => {

    return serverMutation(`/api/reviews`, review);
};
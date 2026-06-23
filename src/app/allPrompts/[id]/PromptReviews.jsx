"use client";

import { useState, useEffect } from "react";
import {
    Card,
    Avatar,
    Button,
    TextArea,
    Select,
    ListBox,
} from "@heroui/react";

import toast from "react-hot-toast";
import { getReviewForDetailsPage } from "@/lib/api/reviews";
import { createReview } from "@/lib/actions/reviews";

export default function PromptReviews({ prompt, user }) {

    const [review, setReview] = useState(null);
    const [ratingInfo, setRatingInfo] = useState({
        average: 0,
        total: 0,
    });

    const [rating, setRating] = useState("5");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [hasReviewed, setHasReviewed] = useState(false);

    async function loadReview() {
        if (!user) return;

        const reviewData = await getReviewForDetailsPage(
            prompt._id,
            user?.id
        );

        setReview(reviewData || null);
        setHasReviewed(!!reviewData);
    }

    useEffect(() => {
        loadReview();
    }, [user]);

    const handleSubmit = async () => {

        if (!user) {
            toast.error("Please login first.");
            return;
        }

        if (!comment.trim()) {
            toast.error("Please write your review.");
            return;
        }

        setLoading(true);

        const newReview = {
            promptId: prompt._id,
            promptTitle: prompt.title,

            userId: user.id,
            userName: user.name,
            userEmail: user.email,
            userImage: user.image,

            rating: Number(rating),
            comment,
        };

        const result = await createReview(newReview);

        if (result.insertedId) {

            toast.success("Review submitted.");

            setComment("");
            setRating("5");
            setHasReviewed(true);

            loadReview();

        } else {
            toast.error(result.message || "Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <div className="space-y-8">

            {/* ================= REVIEW FORM ================= */}
            {!hasReviewed && (
                <Card className="rounded-3xl border border-[#DCCCAC] bg-white shadow-none">

                    <Card.Header>
                        <div>
                            <Card.Title className="text-2xl font-bold text-[#2F3B26]">
                                Reviews & Ratings
                            </Card.Title>
                        </div>
                    </Card.Header>

                    <Card.Content className="space-y-5">

                        <div>
                            <p className="mb-2 text-sm font-medium">Rating</p>

                            <Select
                                selectedKey={rating}
                                onSelectionChange={(key) => setRating(key)}
                            >
                                <Select.Trigger className="w-full rounded-xl border">
                                    <Select.Value />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="5">⭐⭐⭐⭐⭐ (5)</ListBox.Item>
                                        <ListBox.Item id="4">⭐⭐⭐⭐ (4)</ListBox.Item>
                                        <ListBox.Item id="3">⭐⭐⭐ (3)</ListBox.Item>
                                        <ListBox.Item id="2">⭐⭐ (2)</ListBox.Item>
                                        <ListBox.Item id="1">⭐ (1)</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        <TextArea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your review..."
                            minrows={4}
                        />

                    </Card.Content>

                    <Card.Footer>
                        <Button
                            onPress={handleSubmit}
                            isLoading={loading}
                            className="bg-[#546B41] text-white"
                        >
                            Submit Review
                        </Button>
                    </Card.Footer>

                </Card>
            )}

            {/* ================= USER REVIEW (ONLY ONE) ================= */}
            {hasReviewed && review && (

                <Card className="rounded-3xl border border-[#DCCCAC] bg-white shadow-none">

                    <Card.Content>

                        <div className="flex gap-4">

                            <Avatar>
                                <Avatar.Image src={review.userImage} />
                                <Avatar.Fallback>
                                    {review.userName?.[0]}
                                </Avatar.Fallback>
                            </Avatar>

                            <div className="flex-1">

                                <div className="flex justify-between items-center">

                                    <div>
                                        <h4 className="font-semibold text-[#2F3B26]">
                                            {review.userName}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {review.userEmail}
                                        </p>
                                    </div>

                                    <span className="text-yellow-500">
                                        {"⭐".repeat(review.rating)}
                                    </span>

                                </div>

                                <p className="mt-4 text-gray-600">
                                    {review.comment}
                                </p>

                            </div>

                        </div>

                    </Card.Content>

                </Card>
            )}

        </div>
    );
}
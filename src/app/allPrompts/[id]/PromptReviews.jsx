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
import { getAverageRating, getReviews } from "@/lib/api/reviews";
import { createReview } from "@/lib/actions/reviews";

export default function PromptReviews({ prompt, session }) {

    const [reviews, setReviews] = useState([]);
    const [ratingInfo, setRatingInfo] = useState({
        average: 0,
        total: 0,
    });

    const [rating, setRating] = useState("5");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    async function loadReviews() {

        const reviewData = await getReviews(prompt._id);

        const average = await getAverageRating(prompt._id);

        setReviews(reviewData || []);
        setRatingInfo(average || {
            average: 0,
            total: 0,
        });

    }

    useEffect(() => {
        loadReviews();
    }, []);

    const handleSubmit = async () => {

        if (!session?.user) {
            toast.error("Please login first.");
            return;
        }

        if (!comment.trim()) {
            toast.error("Please write your review.");
            return;
        }

        setLoading(true);

        const review = {

            promptId: prompt._id,
            promptTitle: prompt.title,

            userName: session.user.name,
            userEmail: session.user.email,
            userImage: session.user.image,

            rating: Number(rating),
            comment,

        };

        const result = await createReview(review);

        if (result.insertedId) {

            toast.success("Review submitted.");

            setComment("");

            setRating("5");

            loadReviews();

        } else {

            toast.error(result.message || "Something went wrong.");

        }

        setLoading(false);

    };

    return (

        <div className="space-y-8">

            {/* Review Form */}

            <Card className="rounded-3xl border border-[#DCCCAC] bg-white shadow-none">

                <Card.Header>

                    <div>

                        <Card.Title className="text-2xl font-bold text-[#2F3B26]">

                            Reviews & Ratings

                        </Card.Title>

                        <Card.Description className="mt-2">

                            ⭐ {ratingInfo.average} / 5 ({ratingInfo.total} Reviews)

                        </Card.Description>

                    </div>

                </Card.Header>

                <Card.Content className="space-y-5">

                    <div>

                        <p className="mb-2 text-sm font-medium">

                            Rating

                        </p>

                        <Select
                            selectedKey={rating}
                            onSelectionChange={(key) => setRating(key)}
                        >

                            <Select.Trigger className="w-full rounded-xl border">

                                <Select.Value />

                            </Select.Trigger>

                            <Select.Popover>

                                <ListBox>

                                    <ListBox.Item id="5">
                                        ⭐⭐⭐⭐⭐ (5)
                                    </ListBox.Item>

                                    <ListBox.Item id="4">
                                        ⭐⭐⭐⭐ (4)
                                    </ListBox.Item>

                                    <ListBox.Item id="3">
                                        ⭐⭐⭐ (3)
                                    </ListBox.Item>

                                    <ListBox.Item id="2">
                                        ⭐⭐ (2)
                                    </ListBox.Item>

                                    <ListBox.Item id="1">
                                        ⭐ (1)
                                    </ListBox.Item>

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

            {/* Review List */}

            <div className="space-y-5">

                {

                    reviews.map((review) => (

                        <Card
                            key={review._id}
                            className="rounded-3xl border border-[#DCCCAC] bg-white shadow-none"
                        >

                            <Card.Content>

                                <div className="flex gap-4">

                                    <Avatar
                                        src={review.userImage}
                                        size="lg"
                                    />

                                    <div className="flex-1">

                                        <div className="flex flex-wrap items-center justify-between gap-3">

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

                                        <p className="mt-3 text-sm text-gray-400">

                                            {new Date(review.createdAt).toLocaleDateString()}

                                        </p>

                                    </div>

                                </div>

                            </Card.Content>

                        </Card>

                    ))

                }

            </div>

        </div>

    );

}
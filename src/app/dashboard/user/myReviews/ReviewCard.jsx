"use client";

import Link from "next/link";
import { useState } from "react";

import {
    Card,
    Button,
    TextArea,
} from "@heroui/react";

import {
    Pencil,
    TrashBin,
    Check,
    Xmark,
    StarFill,
} from "@gravity-ui/icons";

export default function ReviewCard({ review }) {

    const [editing, setEditing] = useState(false);

    const [rating, setRating] = useState(review.rating);

    const [comment, setComment] = useState(review.comment);

    const handleUpdate = async () => {

        // update review api

    };

    const handleDelete = async () => {

        // delete review api

    };

    return (

        <Card className="rounded-3xl border border-[#DCCCAC] bg-white shadow-sm">

            <Card.Header>

                <div className="flex w-full items-start justify-between">

                    <div>

                        <Card.Title className="text-xl font-bold text-[#2F3B26]">

                            {review.promptTitle}

                        </Card.Title>

                        <Card.Description>

                            {new Date(review.createdAt).toLocaleDateString("en-US")}

                        </Card.Description>

                    </div>

                    <span className="flex items-center gap-1 rounded-full bg-[#99AD7A]/20 px-4 py-1 text-[#546B41]">

                        <StarFill />

                        {rating}/5

                    </span>

                </div>

            </Card.Header>

            <Card.Content className="space-y-5">

                {

                    editing ? (

                        <>

                            <select
                                value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                className="w-full rounded-xl border border-[#DCCCAC] p-3 outline-none"
                            >

                                <option value={5}>⭐⭐⭐⭐⭐</option>

                                <option value={4}>⭐⭐⭐⭐</option>

                                <option value={3}>⭐⭐⭐</option>

                                <option value={2}>⭐⭐</option>

                                <option value={1}>⭐</option>

                            </select>

                            <TextArea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />

                        </>

                    ) : (

                        <>

                            <div className="text-yellow-500">

                                {"⭐".repeat(review.rating)}

                            </div>

                            <p className="leading-8 text-gray-600">

                                {review.comment}

                            </p>

                        </>

                    )

                }

            </Card.Content>

            <Card.Footer>

                <div className="flex flex-wrap gap-3">

                    {

                        editing ? (

                            <>

                                <Button
                                    onPress={handleUpdate}
                                    className="bg-[#546B41] text-white"
                                >

                                    <Check />

                                    Save

                                </Button>

                                <Button
                                    variant="bordered"
                                    onPress={() => setEditing(false)}
                                >

                                    <Xmark />

                                    Cancel

                                </Button>

                            </>

                        ) : (

                            <>

                                <Button
                                    variant="bordered"
                                    onPress={() => setEditing(true)}
                                >

                                    <Pencil />

                                    Edit

                                </Button>

                                <Button
                                    color="danger"
                                    variant="bordered"
                                    onPress={handleDelete}
                                >

                                    <TrashBin />

                                    Delete

                                </Button>

                                <Link
                                    href={`/allPrompts/${review.promptId}`}
                                    className="text-sm px-4 py-2 rounded-xl bg-[#546B41] text-white"
                                >

                                    View Prompt

                                </Link>

                            </>

                        )

                    }

                </div>

            </Card.Footer>

        </Card>

    );

}
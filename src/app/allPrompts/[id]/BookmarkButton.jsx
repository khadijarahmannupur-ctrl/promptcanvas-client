"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { HeartFill } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { addBookmark, removeBookmark } from "@/lib/actions/bookmarks";
import { checkBookmark } from "@/lib/api/bookmarkedPrompts";


export default function BookmarkButton({ prompt, user }) {
    const [bookmarked, setBookmarked] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user?.email || !prompt?._id) return;

        const loadBookmark = async () => {
            try {
                const data = await checkBookmark(
                    prompt._id,
                    user.email
                );

                setBookmarked(data.bookmarked);
            } catch (err) {
                console.log(err);
            }
        };

        loadBookmark();
    }, [prompt?._id, user?.email]);


    const handleBookmark = async () => {

    if (!user) {
        toast.error("Please login first.");
        return;
    }

    if (user.role !== "user") {
        toast.error("Only users can bookmark prompts.");
        return;
    }

    setLoading(true);

    try {

        if (bookmarked) {

            await removeBookmark(
                prompt._id,
                user.email
            );

            setBookmarked(false);

            toast.success("Bookmark removed.");

        } else {

            await addBookmark({

                promptId: prompt._id,

                promptTitle: prompt.title,
                promptThumbnail: prompt.thumbnail,
                promptCategory: prompt.category,
                promptTool: prompt.tool,
                promptVisibility: prompt.visibility,

                creatorName: prompt.creatorName,

                userEmail: user.email,
                userName: user.name,
                userImage: user.image,

            });

            setBookmarked(true);

            toast.success("Prompt bookmarked.");

        }

    } catch (err) {

        toast.error(err.message || "Something went wrong.");

    } finally {

        setLoading(false);

    }
};


    return (
        <Button
            onPress={handleBookmark}
            isLoading={loading}
            className={
                bookmarked
                    ? "bg-red-500 text-white"
                    : "bg-[#546B41] text-white"
            }
        >
            <HeartFill />
            {bookmarked ? "Bookmarked" : "Bookmark Prompt"}
        </Button>
    );
}
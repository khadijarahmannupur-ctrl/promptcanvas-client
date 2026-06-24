"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { HeartFill } from "@gravity-ui/icons";
import toast from "react-hot-toast";

export default function BookmarkButton({ prompt, user }) {
    const [bookmarked, setBookmarked] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user?.email || !prompt?._id) return;

        async function checkBookmark() {
            try {
                const res = await fetch(
                    `http://localhost:5000/api/bookmarks/check?promptId=${prompt._id}&userEmail=${user.email}`
                );

                const data = await res.json();

                setBookmarked(data.bookmarked);
            } catch (error) {
                console.error(error);
            }
        }

        checkBookmark();
    }, [prompt?._id, user?.email]);

    const handleBookmark = async () => {
        if (!user?.email) {
            toast.error("Please login first.");
            return;
        }

        setLoading(true);

        try {
            if (bookmarked) {
                const res = await fetch(
                    "http://localhost:5000/api/bookmarks",
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            promptId: prompt._id,
                            userEmail: user.email,
                        }),
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to remove bookmark");
                }

                setBookmarked(false);
                toast.success("Bookmark removed.");
            } else {
                const res = await fetch(
                    "http://localhost:5000/api/bookmarks",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
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

                            createdAt: new Date(),
                        }),
                    }
                );

                const data = await res.json();

                if (!res.ok) {
                    toast.error(data.message || "Failed to bookmark.");
                    return;
                }

                setBookmarked(true);
                toast.success("Prompt bookmarked.");
            }
        } catch (error) {
            toast.error(error.message);
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
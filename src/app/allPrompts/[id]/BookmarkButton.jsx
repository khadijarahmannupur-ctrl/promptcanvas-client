"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { HeartFill } from "@gravity-ui/icons";
import toast from "react-hot-toast";


export default function BookmarkButton({ promptId, user }) {

    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {

        if (!user?.email) return;

        fetch(`http://localhost:5000/api/bookmarks/check?promptId=${promptId}&userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => {

                setBookmarked(data.bookmarked);

            });

    }, [promptId, user]);



    const handleBookmark = async () => {

        if (!user?.email) {
            toast.error("Please login first");
            return;
        }

        if (bookmarked) {

            const res = await fetch("http://localhost:5000/api/bookmarks", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    promptId,
                    userEmail: user.email,
                }),
            });

            if (res.ok) {
                setBookmarked(false);
                toast.success("Bookmark removed");
            }

        } else {

            const res = await fetch("http://localhost:5000/api/bookmarks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    promptId,
                    userEmail: user.email,
                    userName: user.name,
                    userImage: user.image,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }

            setBookmarked(true);
            toast.success("Prompt bookmarked");
        }
    };


    return (

        <Button

            onPress={handleBookmark}

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
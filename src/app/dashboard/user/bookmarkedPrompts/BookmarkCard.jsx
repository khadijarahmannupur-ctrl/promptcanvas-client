"use client";

import { Card } from "@heroui/react";
import { HeartFill } from "@gravity-ui/icons";
import Link from "next/link";

export default function BookmarkCard({ bookmark }) {
    return (
        <Card className="rounded-3xl border border-[#DCCCAC] bg-white shadow-sm">

            <div className="flex gap-4 p-5">

                {/* Thumbnail */}
                <img
                    src={bookmark.promptThumbnail}
                    alt={bookmark.promptTitle}
                    className="h-24 w-24 rounded-xl object-cover"
                />

                {/* Content */}
                <div className="flex-1">

                    <div className="flex items-center justify-between">

                        <h2 className="text-lg font-semibold text-[#2F3B26]">
                            {bookmark.promptTitle}
                        </h2>

                        <span className="flex items-center gap-1 text-red-500 text-sm">
                            <HeartFill />
                            Saved
                        </span>

                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                        {bookmark.promptCategory} • {bookmark.promptTool}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                        By {bookmark.creatorName}
                    </p>

                    {/* Actions */}
                    <div className="mt-4 flex gap-3">

                        <Link
                            href={`/allPrompts/${bookmark.promptId}`}
                            className="text-sm px-4 py-2 rounded-xl bg-[#546B41] text-white"
                        >
                            View Prompt
                        </Link>

                    </div>

                </div>

            </div>

        </Card>
    );
}
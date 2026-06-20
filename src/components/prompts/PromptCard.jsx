import Link from "next/link";
import { Card, Chip, Button } from "@heroui/react";

import {
    Copy,
    PencilToSquare,
    Star,
    ArrowRight,
} from "@gravity-ui/icons";

export default function PromptCard({ prompt }) {
    if (!prompt) return null;

    const getStatusColor = (status) => {
        switch (status) {
            case "approved":
                return "success";
            case "pending":
                return "warning";
            case "rejected":
                return "danger";
            default:
                return "default";
        }
    };

    return (
        <Card className="group overflow-hidden rounded-3xl border border-[#DCCCAC] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* ================= Thumbnail ================= */}

            <div className="relative h-52 overflow-hidden">

                <img
                    src={prompt.thumbnail}
                    alt={prompt.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Status */}

                <Chip
                    color={getStatusColor(prompt.status)}
                    variant="solid"
                    size="sm"
                    className="absolute right-4 top-4 capitalize"
                >
                    {prompt.status}
                </Chip>

                {/* Visibility */}

                <Chip
                    variant="flat"
                    size="sm"
                    className={`absolute left-4 top-4 capitalize ${prompt.visibility === "public"
                            ? "bg-[#99AD7A]/90 text-white"
                            : "bg-[#2F3B26]/90 text-white"
                        }`}
                >
                    {prompt.visibility}
                </Chip>

            </div>

            {/* ================= Content ================= */}

            <div className="space-y-5 p-6">

                {/* Category + Tool */}

                <div className="flex flex-wrap gap-2">

                    <Chip
                        variant="flat"
                        className="bg-[#FFF8EC] text-[#546B41]"
                    >
                        {prompt.category}
                    </Chip>

                    <Chip
                        variant="flat"
                        className="bg-[#DCCCAC]/30 text-[#7A6048]"
                    >
                        {prompt.tool}
                    </Chip>

                    <Chip
                        variant="flat"
                        className="bg-[#EEF5E7] text-[#546B41]"
                    >
                        {prompt.difficulty}
                    </Chip>

                </div>

                {/* Title */}

                <div>

                    <h2 className="line-clamp-2 text-xl font-bold text-[#2F3B26]">
                        {prompt.title}
                    </h2>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
                        {prompt.description}
                    </p>

                </div>

                {/* Creator */}

                <div className="flex items-center gap-3 border-y border-[#EFE6D3] py-4">

                    <img
                        src={prompt.creatorImage}
                        alt={prompt.creatorName}
                        className="h-11 w-11 rounded-full border border-[#DCCCAC] object-cover"
                    />

                    <div className="flex-1">

                        <h4 className="font-semibold text-[#2F3B26]">
                            {prompt.creatorName}
                        </h4>

                        <p className="text-xs text-gray-500 capitalize">
                            {prompt.creatorRole}
                        </p>

                    </div>

                    <div className="flex items-center gap-1 rounded-full bg-[#FFF8EC] px-3 py-1">

                        <Star
                            width={14}
                            height={14}
                            className="text-amber-500"
                        />

                        <span className="text-sm font-semibold text-[#546B41]">
                            {prompt.copyCount}
                        </span>

                    </div>

                </div>

                {/* Footer */}

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                        <Link
                            href={`/dashboard/creator/myPrompts/update/${prompt._id}`}
                            variant="light"
                            className="text-[#546B41] hover:bg-[#99AD7A]/20"
                        >
                            <PencilToSquare />
                        </Link>

                        <Link href='/'
                            className="text-[#546B41] hover:bg-[#99AD7A]/20"
                        >
                            <Copy />
                        </Link>

                    </div>

                    <Link
                        href={`/allPrompts/${prompt._id}`}
                        className="rounded-xl bg-[#546B41] px-5 text-white hover:bg-[#445636]"
                    >
                        View
                        <ArrowRight width={16} height={16} />
                    </Link>

                </div>

            </div>

        </Card>
    );
}
import { getPromptById } from "@/lib/api/prompts";
import {
    Chip,
    Button,
    Avatar,
} from "@heroui/react";

import {
    Sparkles,
    Copy,
    Person,
    Calendar,
} from "@gravity-ui/icons";
import BookmarkButton from "./BookmarkButton";
import PromptReviews from "./PromptReviews";
import ReportPrompt from "./ReportPrompt";
import CopyPromptButton from "./CopyPromptButton";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function PromptDetailsPage({ params }) {

    const { id } = await params;
    const prompt = await getPromptById(id);
    const createdDate = new Date(prompt.createdAt).toLocaleDateString();

    const user = await getUserSession();
    if (!user) {
        redirect(`/auth/signin?redirect=/allPrompts/${id}`)
    }
    // console.log(user)
    // if (user.role !== 'user') {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-yellow-700">
    //             Only users can bookmark, copy, review, rate, and report prompts.
    //         </div>
    //     )
    // }

    const isPremiumLocked =
        prompt.visibility === "private" &&
        user.plan !== "premium";


    return (

        <div className="min-h-screen bg-[#FFF8EC] py-10">

            <div className="mx-auto max-w-6xl px-4">

                {/* ================= Hero ================= */}

                <div className="overflow-hidden rounded-3xl border border-[#DCCCAC] bg-white shadow-sm">

                    <img
                        src={prompt.thumbnail}
                        alt={prompt.title}
                        className="h-[260px] w-full object-cover md:h-[420px]"
                    />

                    <div className="p-8">

                        <div className="flex flex-wrap gap-3">

                            <Chip
                                variant="soft"
                                className="bg-[#99AD7A]/20 text-[#546B41]"
                            >
                                {prompt.category}
                            </Chip>

                            <Chip
                                variant="soft"
                                className="bg-[#99AD7A]/20 text-[#546B41]"
                            >
                                {prompt.tool}
                            </Chip>

                            <Chip
                                variant="soft"
                                className="bg-[#DCCCAC]/30 text-[#7A6048]"
                            >
                                {prompt.difficulty}
                            </Chip>

                        </div>

                        <h1 className="mt-5 text-4xl font-bold text-[#2F3B26]">

                            {prompt.title}

                        </h1>

                        <p className="mt-5 max-w-4xl leading-8 text-gray-600">

                            {prompt.description}

                        </p>

                    </div>

                </div>

                {/* ================= Content ================= */}

                <div className="mt-8 grid gap-8 lg:grid-cols-3">

                    {/* Left */}

                    <div className="space-y-8 lg:col-span-2">

                        {/* Prompt */}

                        <div className="rounded-3xl border border-[#DCCCAC] bg-white p-8">

                            <div className="mb-5 flex items-center gap-3">

                                <Sparkles className="text-[#546B41]" />

                                <h2 className="text-2xl font-bold text-[#2F3B26]">

                                    Prompt

                                </h2>

                            </div>

                            <div className="my-6 border-t border-[#DCCCAC]" />

                            <div className="relative">

                                <pre
                                    className={`whitespace-pre-wrap rounded-2xl bg-[#FFF8EC] p-6 text-sm leading-8 text-[#2F3B26] transition ${isPremiumLocked
                                        ? "select-none blur-md"
                                        : ""
                                        }`}
                                >
                                    {prompt.content}
                                </pre>

                                {isPremiumLocked && (

                                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white/40 backdrop-blur-[2px]">

                                        <h3 className="text-2xl font-bold text-[#2F3B26]">
                                            Premium Prompt
                                        </h3>

                                        <p className="mt-3 max-w-md text-center text-gray-600">
                                            This prompt is available only for Premium members.
                                            Upgrade your account to unlock this content.
                                        </p>

                                        <Link
                                            href="/payment"
                                            className="mt-6 rounded-xl bg-[#546B41] px-6 py-3 font-semibold text-white transition hover:bg-[#445634]"
                                        >
                                            Upgrade to Premium
                                        </Link>

                                    </div>

                                )}

                            </div>

                            {
                                !isPremiumLocked && (

                                    <div className="mt-6 flex flex-wrap gap-4">

                                        <CopyPromptButton
                                            promptId={prompt._id}
                                            content={prompt.content}
                                        />

                                        <BookmarkButton
                                            prompt={prompt}
                                            user={user}
                                        />

                                        <ReportPrompt
                                            prompt={prompt}
                                            user={user}
                                        />

                                    </div>

                                )
                            }

                        </div>

                        {/* prompt review */}
                        {
                            !isPremiumLocked && (
                                <PromptReviews
                                    prompt={prompt}
                                    user={user}
                                />
                            )
                        }

                    </div>

                    {/* Right */}

                    <div className="space-y-6">

                        {/* Creator */}

                        <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6">

                            <h3 className="mb-5 text-xl font-semibold text-[#2F3B26]">

                                Creator

                            </h3>

                            <div className="flex items-center gap-4">

                                <Avatar>
                                    <Avatar.Image src={prompt.creatorImage} />
                                    <Avatar.Fallback>{prompt.creatorName[0]}</Avatar.Fallback>
                                </Avatar>

                                <div>

                                    <h4 className="font-semibold text-[#2F3B26]">

                                        {prompt.creatorName}

                                    </h4>

                                    <p className="text-sm text-gray-500">

                                        {prompt.creatorRole}

                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Details */}

                        <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6">

                            <h3 className="mb-5 text-xl font-semibold text-[#2F3B26]">

                                Prompt Details

                            </h3>

                            <div className="space-y-5">

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Category
                                    </span>

                                    <span className="font-medium">
                                        {prompt.category}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        AI Tool
                                    </span>

                                    <span className="font-medium">
                                        {prompt.tool}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Difficulty
                                    </span>

                                    <span className="font-medium">
                                        {prompt.difficulty}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Visibility
                                    </span>

                                    <Chip
                                        size="sm"
                                        variant="soft"
                                    >
                                        {prompt.visibility}
                                    </Chip>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Status
                                    </span>

                                    <Chip
                                        color={
                                            prompt.status === "approved"
                                                ? "success"
                                                : prompt.status === "pending"
                                                    ? "warning"
                                                    : "danger"
                                        }
                                        variant="soft"
                                    >
                                        {prompt.status}
                                    </Chip>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Copies
                                    </span>

                                    <span className="font-semibold text-[#546B41]">

                                        {prompt.copyCount}

                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="flex items-center gap-2 text-gray-500">

                                        <Calendar />

                                        Created

                                    </span>

                                    <span>

                                        {createdDate}

                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Tags */}

                        <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6">

                            <h3 className="mb-4 text-xl font-semibold text-[#2F3B26]">

                                Tags

                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {prompt.tags
                                    ?.split(",")
                                    .map((tag, index) => (

                                        <Chip
                                            key={index}
                                            variant="flat"
                                            className="bg-[#99AD7A]/20 text-[#546B41]"
                                        >

                                            #{tag.trim()}

                                        </Chip>

                                    ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}
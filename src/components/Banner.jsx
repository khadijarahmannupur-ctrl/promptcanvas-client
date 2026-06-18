"use client";

import Link from "next/link";
import { Button, Chip, Input } from "@heroui/react";
// import { Icon } from "@gravity-ui/uikit";
import { Magnifier, Icon } from "@gravity-ui/icons";

export default function Banner() {
    const tags = [
        "ChatGPT",
        "Gemini",
        "Claude",
        "Midjourney",
        "React",
        "Marketing",
        "Writing",
    ];

    return (
        <section className="relative overflow-hidden bg-[#FFF8EC] flex items-center">
            {/* Background blobs */}
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#DCCCAC]/40 blur-3xl" />
            <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#99AD7A]/20 blur-3xl" />

            <div className="mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">

                {/* LEFT SIDE */}
                <div>

                    {/* Badge */}
                    <Chip className="border border-[#DCCCAC] bg-white text-[#546B41]">
                        🌿 Trusted by 12K+ AI Creators
                    </Chip>

                    {/* Heading */}
                    <h1 className="mt-6 text-5xl font-black leading-tight text-[#2F3B26] lg:text-7xl">
                        Create, Share &<br />
                        Discover AI Prompts
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-lg text-gray-600">
                        PromptCanvas is a calm creative workspace where you can explore,
                        bookmark, and publish high-quality AI prompts for ChatGPT, Gemini,
                        Claude and more.
                    </p>

                    {/* Search */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                        {/* <Input
                            size="lg"
                            radius="full"
                            placeholder="Search AI prompts..."
                            startContent={
                                <Icon data={Magnifier} className="text-[#546B41]" />
                            }
                            classNames={{
                                inputWrapper:
                                    "bg-white border border-[#DCCCAC] shadow-sm",
                            }}
                        /> */}

                        <Button
                            radius="full"
                            className="bg-[#546B41] px-8 text-white hover:bg-[#445636]"
                        >
                            Search
                        </Button>

                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Chip
                                key={tag}
                                className="cursor-pointer border border-[#DCCCAC] bg-white text-[#546B41] hover:bg-[#DCCCAC]"
                                variant="faded"
                            >
                                {tag}
                            </Chip>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button
                            as={Link}
                            href="/prompts"
                            radius="full"
                            className="bg-[#546B41] px-6 text-white hover:bg-[#445636]"
                        >
                            Explore Prompts
                        </Button>

                        <Button
                            as={Link}
                            href="/register"
                            radius="full"
                            variant="bordered"
                            className="border-[#546B41] text-[#546B41]"
                        >
                            Become a Creator
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex gap-10">

                        <div>
                            <h3 className="text-2xl font-bold text-[#546B41]">12K+</h3>
                            <p className="text-sm text-gray-500">Prompts</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#546B41]">3.5K+</h3>
                            <p className="text-sm text-gray-500">Creators</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[#546B41]">50K+</h3>
                            <p className="text-sm text-gray-500">Copies</p>
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="hidden lg:flex items-center justify-center relative">

                    {/* Glow background */}
                    <div className="absolute h-[400px] w-[400px] rounded-full bg-[#DCCCAC]/30 blur-3xl" />

                    {/* Main floating container */}
                    <div className="relative z-10 w-[520px] rounded-[40px] border border-[#DCCCAC] bg-white shadow-xl">

                        {/* Top bar */}
                        <div className="flex items-center gap-2 border-b border-[#DCCCAC] px-6 py-4">
                            <div className="h-3 w-3 rounded-full bg-red-300"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-300"></div>
                            <div className="h-3 w-3 rounded-full bg-green-300"></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 p-8">

                            {/* Card 1 */}
                            <div className="rounded-2xl bg-[#FFF8EC] p-5 shadow-sm">
                                <h3 className="font-semibold text-[#2F3B26]">
                                    ✨ Prompt of the Day
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    Build a modern SaaS landing page using Next.js, Tailwind CSS and clean UI principles.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="rounded-2xl border border-[#DCCCAC] p-5">
                                <p className="text-xs text-gray-500">AI Tool</p>
                                <h4 className="mt-1 font-bold text-[#546B41]">ChatGPT</h4>
                            </div>

                            {/* Card 3 */}
                            <div className="rounded-2xl border border-[#DCCCAC] p-5">
                                <p className="text-xs text-gray-500">Category</p>
                                <h4 className="mt-1 font-bold text-[#546B41]">Web Development</h4>
                            </div>

                            {/* Floating mini cards */}
                            <div className="absolute -right-10 top-20 rotate-6 rounded-xl border border-[#DCCCAC] bg-white p-3 shadow-md">
                                <p className="text-xs text-gray-500">Copied</p>
                                <p className="font-bold text-[#546B41]">1.2K+</p>
                            </div>

                            <div className="absolute -left-10 bottom-20 -rotate-6 rounded-xl border border-[#DCCCAC] bg-white p-3 shadow-md">
                                <p className="text-xs text-gray-500">Rating</p>
                                <p className="font-bold text-[#546B41]">4.9★</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
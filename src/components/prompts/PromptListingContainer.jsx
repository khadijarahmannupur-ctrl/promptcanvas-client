"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PromptCard from "./PromptCard";
import PromptFilters from "./PromptFilters";
import { Pagination } from "@heroui/react";
import Link from "next/link";

export default function PromptListingContainer({ promptsData, filters }) {
    const prompts = promptsData.data;
    const page = promptsData.page;
    const totalPages = promptsData.totalPage;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState(filters.search);
    const [selectedCategory, setSelectedCategory] = useState(filters.category);
    const [selectedTool, setSelectedTool] = useState(filters.tool);
    const [selectedDifficulty, setSelectedDifficulty] = useState(filters.difficulty);
    const [sortBy, setSortBy] = useState(filters.sort);

    // Filter change হলে router push করে
    useEffect(() => {
        const timer = setTimeout(() => {
            const params = new URLSearchParams();

            if (searchQuery) params.set("search", searchQuery);
            if (selectedCategory !== "all") params.set("category", selectedCategory);
            if (selectedTool !== "all") params.set("tool", selectedTool);
            if (selectedDifficulty !== "all") params.set("difficulty", selectedDifficulty);
            if (sortBy) params.set("sort", sortBy);

            // Filter change হলে page 1 এ ফিরে যাবে
            params.set("page", 1);

            router.push(`/allPrompts?${params.toString()}`);
        }, 500);

        return () => clearTimeout(timer);
    }, [router, searchQuery, selectedCategory, selectedTool, selectedDifficulty, sortBy]);

    // Pagination এ filter params ধরে রাখার জন্য
    const buildPageUrl = (p) => {
        const params = new URLSearchParams();
        params.set("page", p);
        if (searchQuery) params.set("search", searchQuery);
        if (selectedCategory !== "all") params.set("category", selectedCategory);
        if (selectedTool !== "all") params.set("tool", selectedTool);
        if (selectedDifficulty !== "all") params.set("difficulty", selectedDifficulty);
        if (sortBy) params.set("sort", sortBy);
        return `/allPrompts?${params.toString()}`;
    };

    return (
        <>
            <PromptFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedTool={selectedTool}
                setSelectedTool={setSelectedTool}
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            <div className="mt-8 mb-6">
                <p className="font-medium text-[#546B41]">
                    Showing {prompts.length} Prompt{prompts.length !== 1 && "s"}
                </p>
            </div>

            {prompts.length ? (
                <>
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-3">
                        {prompts.map((prompt) => (
                            <PromptCard key={prompt._id} prompt={prompt} />
                        ))}
                    </div>

                    <Pagination size="sm">
                        <Pagination.Content>

                            <Pagination.Item>
                                <Pagination.Previous
                                    isDisabled={page === 1}
                                    className="rounded-xl border border-[#DCCCAC] bg-white text-[#546B41] transition-all hover:border-[#99AD7A] hover:bg-[#99AD7A]/15 hover:text-[#2F3B26] disabled:opacity-50"
                                >
                                    <Link
                                        className="flex items-center gap-2 px-2"
                                        href={buildPageUrl(page - 1)}  // ✅ fixed
                                    >
                                        <Pagination.PreviousIcon />
                                        Prev
                                    </Link>
                                </Pagination.Previous>
                            </Pagination.Item>

                            {/* {pages.map((p) => (
                                <Pagination.Item key={p}>
                                    <Link href={buildPageUrl(p)}>
                                        <Pagination.Link
                                            isActive={p === page}
                                            className={`
                                                rounded-xl border bg-[#546B41] transition-all
                                                ${p === page
                                                    ? "border-[#99AD7A] bg-[#99AD7A] text-white shadow-md"
                                                    : "border-[#DCCCAC] bg-white text-[#546B41] hover:border-[#99AD7A] hover:bg-[#99AD7A]/15 hover:text-[#2F3B26]"
                                                }
                                            `}
                                        >
                                            {p}
                                        </Pagination.Link>
                                    </Link>
                                </Pagination.Item>
                            ))} */}

                            {pages.map((p) => (
                                <Pagination.Item key={p}>
                                    <Link
                                        href={buildPageUrl(p)}
                                        className={`
                rounded-xl border bg-[#546B41] px-3 py-1.5 text-sm transition-all
                ${p === page
                                                ? "border-[#99AD7A] bg-[#99AD7A] text-white shadow-md"
                                                : "border-[#DCCCAC] bg-white text-[#546B41] hover:border-[#99AD7A] hover:bg-[#99AD7A]/15 hover:text-[#2F3B26]"
                                            }
            `}
                                    >
                                        {p}
                                    </Link>
                                </Pagination.Item>
                            ))}

                            <Pagination.Item>
                                <Pagination.Next
                                    isDisabled={page === totalPages}
                                    className="rounded-xl border border-[#DCCCAC] bg-white text-[#546B41] transition-all hover:border-[#99AD7A] hover:bg-[#99AD7A]/15 hover:text-[#2F3B26] disabled:opacity-50"
                                >
                                    <Link
                                        className="flex items-center gap-2 px-2"
                                        href={buildPageUrl(page + 1)}  // ✅ fixed
                                    >
                                        Next
                                        <Pagination.NextIcon />
                                    </Link>
                                </Pagination.Next>
                            </Pagination.Item>

                        </Pagination.Content>
                    </Pagination>
                </>
            ) : (
                <div className="rounded-3xl border border-dashed border-[#DCCCAC] bg-white py-20 text-center">
                    <h2 className="text-2xl font-semibold text-[#546B41]">
                        No Prompt Found
                    </h2>
                </div>
            )}
        </>
    );
}
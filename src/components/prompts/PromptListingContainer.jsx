"use client";

import { useMemo, useState } from "react";
import PromptCard from "./PromptCard";
import PromptFilters from "./PromptFilters";

export default function PromptListingContainer({ initialPrompts }) {

    const [searchQuery, setSearchQuery] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [selectedTool, setSelectedTool] = useState("all");

    const [selectedDifficulty, setSelectedDifficulty] = useState("all");

    const [sortBy, setSortBy] = useState("newest");

    const filteredPrompts = useMemo(() => {

        let data = [...initialPrompts];

        data = data.filter((prompt) => {

            const search = searchQuery.toLowerCase();

            const matchesSearch =
                prompt.title?.toLowerCase().includes(search) ||
                prompt.description?.toLowerCase().includes(search) ||
                prompt.tags?.toLowerCase().includes(search) ||
                prompt.creatorName?.toLowerCase().includes(search);

            const matchesCategory =
                selectedCategory === "all" ||
                prompt.category === selectedCategory;

            const matchesTool =
                selectedTool === "all" ||
                prompt.tool === selectedTool;

            const matchesDifficulty =
                selectedDifficulty === "all" ||
                prompt.difficulty === selectedDifficulty;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesTool &&
                matchesDifficulty
            );

        });

        switch (sortBy) {

            case "copies":
                data.sort((a, b) => b.copyCount - a.copyCount);
                break;

            case "az":
                data.sort((a, b) => a.title.localeCompare(b.title));
                break;

            case "newest":
            default:
                data.sort(
                    (a, b) =>
                        new Date(b.createdAt) -
                        new Date(a.createdAt)
                );
        }

        return data;

    }, [
        searchQuery,
        selectedCategory,
        selectedTool,
        selectedDifficulty,
        sortBy,
        initialPrompts,
    ]);

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

                <p className="text-[#546B41] font-medium">

                    Showing {filteredPrompts.length} Prompt{filteredPrompts.length !== 1 && "s"}

                </p>

            </div>

            {

                filteredPrompts.length ?

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {

                            filteredPrompts.map(prompt => (

                                <PromptCard
                                    key={prompt._id}
                                    prompt={prompt}
                                />

                            ))

                        }

                    </div>

                    :

                    <div className="rounded-3xl border border-dashed border-[#DCCCAC] bg-white py-20 text-center">

                        <h2 className="text-2xl font-semibold text-[#546B41]">

                            No Prompt Found

                        </h2>

                    </div>

            }

        </>

    );

}
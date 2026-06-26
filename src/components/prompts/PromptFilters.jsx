"use client";

import {
    TextField,
    InputGroup,
    Select,
    ListBox,
} from "@heroui/react";

import {
    Magnifier,
    ChevronDown,
} from "@gravity-ui/icons";

export default function PromptFilters({
    searchQuery,
    setSearchQuery,

    selectedCategory,
    setSelectedCategory,

    selectedTool,
    setSelectedTool,

    selectedDifficulty,
    setSelectedDifficulty,

    sortBy,
    setSortBy,
}) {

    const triggerClass =
        "w-full flex items-center justify-between rounded-xl border border-[#DCCCAC] bg-white px-4 py-2.5 transition-all hover:border-[#99AD7A]";

    const popoverClass =
        "rounded-xl border border-[#DCCCAC] bg-white p-2 shadow-xl";

    const itemClass =
        "cursor-pointer rounded-lg px-3 py-2 hover:bg-[#FFF8EC]";

    return (

        <div className="mt-10 rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm">

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

                {/* Search */}

                <div className="lg:col-span-4">

                    <TextField>

                        <span className="mb-2 block text-sm font-medium text-[#2F3B26]">
                            Search Prompt
                        </span>

                        <InputGroup className="rounded-xl border border-[#DCCCAC] bg-[#FFF8EC]">

                            <InputGroup.Prefix className="pl-3 text-[#546B41]">
                                <Magnifier />
                            </InputGroup.Prefix>

                            <InputGroup.Input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Title, creator, tags..."
                                className="bg-transparent px-3 py-2.5 text-[#2F3B26]"
                            />

                        </InputGroup>

                    </TextField>

                </div>

                {/* Category */}

                <div className="lg:col-span-2">

                    <p className="mb-2 text-sm font-medium text-[#2F3B26]">
                        Category
                    </p>

                    <Select
                        selectedKey={selectedCategory}
                        onSelectionChange={(key) => setSelectedCategory(key)}
                    >

                        <Select.Trigger className={triggerClass}>

                            <Select.Value>
                                {selectedCategory === "all"
                                    ? "All Categories"
                                    : selectedCategory}
                            </Select.Value>

                            <Select.Indicator>
                                <ChevronDown />
                            </Select.Indicator>

                        </Select.Trigger>

                        <Select.Popover className={popoverClass}>

                            <ListBox>

                                <ListBox.Item id="all">All Categories</ListBox.Item>
                                <ListBox.Item id="Programming">Programming</ListBox.Item>
                                <ListBox.Item id="Writing">Writing</ListBox.Item>
                                <ListBox.Item id="Marketing">Marketing</ListBox.Item>
                                <ListBox.Item id="Education">Education</ListBox.Item>
                                <ListBox.Item id="Productivity">Productivity</ListBox.Item>

                            </ListBox>

                        </Select.Popover>

                    </Select>

                </div>

                {/* Tool */}

                <div className="lg:col-span-2">

                    <p className="mb-2 text-sm font-medium text-[#2F3B26]">
                        AI Tool
                    </p>

                    <Select
                        selectedKey={selectedTool}
                        onSelectionChange={(key) => setSelectedTool(key)}
                    >

                        <Select.Trigger className={triggerClass}>

                            <Select.Value>
                                {selectedTool === "all"
                                    ? "All Tools"
                                    : selectedTool}
                            </Select.Value>

                            <Select.Indicator>
                                <ChevronDown />
                            </Select.Indicator>

                        </Select.Trigger>

                        <Select.Popover className={popoverClass}>

                            <ListBox>

                                <ListBox.Item id="all">All Tools</ListBox.Item>
                                <ListBox.Item id="ChatGPT">ChatGPT</ListBox.Item>
                                <ListBox.Item id="Gemini">Gemini</ListBox.Item>
                                <ListBox.Item id="Claude">Claude</ListBox.Item>
                                <ListBox.Item id="DeepSeek">DeepSeek</ListBox.Item>
                                <ListBox.Item id="Midjourney">Midjourney</ListBox.Item>

                            </ListBox>

                        </Select.Popover>

                    </Select>

                </div>

                {/* Difficulty */}

                <div className="lg:col-span-2">

                    <p className="mb-2 text-sm font-medium text-[#2F3B26]">
                        Difficulty
                    </p>

                    <Select
                        selectedKey={selectedDifficulty}
                        onSelectionChange={(key) => setSelectedDifficulty(key)}
                    >

                        <Select.Trigger className={triggerClass}>

                            <Select.Value>
                                {selectedDifficulty === "all"
                                    ? "All Levels"
                                    : selectedDifficulty}
                            </Select.Value>

                            <Select.Indicator>
                                <ChevronDown />
                            </Select.Indicator>

                        </Select.Trigger>

                        <Select.Popover className={popoverClass}>

                            <ListBox>

                                <ListBox.Item id="all">All Levels</ListBox.Item>
                                <ListBox.Item id="Beginner">Beginner</ListBox.Item>
                                <ListBox.Item id="Intermediate">Intermediate</ListBox.Item>
                                <ListBox.Item id="Pro">Pro</ListBox.Item>

                            </ListBox>

                        </Select.Popover>

                    </Select>

                </div>

                {/* Sort */}

                <div className="lg:col-span-2">

                    <p className="mb-2 text-sm font-medium text-[#2F3B26]">
                        Sort By
                    </p>

                    <Select
                        selectedKey={sortBy}
                        onSelectionChange={(key) => setSortBy(key)}
                    >

                        <Select.Trigger className={triggerClass}>

                            <Select.Value>

                                {sortBy === "newest"
                                    ? "Newest"
                                    : sortBy === "copies"
                                        ? "Most Copied"
                                        : "A-Z"}

                            </Select.Value>

                            <Select.Indicator>
                                <ChevronDown />
                            </Select.Indicator>

                        </Select.Trigger>

                        <Select.Popover className={popoverClass}>

                            <ListBox>

                                <ListBox.Item id="newest">Newest</ListBox.Item>
                                <ListBox.Item id="copies">Most Copied</ListBox.Item>
                                <ListBox.Item id="az">A-Z</ListBox.Item>

                            </ListBox>

                        </Select.Popover>

                    </Select>

                </div>

            </div>

        </div>

    );

}
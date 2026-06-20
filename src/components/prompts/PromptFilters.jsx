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

                {/* ================= Search ================= */}

                <div className="lg:col-span-4">

                    <TextField
                        value={searchQuery}
                        onChange={(value) => setSearchQuery(value)}
                    >

                        <span className="mb-2 block text-sm font-medium text-[#2F3B26]">
                            Search Prompt
                        </span>

                        <InputGroup className="rounded-xl border border-[#DCCCAC] bg-[#FFF8EC]">

                            <InputGroup.Prefix className="pl-3 text-[#546B41]">

                                <Magnifier />

                            </InputGroup.Prefix>

                            <InputGroup.Input
                                placeholder="Title, creator, tags..."
                                className="bg-transparent px-3 py-2.5 text-[#2F3B26] placeholder:text-gray-400 outline-none"
                            />

                        </InputGroup>

                    </TextField>

                </div>

                {/* ================= Category ================= */}

                <div className="lg:col-span-2">

                    <p className="mb-2 text-sm font-medium text-[#2F3B26]">
                        Category
                    </p>

                    <Select
                        selectedKey={selectedCategory}
                        onSelectionChange={(key) =>
                            setSelectedCategory(key)
                        }
                    >

                        <Select.Trigger className={triggerClass}>

                            <Select.Value>
                                {selectedCategory === "all"
                                    ? "All"
                                    : selectedCategory}
                            </Select.Value>

                            <Select.Indicator>

                                <ChevronDown />

                            </Select.Indicator>

                        </Select.Trigger>

                        <Select.Popover className={popoverClass}>

                            <ListBox>

                                <ListBox.Item id="all" className={itemClass}>
                                    All Categories
                                </ListBox.Item>

                                <ListBox.Item id="Programming" className={itemClass}>
                                    Programming
                                </ListBox.Item>

                                <ListBox.Item id="Writing" className={itemClass}>
                                    Writing
                                </ListBox.Item>

                                <ListBox.Item id="Marketing" className={itemClass}>
                                    Marketing
                                </ListBox.Item>

                                <ListBox.Item id="Education" className={itemClass}>
                                    Education
                                </ListBox.Item>

                                <ListBox.Item id="Productivity" className={itemClass}>
                                    Productivity
                                </ListBox.Item>

                            </ListBox>

                        </Select.Popover>

                    </Select>

                </div>

                {/* ================= AI Tool ================= */}

                <div className="lg:col-span-2">

                    <p className="mb-2 text-sm font-medium text-[#2F3B26]">
                        AI Tool
                    </p>

                    <Select
                        selectedKey={selectedTool}
                        onSelectionChange={(key) =>
                            setSelectedTool(key)
                        }
                    >

                        <Select.Trigger className={triggerClass}>

                            <Select.Value>
                                {selectedTool === "all"
                                    ? "All"
                                    : selectedTool}
                            </Select.Value>

                            <Select.Indicator>

                                <ChevronDown />

                            </Select.Indicator>

                        </Select.Trigger>

                        <Select.Popover className={popoverClass}>

                            <ListBox>

                                <ListBox.Item id="all" className={itemClass}>
                                    All Tools
                                </ListBox.Item>

                                <ListBox.Item id="ChatGPT" className={itemClass}>
                                    ChatGPT
                                </ListBox.Item>

                                <ListBox.Item id="Gemini" className={itemClass}>
                                    Gemini
                                </ListBox.Item>

                                <ListBox.Item id="Claude" className={itemClass}>
                                    Claude
                                </ListBox.Item>

                                <ListBox.Item id="DeepSeek" className={itemClass}>
                                    DeepSeek
                                </ListBox.Item>

                                <ListBox.Item id="Midjourney" className={itemClass}>
                                    Midjourney
                                </ListBox.Item>

                            </ListBox>

                        </Select.Popover>

                    </Select>

                </div>

                {/* ================= Difficulty ================= */}

                <div className="lg:col-span-2">

                    <p className="mb-2 text-sm font-medium text-[#2F3B26]">
                        Difficulty
                    </p>

                    <Select
                        selectedKey={selectedDifficulty}
                        onSelectionChange={(key) =>
                            setSelectedDifficulty(key)
                        }
                    >

                        <Select.Trigger className={triggerClass}>

                            <Select.Value>
                                {selectedDifficulty === "all"
                                    ? "All"
                                    : selectedDifficulty}
                            </Select.Value>

                            <Select.Indicator>

                                <ChevronDown />

                            </Select.Indicator>

                        </Select.Trigger>

                        <Select.Popover className={popoverClass}>

                            <ListBox>

                                <ListBox.Item id="all" className={itemClass}>
                                    All Levels
                                </ListBox.Item>

                                <ListBox.Item id="Beginner" className={itemClass}>
                                    Beginner
                                </ListBox.Item>

                                <ListBox.Item id="Intermediate" className={itemClass}>
                                    Intermediate
                                </ListBox.Item>

                                <ListBox.Item id="Pro" className={itemClass}>
                                    Pro
                                </ListBox.Item>

                            </ListBox>

                        </Select.Popover>

                    </Select>

                </div>

                {/* ================= Sort ================= */}

                <div className="lg:col-span-2">

                    <p className="mb-2 text-sm font-medium text-[#2F3B26]">
                        Sort By
                    </p>

                    <Select
                        selectedKey={sortBy}
                        onSelectionChange={(key) =>
                            setSortBy(key)
                        }
                    >

                        <Select.Trigger className={triggerClass}>

                            <Select.Value>

                                {
                                    sortBy === "newest"
                                        ? "Newest"
                                        : sortBy === "copies"
                                            ? "Most Copied"
                                            : "A-Z"
                                }

                            </Select.Value>

                            <Select.Indicator>

                                <ChevronDown />

                            </Select.Indicator>

                        </Select.Trigger>

                        <Select.Popover className={popoverClass}>

                            <ListBox>

                                <ListBox.Item id="newest" className={itemClass}>
                                    Newest
                                </ListBox.Item>

                                <ListBox.Item id="copies" className={itemClass}>
                                    Most Copied
                                </ListBox.Item>

                                <ListBox.Item id="az" className={itemClass}>
                                    A-Z
                                </ListBox.Item>

                            </ListBox>

                        </Select.Popover>

                    </Select>

                </div>

            </div>

        </div>

    );

}
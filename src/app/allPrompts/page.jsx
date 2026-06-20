import PromptCard from "@/components/prompts/PromptCard";
import { getPrompts } from "@/lib/api/prompts";

export default async function AllPromptsPage() {
    const prompts = (await getPrompts()) || [];

    return (
        <div className="min-h-screen bg-[#FFF8EC]">

            <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">

                {/* ================= Hero ================= */}

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-8 shadow-sm">

                    <span className="inline-flex rounded-full bg-[#99AD7A]/20 px-4 py-2 text-sm font-medium text-[#546B41]">
                        🚀 AI Prompt Marketplace
                    </span>

                    <h1 className="mt-5 text-4xl font-bold text-[#2F3B26]">
                        Discover Powerful AI Prompts
                    </h1>

                    <p className="mt-3 max-w-3xl text-gray-600 leading-7">
                        Browse prompts created by talented creators and community
                        members. Find prompts for ChatGPT, Gemini, Claude,
                        Midjourney, DeepSeek and many more AI tools.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-5">

                        <div className="rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] px-6 py-5">

                            <p className="text-sm text-gray-500">
                                Total Prompts
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-[#546B41]">
                                {prompts.length}
                            </h2>

                        </div>

                        <div className="rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] px-6 py-5">

                            <p className="text-sm text-gray-500">
                                AI Tools
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-[#546B41]">
                                5+
                            </h2>

                        </div>

                        <div className="rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] px-6 py-5">

                            <p className="text-sm text-gray-500">
                                Categories
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-[#546B41]">
                                10+
                            </h2>

                        </div>

                    </div>

                </div>

                {/* ================= Section Title ================= */}

                <div className="mt-10 flex items-center justify-between">

                    <div>

                        <h2 className="text-3xl font-bold text-[#2F3B26]">
                            All Prompts
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Showing {prompts.length} prompts from our marketplace.
                        </p>

                    </div>

                </div>

                {/* ================= Prompt Grid ================= */}

                {
                    prompts.length === 0 ? (

                        <div className="mt-16 rounded-3xl border border-dashed border-[#DCCCAC] bg-white py-20 text-center">

                            <h3 className="text-2xl font-semibold text-[#546B41]">
                                No Prompt Found
                            </h3>

                            <p className="mt-3 text-gray-500">
                                There are currently no prompts available.
                            </p>

                        </div>

                    ) : (

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                            {prompts.map((prompt) => (
                                <PromptCard
                                    key={prompt._id}
                                    prompt={prompt}
                                />
                            ))}

                        </div>

                    )
                }

            </div>

        </div>
    );
}
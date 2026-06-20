import PromptCard from "@/components/prompts/PromptCard";
import { getFeaturedPrompts } from "@/lib/api/prompts";
import Link from "next/link";

export default async function FeaturedPromptsSection() {
    const prompts = await getFeaturedPrompts();

    return (
        <section className="py-20 bg-[#FFF8EC]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex items-center justify-between mb-10">
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full bg-[#99AD7A]/20 text-[#546B41] text-sm font-medium">
                            Featured Collection
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-[#2F3B26]">
                            Featured AI Prompts
                        </h2>

                        <p className="mt-3 text-gray-600 max-w-2xl">
                            Discover some of the highest quality prompts created by our community.
                        </p>
                    </div>

                    <Link
                        href="/allPrompts"
                        className="hidden md:inline-flex px-5 py-3 rounded-xl bg-[#546B41] text-white hover:bg-[#465838] transition"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {prompts.map((prompt) => (
                        <PromptCard
                            key={prompt._id}
                            prompt={prompt}
                        />
                    ))}
                </div>

                <div className="mt-10 flex justify-center md:hidden">
                    <Link
                        href="/allPrompts"
                        className="px-6 py-3 rounded-xl bg-[#546B41] text-white hover:bg-[#465838] transition"
                    >
                        View All Prompts
                    </Link>
                </div>

            </div>
        </section>
    );
}
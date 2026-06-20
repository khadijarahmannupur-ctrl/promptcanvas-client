import PromptListingContainer from "@/components/prompts/PromptListingContainer";
import { getPrompts } from "@/lib/api/prompts";

export default async function AllPromptsPage() {

    const prompts = (await getPrompts()) || [];

    return (
        <div className="min-h-screen bg-[#FFF8EC]">

            <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">

                {/* Hero Section */}

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-8 shadow-sm">

                    <span className="inline-flex rounded-full bg-[#99AD7A]/20 px-4 py-2 text-sm font-medium text-[#546B41]">
                        🚀 AI Prompt Marketplace
                    </span>

                    <h1 className="mt-5 text-4xl font-bold text-[#2F3B26]">
                        Discover Powerful AI Prompts
                    </h1>

                    <p className="mt-3 max-w-3xl text-gray-600">
                        Browse prompts created by talented creators and community members.
                    </p>

                </div>

                <PromptListingContainer initialPrompts={prompts} />

            </div>

        </div>
    );
}
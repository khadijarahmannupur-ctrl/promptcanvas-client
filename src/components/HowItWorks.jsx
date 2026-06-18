"use client";

export default function HowItWorks() {
    const steps = [
        {
            title: "Create Prompt",
            desc: "Write and publish your AI prompts with category, tags and AI tool selection.",
        },
        {
            title: "Discover Prompts",
            desc: "Explore trending, featured and community-driven prompts from other creators.",
        },
        {
            title: "Bookmark & Copy",
            desc: "Save your favorite prompts and copy them instantly with one click.",
        },
        {
            title: "Engage & Review",
            desc: "Rate, review and report prompts to improve content quality in the platform.",
        },
    ];

    return (
        <section className="bg-[#FFF8EC] border-t border-[#DCCCAC]">
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-[#2F3B26]">
                        How PromptCanvas Works
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Simple steps to create, explore and grow with AI prompts.
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-2xl border border-[#DCCCAC] bg-white p-6 shadow-sm transition hover:shadow-md"
                        >

                            {/* Step Number */}
                            <div className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#546B41] text-sm font-bold text-white">
                                {idx + 1}
                            </div>

                            {/* Content */}
                            <h3 className="mt-4 text-lg font-semibold text-[#2F3B26]">
                                {step.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600 leading-6">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
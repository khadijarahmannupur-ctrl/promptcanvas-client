"use client";

export default function PlatformHighlights() {
    const highlights = [
        {
            title: "Smart Prompt Library",
            desc: "Organized prompt collection with categories, tags and AI tool filtering.",
        },
        {
            title: "One Click Copy",
            desc: "Instantly copy any prompt and use it directly in ChatGPT, Gemini or Claude.",
        },
        {
            title: "Secure Authentication",
            desc: "JWT-based login system with role-based access control for users, creators and admins.",
        },
        {
            title: "Premium Unlock System",
            desc: "Unlock exclusive prompts with a simple Stripe payment integration.",
        },
        {
            title: "Advanced Search",
            desc: "Search prompts by title, tags, AI tools and filter with backend optimization.",
        },
        {
            title: "Creator Dashboard",
            desc: "Track prompts, copies, bookmarks and analytics in a clean dashboard UI.",
        },
    ];

    return (
        <section className="bg-[#FFF8EC] border-t border-[#DCCCAC]">
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-[#2F3B26]">
                        Platform Highlights
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Everything you need to create, manage and grow with AI prompts in one place.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-[#DCCCAC] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >

                            {/* Icon Circle */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCCCAC]/40 text-[#546B41] font-bold">
                                {String(idx + 1).padStart(2, "0")}
                            </div>

                            {/* Title */}
                            <h3 className="mt-4 text-lg font-semibold text-[#2F3B26]">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-sm text-gray-600 leading-6">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
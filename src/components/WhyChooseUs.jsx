"use client";

export default function WhyChooseUs() {
    const features = [
        {
            title: "High Quality Prompts",
            desc: "Curated AI prompts crafted by creators for real-world productivity and creativity.",
        },
        {
            title: "Bookmark & Organize",
            desc: "Save your favorite prompts and manage them easily in your personal dashboard.",
        },
        {
            title: "Community Driven",
            desc: "Explore trending prompts, reviews, and insights from global AI creators.",
        },
        {
            title: "Secure & Fast",
            desc: "JWT authentication, secure data handling and optimized performance.",
        },
        {
            title: "Creator Friendly",
            desc: "Publish prompts, grow audience and earn recognition in the community.",
        },
        {
            title: "Premium Access",
            desc: "Unlock exclusive prompts with one-time payment and upgrade experience.",
        },
    ];

    return (
        <section className="bg-[#FFF8EC] border-t border-[#DCCCAC]">
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-[#2F3B26]">
                        Why Choose PromptCanvas
                    </h2>
                    <p className="mt-4 text-gray-600">
                        A calm, creative AI prompt marketplace designed for creators,
                        developers and innovators.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-[#DCCCAC] bg-white p-6 shadow-sm transition hover:shadow-md"
                        >
                            <div className="h-10 w-10 rounded-xl bg-[#DCCCAC]/40 flex items-center justify-center text-[#546B41] font-bold">
                                {idx + 1}
                            </div>

                            <h3 className="mt-4 text-lg font-semibold text-[#2F3B26]">
                                {item.title}
                            </h3>

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
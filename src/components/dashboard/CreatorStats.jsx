import { Card } from "@heroui/react";
import {
    SquareChartBar,
    Copy,
    Bookmark,
} from "@gravity-ui/icons";

export default function CreatorStats() {
    const stats = [
        {
            title: "Total Prompts",
            value: 24,
            subtitle: "Published prompts",
            icon: SquareChartBar,
        },
        {
            title: "Total Copies",
            value: 1248,
            subtitle: "Copied by users",
            icon: Copy,
        },
        {
            title: "Total Bookmarks",
            value: 537,
            subtitle: "Saved by users",
            icon: Bookmark,
        },
    ];

    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 py-10 px-10">
            {stats.map((item) => (
                <Card
                    key={item.title}
                    className="border border-[#DCCCAC] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500">
                                {item.title}
                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-[#2F3B26]">
                                {item.value}
                            </h2>

                            <p className="mt-2 text-sm text-[#546B41]">
                                {item.subtitle}
                            </p>
                        </div>

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#99AD7A]/20">
                            <item.icon
                                className="text-[#546B41]"
                                width={32}
                                height={32}
                            />
                        </div>

                    </div>
                </Card>
            ))}
        </section>
    );
}
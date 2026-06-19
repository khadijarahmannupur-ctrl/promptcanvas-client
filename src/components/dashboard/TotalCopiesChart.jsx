"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        name: "ChatGPT",
        copies: 125,
    },
    {
        name: "Gemini",
        copies: 98,
    },
    {
        name: "Claude",
        copies: 73,
    },
    {
        name: "Midjourney",
        copies: 152,
    },
    {
        name: "DeepSeek",
        copies: 64,
    },
];

export default function TotalCopiesChart() {
    return (
        <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm mx-10">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#2F3B26]">
                    Total Copies
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Copies received by your top prompts.
                </p>
            </div>

            {/* Chart */}
            <div className="h-[350px] w-full">

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>

                        <CartesianGrid
                            stroke="#ECE4D5"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="name"
                            tick={{
                                fill: "#546B41",
                                fontSize: 13,
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{
                                fill: "#546B41",
                                fontSize: 13,
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            cursor={{
                                fill: "#FFF8EC",
                            }}
                            contentStyle={{
                                borderRadius: "14px",
                                border: "1px solid #DCCCAC",
                                background: "#FFFFFF",
                            }}
                        />

                        <Bar
                            dataKey="copies"
                            fill="#546B41"
                            radius={[8, 8, 0, 0]}
                        />

                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
}
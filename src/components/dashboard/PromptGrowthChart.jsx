"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    {
        month: "Jan",
        prompts: 2,
    },
    {
        month: "Feb",
        prompts: 5,
    },
    {
        month: "Mar",
        prompts: 8,
    },
    {
        month: "Apr",
        prompts: 12,
    },
    {
        month: "May",
        prompts: 15,
    },
    {
        month: "Jun",
        prompts: 19,
    },
];

export default function PromptGrowthChart() {
    return (
        <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm mx-10 my-10">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#2F3B26]">
                    Prompt Growth
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Monthly growth of prompts created.
                </p>
            </div>

            {/* Chart */}
            <div className="h-[350px] w-full">

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>

                        <CartesianGrid
                            stroke="#ECE4D5"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="month"
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
                            contentStyle={{
                                borderRadius: "14px",
                                border: "1px solid #DCCCAC",
                                background: "#FFFFFF",
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="prompts"
                            stroke="#546B41"
                            strokeWidth={4}
                            dot={{
                                fill: "#546B41",
                                stroke: "#FFF8EC",
                                strokeWidth: 3,
                                r: 6,
                            }}
                            activeDot={{
                                r: 8,
                                fill: "#99AD7A",
                            }}
                        />

                    </LineChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
}
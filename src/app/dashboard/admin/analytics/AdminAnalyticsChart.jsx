"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

export default function AdminAnalyticsChart({ analytics }) {
    const data = [
        {
            name: "Users",
            total: analytics.totalUsers,
        },
        {
            name: "Prompts",
            total: analytics.totalPrompts,
        },
        {
            name: "Reviews",
            total: analytics.totalReviews,
        },
        {
            name: "Copies",
            total: analytics.totalCopies,
        },
    ];

    return (
        <div className="rounded-3xl border border-[#E6D8BB] bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-[#2F3B26]">
                Platform Analytics
            </h2>

            <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="total"
                            fill="#546B41"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
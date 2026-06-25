// import { getAdminAnalytics } from "@/lib/api/admin";

import { getAdminAnalytics } from "@/lib/api/analytics";
import AdminAnalyticsChart from "./AdminAnalyticsChart";

const AdminAnalyticsPage = async () => {

    const analytics = await getAdminAnalytics();

    const cards = [
        {
            title: "Total Users",
            value: analytics.totalUsers,
        },
        {
            title: "Total Prompts",
            value: analytics.totalPrompts,
        },
        {
            title: "Total Reviews",
            value: analytics.totalReviews,
        },
        {
            title: "Total Copies",
            value: analytics.totalCopies,
        },
    ];

    return (
        <div className="space-y-8 mx-10 my-10">

            <div>
                <h1 className="text-3xl font-bold text-[#2F3B26]">
                    Analytics
                </h1>

                <p className="mt-2 text-gray-500">
                    Overview of your platform statistics.
                </p>
            </div>
 
          {/* summary card */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="rounded-3xl border border-[#E6D8BB] bg-white p-6 shadow-sm"
                    >
                        <p className="text-sm text-gray-500">
                            {card.title}
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-[#2F3B26]">
                            {card.value}
                        </h2>
                    </div>
                ))}

            </div>

            {/* chart */}
            <AdminAnalyticsChart analytics={analytics}></AdminAnalyticsChart>

        </div>
    );
};

export default AdminAnalyticsPage;
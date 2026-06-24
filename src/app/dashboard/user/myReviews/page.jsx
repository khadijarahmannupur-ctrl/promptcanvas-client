import { getAllReviewsByReviewer } from "@/lib/api/reviews";
import { getUserSession } from "@/lib/core/session";
import ReviewCard from "./ReviewCard";

export default async function MyReviewsPage() {

    const user = await getUserSession();

    const reviews = await getAllReviewsByReviewer(user.id);

    return (

        <div className="min-h-screen bg-[#FFF8EC] p-6">

            <div className="mx-auto max-w-5xl">

                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-[#2F3B26]">

                        My Reviews

                    </h1>

                    <p className="mt-2 text-gray-600">

                        Manage all of your submitted prompt reviews.

                    </p>

                </div>

                {

                    reviews.length === 0 ? (

                        <div className="rounded-3xl border border-dashed border-[#DCCCAC] bg-white p-14 text-center">

                            <h2 className="text-2xl font-bold text-[#2F3B26]">

                                No Reviews Yet

                            </h2>

                            <p className="mt-4 text-gray-500">

                                You have not reviewed any prompts yet.

                            </p>

                        </div>

                    ) : (

                        <div className="space-y-6">

                            {

                                reviews.map((review) => (

                                    <ReviewCard key={review._id} review={review} />

                                ))

                            }

                        </div>

                    )

                }

            </div>

        </div>

    );

}
import { getBookmarkedPrompts } from "@/lib/api/bookmarkedPrompts";
import { getUserSession } from "@/lib/core/session";
import BookmarkCard from "./BookmarkCard";

const AllBookmarkedPromptsPage = async () => {
    const user = await getUserSession();

    const allBookmarkedPrompts = await getBookmarkedPrompts(user.email);

    return (
        <div className="min-h-screen bg-[#FFF8EC] py-10">
            <div className="mx-auto max-w-5xl px-4">

                <h1 className="text-2xl font-bold text-[#2F3B26] mb-6">
                    My Bookmarked Prompts ({allBookmarkedPrompts.length})
                </h1>

                <div className="space-y-5">
                    {allBookmarkedPrompts.map((bookmark) => (
                        <BookmarkCard
                            key={bookmark._id}
                            bookmark={bookmark}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllBookmarkedPromptsPage;
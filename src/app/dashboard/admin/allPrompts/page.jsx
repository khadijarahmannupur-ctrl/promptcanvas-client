import { getPrompts } from "@/lib/api/prompts";
import AdminPromptTable from "./AdminPromptTable";

export default async function AdminAllPromptPage() {

    const prompts = await getPrompts();

    return (

        <div className="space-y-8 mx-10 my-10">

            <div>

                <h1 className="text-3xl font-bold text-[#2F3B26]">
                    All Prompts
                </h1>

                <p className="mt-2 text-gray-500">
                    Review, approve, reject, feature and manage all submitted prompts.
                </p>

            </div>

            <AdminPromptTable
                prompts={prompts}
            />

        </div>

    );
}
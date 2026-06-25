import { getReportedPrompts } from "@/lib/api/reports";
import ReportedPromptsTable from "./ReportedPromptsTable";
// import ReportedPromptsTable from "./ReportedPromptsTable";

const ReportedPromptsPage = async () => {
    const reportedPrompts = await getReportedPrompts();

    return (
        <div className="mx-10 my-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#2F3B26]">
                    Reported Prompts
                </h1>

                <p className="mt-2 text-gray-500">
                    Review reported prompts and take moderation actions.
                </p>
            </div>

            <ReportedPromptsTable
                reportedPrompts={reportedPrompts}
            />
        </div>
    );
};

export default ReportedPromptsPage;
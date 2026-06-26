import { getCreatorPrompts } from "@/lib/api/prompts";
import { getUserSession } from "@/lib/core/session";
import CreatorAllPromptsClient from "@/components/AddPrompts/CreatorAllPromptsClient";
import { updatePrompt } from "@/lib/actions/prompts";


export default async function UserAllPromptsPage() {

    const user = await getUserSession()

    const creatorId = user?.id;

    const prompts = await getCreatorPrompts(creatorId);

    return (
        <CreatorAllPromptsClient
            prompts={prompts || []}
        />
    );
}
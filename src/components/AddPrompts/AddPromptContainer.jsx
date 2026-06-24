"use client";

// import AddPromptPage from "@/components/prompts/AddPromptPage";
import { getCreatorPrompts } from "@/lib/api/prompts";
import { getPaymentById } from "@/lib/api/payment";
import { useEffect, useState } from "react";
import AddPromptPage from "./AddPromptPage";

export default function AddPromptContainer({ user }) {

    const [createdPrompt, setCreatedPrompt] = useState([]);
    const [plan, setPlan] = useState(null);

    useEffect(() => {
        async function load() {
            const prompts = await getCreatorPrompts(user.id);
            const planData = await getPaymentById(user.plan || "free");

            setCreatedPrompt(prompts);
            setPlan(planData);
        }

        load();
    }, [user]);

    if (!plan) return <div>Loading...</div>;

    const isPremium = user.plan === "premium";

    const promptCount = createdPrompt.length;

    const reachedLimit =
        !isPremium && promptCount >= plan.maxCreation;

    const percentage = !isPremium
        ? Math.min((promptCount / plan.maxCreation) * 100, 100)
        : 0;

    return (
        <AddPromptPage
            user={user}
            plan={plan}
            promptCount={promptCount}
            isPremium={isPremium}
            reachedLimit={reachedLimit}
            percentage={percentage}
        />
    );
}
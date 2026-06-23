import React from "react";
import AddPromptPage from "./AddPromptPage";
import { getCreatorPrompts } from "@/lib/api/prompts";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";
import {
    CircleInfo,
    Rocket,
} from "@gravity-ui/icons";
import { getPaymentById } from "@/lib/api/payment";

export const dynamic = "force-dynamic";

const AddPromptParentPage = async () => {

    const user = await getUserSession();

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center text-[#2F3B26]">
                Please login first
            </div>
        );
    }

    const createdPrompt = await getCreatorPrompts(user.id);

    const plan = await getPaymentById(user.plan || "free");

    const isPremium = user.plan === "premium";

    const promptCount = createdPrompt.length;

    // limit only for free users
    const reachedLimit = !isPremium && promptCount >= plan.maxCreation;

    const percentage = !isPremium
        ? Math.min((promptCount / plan.maxCreation) * 100, 100)
        : 0;

    return (
        <div className="min-h-screen bg-[#FFF8EC] py-10">
            <div className="mx-auto max-w-5xl px-4 space-y-8">

                {/* ================= Usage Card ================= */}
                {!isPremium && (
                    <div className="rounded-3xl border border-[#DCCCAC] bg-white p-8 shadow-sm">

                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                            <div>
                                <span className="text-sm font-medium text-[#7A6048]">
                                    Monthly Prompt Usage
                                </span>

                                <h2 className="mt-2 text-2xl font-bold text-[#2F3B26]">
                                    You created
                                    <span className="mx-2 text-[#546B41]">
                                        {promptCount}
                                    </span>
                                    of
                                    <span className="mx-2">
                                        {plan.maxCreation}
                                    </span>
                                    prompts
                                </h2>
                            </div>

                            <div className="rounded-full bg-[#99AD7A]/20 px-5 py-2 text-sm font-semibold text-[#546B41]">
                                {plan.name} Plan
                            </div>

                        </div>

                        {/* Progress */}
                        <div className="mt-8 h-3 overflow-hidden rounded-full bg-[#E8DFC8]">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ${reachedLimit
                                        ? "bg-red-500"
                                        : percentage > 70
                                            ? "bg-yellow-500"
                                            : "bg-[#546B41]"
                                    }`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>

                        {/* Upgrade Box */}
                        <div className="mt-6 rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-5">

                            <div className="flex gap-4">

                                <Rocket className="mt-1 text-[#546B41]" />

                                <div className="flex-1">

                                    <h3 className="font-semibold text-[#2F3B26]">
                                        Need More Prompt Slots?
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-gray-600">
                                        Upgrade to Premium and unlock unlimited prompt creation,
                                        private prompts, analytics, and creator features.
                                    </p>

                                    <Link
                                        href="/payment"
                                        className="mt-4 inline-flex rounded-xl bg-[#546B41] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#435635]"
                                    >
                                        Upgrade Now
                                    </Link>

                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* ================= FORM / LOCK ================= */}

                {reachedLimit ? (
                    <div className="rounded-3xl border border-dashed border-[#DCCCAC] bg-white p-12 text-center">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF8EC]">
                            <CircleInfo className="text-[#546B41]" />
                        </div>

                        <h2 className="mt-6 text-2xl font-bold text-[#2F3B26]">
                            Prompt Creation Limit Reached
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl leading-8 text-gray-600">
                            You have reached your free plan limit.
                            Upgrade to Premium to continue creating prompts.
                        </p>

                        <Link
                            href="/payment"
                            className="mt-8 inline-flex rounded-xl bg-[#546B41] px-6 py-3 font-semibold text-white transition hover:bg-[#435635]"
                        >
                            Upgrade to Premium
                        </Link>

                    </div>
                ) : (
                    <AddPromptPage user={user} />
                )}

            </div>
        </div>
    );
};

export default AddPromptParentPage;
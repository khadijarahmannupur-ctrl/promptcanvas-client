import React from "react";
import Link from "next/link";

import { CircleInfo, Rocket } from "@gravity-ui/icons";

import { getUserSession } from "@/lib/core/session";
import { getCreatorPrompts } from "@/lib/api/prompts";
import { getPaymentById } from "@/lib/api/payment";

import AddPromptContainer from "@/components/AddPrompts/AddPromptContainer";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const UserAddPromptPage = async () => {

    const user = await getUserSession();

    if (!user) {
        return (
            redirect('/auth/signin')
            // <div className="flex min-h-screen items-center justify-center">
            //     <p className="text-lg font-medium text-[#2F3B26]">
            //         Please login first.
            //     </p>
            // </div>
        );
    }

    const [createdPrompts, plan] = await Promise.all([
        getCreatorPrompts(user.id),
        getPaymentById(user.plan || "free"),
    ]);

    const isPremium = user.plan === "premium";

    const promptCount = createdPrompts.length;

    const reachedLimit =
        !isPremium && promptCount >= plan.maxCreation;

    const percentage = isPremium
        ? 0
        : Math.min((promptCount / plan.maxCreation) * 100, 100);

    return (

        <div className="min-h-screen bg-[#FFF8EC] py-10">

            <div className="mx-auto max-w-5xl space-y-8 px-4">

                {/* Free Plan Usage */}

                {!isPremium && (

                    <div className="rounded-3xl border border-[#DCCCAC] bg-white p-8 shadow-sm">

                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                            <div>

                                <p className="text-sm font-medium text-[#7A6048]">
                                    Monthly Prompt Usage
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-[#2F3B26]">

                                    You have created

                                    <span className="mx-2 text-[#546B41]">
                                        {promptCount}
                                    </span>

                                    out of

                                    <span className="mx-2">
                                        {plan.maxCreation}
                                    </span>

                                    prompts

                                </h2>

                            </div>

                            <div className="rounded-full bg-[#99AD7A]/20 px-5 py-2 font-semibold text-[#546B41]">

                                {plan.name} Plan

                            </div>

                        </div>

                        {/* Progress */}

                        <div className="mt-8 h-3 overflow-hidden rounded-full bg-[#E8DFC8]">

                            <div
                                className={`h-full rounded-full transition-all duration-500 ${reachedLimit
                                    ? "bg-red-500"
                                    : percentage >= 70
                                        ? "bg-yellow-500"
                                        : "bg-[#546B41]"
                                    }`}
                                style={{
                                    width: `${percentage}%`,
                                }}
                            />

                        </div>

                        {/* Upgrade */}

                        <div className="mt-7 rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-5">

                            <div className="flex gap-4">

                                <Rocket className="mt-1 shrink-0 text-[#546B41]" />

                                <div>

                                    <h3 className="font-semibold text-[#2F3B26]">

                                        Need More Prompt Slots?

                                    </h3>

                                    <p className="mt-2 leading-7 text-gray-600">

                                        Upgrade to Premium and enjoy unlimited
                                        prompt creation, private prompts,
                                        premium creator features and future
                                        updates.

                                    </p>

                                    <Link
                                        href="/payment"
                                        className="mt-5 inline-flex rounded-xl bg-[#546B41] px-5 py-2.5 font-semibold text-white transition hover:bg-[#435635]"
                                    >

                                        Upgrade Now

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                )}

                {/* Limit Reached */}

                {reachedLimit ? (

                    <div className="rounded-3xl border border-dashed border-[#DCCCAC] bg-white p-12 text-center">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF8EC]">

                            <CircleInfo className="text-[#546B41]" />

                        </div>

                        <h2 className="mt-6 text-3xl font-bold text-[#2F3B26]">

                            Prompt Limit Reached

                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">

                            You have already used all available prompt slots on
                            your Free plan. Upgrade to Premium to unlock
                            unlimited prompt publishing.

                        </p>

                        <Link
                            href="/payment"
                            className="mt-8 inline-flex rounded-xl bg-[#546B41] px-6 py-3 font-semibold text-white transition hover:bg-[#435635]"
                        >

                            Upgrade to Premium

                        </Link>

                    </div>

                ) : (

                    <AddPromptContainer user={user} />

                )}

            </div>

        </div>

    );

};

export default UserAddPromptPage;
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { CircleCheckFill, House } from "@gravity-ui/icons";
import { createSubscription } from "@/lib/actions/subscriptions";

export default async function Success({ searchParams }) {

    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error("Please provide a valid session_id.");
    }

    const {
        status,
        customer_details: { email: customerEmail },
        metadata,
        payment_intent,
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "payment_intent"],
    });

    if (status === "open") {
        return redirect("/");
    }

    if (status === "complete") {
        const subsInfo = {
            userId : metadata.userId,
            email : customerEmail,
            plan : metadata.plan,
        }
    const result = await createSubscription(subsInfo);
    console.log(result)    

        return (

            <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center px-4 py-10">

                <div className="w-full max-w-2xl rounded-3xl border border-[#DCCCAC] bg-white p-10 shadow-sm">

                    {/* Success Icon */}

                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#99AD7A]/20">

                        <CircleCheckFill className="h-14 w-14 text-[#546B41]" />

                    </div>

                    {/* Heading */}

                    <h1 className="mt-8 text-center text-4xl font-bold text-[#2F3B26]">

                        Payment Successful 🎉

                    </h1>

                    <p className="mt-4 text-center leading-7 text-gray-600">

                        Thank you for purchasing the <span className="font-semibold text-[#546B41]">Premium Plan</span>.

                        Your payment has been completed successfully and Premium
                        access is now available on your account.

                    </p>

                    {/* Info Card */}

                    <div className="mt-8 rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-6">

                        <div className="space-y-4">

                            <div className="flex justify-between">

                                <span className="text-gray-500">
                                    Customer Email
                                </span>

                                <span className="font-medium text-[#2F3B26]">
                                    {customerEmail}
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span className="text-gray-500">
                                    Payment Status
                                </span>

                                <span className="font-semibold text-green-600">
                                    Paid
                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span className="text-gray-500">
                                    Transaction ID
                                </span>

                                <span className="max-w-[220px] truncate font-medium text-[#2F3B26]">

                                    {payment_intent.id}

                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Premium Benefits */}

                    <div className="mt-8 rounded-2xl border border-[#DCCCAC] p-6">

                        <h3 className="text-xl font-semibold text-[#2F3B26]">

                            Premium Activated

                        </h3>

                        <ul className="mt-4 space-y-3 text-gray-600">

                            <li>✅ Access all private prompts</li>

                            <li>✅ Unlimited prompt copying</li>

                            <li>✅ Premium creator features</li>

                            <li>✅ Future premium updates</li>

                        </ul>

                    </div>

                    {/* Button */}

                    <div className="mt-10">

                        <Link
                            href="/"
                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#546B41] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#445634]"
                        >

                            <House />

                            Back to Home

                        </Link>

                    </div>

                </div>

            </div>

        );
    }
}
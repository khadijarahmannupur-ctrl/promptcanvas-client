import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import PaymentCard from "./PaymentCard";
// import PaymentCard from "@/components/payment/PaymentCard";

export default async function PaymentPage() {

    const user = await getUserSession();

    if (!user) {
        redirect("/auth/signin?redirect=/payment");
    }

    return (
        <div className="min-h-screen bg-[#FFF8EC] py-12 px-4">
            <div className="mx-auto max-w-5xl">

                <div className="mb-10 text-center">

                    <h1 className="text-4xl font-bold text-[#2F3B26]">
                        Upgrade to Premium
                    </h1>

                    <p className="mt-3 text-gray-600">
                        One-time payment. Lifetime Premium Access.
                    </p>

                </div>

                <PaymentCard user={user} />

            </div>
        </div>
    );
}
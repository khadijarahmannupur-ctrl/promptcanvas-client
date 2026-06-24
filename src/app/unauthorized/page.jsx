import Link from "next/link";
import { ShieldExclamation, ArrowLeft } from "@gravity-ui/icons";

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center px-4">

            <div className="w-full max-w-2xl rounded-3xl border border-[#DCCCAC] bg-white p-10 shadow-sm text-center">

                {/* Icon */}

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#99AD7A]/20">

                    <ShieldExclamation className="h-14 w-14 text-[#546B41]" />

                </div>

                {/* Heading */}

                <h1 className="mt-8 text-4xl font-bold text-[#2F3B26]">

                    Access Restricted

                </h1>

                <p className="mt-5 text-lg leading-8 text-gray-600">

                    Sorry! You do not have permission to access this page.

                </p>

                <p className="mt-3 leading-7 text-gray-500">

                    This feature is available only for authorized users.
                    If you believe this is a mistake, please sign in with
                    the correct account or contact support.

                </p>

                {/* Info Box */}

                <div className="mt-8 rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-5">

                    <p className="text-[#546B41] font-medium">

                        Examples:

                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-gray-600">

                        <li>• Users cannot access creator-only pages.</li>

                        <li>• Creators cannot use user-only features.</li>

                        <li>• Admin-only pages require administrator access.</li>

                    </ul>

                </div>

                {/* Buttons */}

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

                    <Link
                        href="/"
                        className="rounded-2xl bg-[#546B41] px-8 py-3 font-semibold text-white transition hover:bg-[#445634]"
                    >
                        Go to Home
                    </Link>

                    <Link
                        href="javascript:history.back()"
                        className="flex items-center justify-center gap-2 rounded-2xl border border-[#DCCCAC] px-8 py-3 font-semibold text-[#2F3B26] transition hover:bg-[#FFF8EC]"
                    >
                        <ArrowLeft />

                        Go Back
                    </Link>

                </div>

            </div>

        </div>
    );
}
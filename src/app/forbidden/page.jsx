import Link from "next/link";

export default function ForbiddenPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FFF8EC] px-6">

            <div className="max-w-xl text-center">

                <h1 className="text-8xl font-extrabold text-[#546B41]">
                    403
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-[#2F3B26]">
                    Access Forbidden
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                    Sorry, you don't have permission to access this page.
                    If you believe this is a mistake, please contact the administrator.
                </p>

                <div className="mt-10 flex justify-center gap-4">

                    <Link
                        href="/"
                        className="rounded-xl bg-[#546B41] px-6 py-3 font-medium text-white transition hover:bg-[#445636]"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/dashboard"
                        className="rounded-xl border border-[#DCCCAC] bg-white px-6 py-3 font-medium text-[#2F3B26] transition hover:bg-[#F8F2E6]"
                    >
                        Dashboard
                    </Link>

                </div>

            </div>

        </div>
    );
}
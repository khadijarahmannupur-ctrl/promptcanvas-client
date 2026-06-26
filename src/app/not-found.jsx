import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FFF8EC] px-6">
            <div className="max-w-2xl text-center">

                <h1 className="text-8xl font-extrabold text-[#546B41]">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-[#2F3B26]">
                    Oops! Page Not Found
                </h2>

                <p className="mt-4 text-gray-600">
                    The page you're looking for doesn't exist, may have been
                    moved, or the URL might be incorrect.
                </p>

                <div className="mt-10 flex justify-center gap-4">

                    <Link href="/">
                        <Button className="rounded-xl bg-[#546B41] px-6 py-3 text-white hover:bg-[#445636]">
                            Back to Home
                        </Button>
                    </Link>

                    <Link href="/allPrompts">
                        <Button
                            variant="bordered"
                            className="rounded-xl border-[#546B41] px-6 py-3 text-[#546B41] hover:bg-[#546B41]/10"
                        >
                            Browse Prompts
                        </Button>
                    </Link>

                </div>

            </div>
        </div>
    );
}
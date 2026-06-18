"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[#DCCCAC] bg-[#FFF8EC]">
            <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#546B41] font-bold text-white">
                                PC
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#2F3B26]">
                                    PromptCanvas
                                </h2>
                                <p className="text-xs text-gray-500">
                                    Create • Share • Discover
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 text-sm leading-7 text-gray-600">
                            PromptCanvas is a community-driven platform where creators can
                            share, discover and manage high-quality AI prompts for ChatGPT,
                            Gemini, Claude, Midjourney and more.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-[#2F3B26]">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>
                                <Link href="/prompts">All Prompts</Link>
                            </li>

                            <li>
                                <Link href="/dashboard">Dashboard</Link>
                            </li>

                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-[#2F3B26]">
                            Resources
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link href="#">Terms & Conditions</Link>
                            </li>

                            <li>
                                <Link href="#">Support</Link>
                            </li>

                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-[#2F3B26]">
                            Follow Us
                        </h3>

                        <div className="flex gap-3">
                            <Link
                                href="#"
                                className="rounded-xl border border-[#DCCCAC] p-3 transition hover:bg-[#DCCCAC]"
                            >
                                X
                            </Link>

                            <Link
                                href="#"
                                className="rounded-xl border border-[#DCCCAC] p-3 transition hover:bg-[#DCCCAC]"
                            >
                                in
                            </Link>

                            <Link
                                href="#"
                                className="rounded-xl border border-[#DCCCAC] p-3 transition hover:bg-[#DCCCAC]"
                            >
                                Git
                            </Link>
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#DCCCAC] bg-white p-4">
                            <h4 className="font-semibold text-[#2F3B26]">
                                Join our community
                            </h4>

                            <p className="mt-2 text-sm text-gray-600">
                                Explore premium prompts and grow with creators worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#DCCCAC] pt-6 text-sm text-gray-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} PromptCanvas. All rights reserved.
                    </p>

                    <p>
                        Crafted with ❤️ for AI Creators.
                    </p>
                </div>
            </div>
        </footer>
    );
}
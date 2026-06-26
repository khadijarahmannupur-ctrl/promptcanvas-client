'use client';

import Image from "next/image";

export default function TopCreators({ creators }) {

    return (

        <section className="container mx-auto px-5 py-20">

            <div className="text-center">

                <h2 className="text-4xl font-bold text-[#2F3B26]">
                    Top Creators
                </h2>

                <p className="mt-3 text-gray-500">
                    Meet our most popular prompt creators.
                </p>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {creators.map((creator) => (

                    <div
                        key={creator._id}
                        className="rounded-3xl border border-[#DCCCAC] bg-white p-4 shadow-sm text-center"
                    >

                        <img
                            src={creator.creatorImage}
                            alt={creator.creatorName}
                            width={80}
                            height={80}
                            className="mx-auto rounded-full"
                        />

                        <h3 className="mt-4 text-xl font-semibold">
                            {creator.creatorName}
                        </h3>

                        <p className="mt-2 text-gray-500">
                            {creator.totalPrompts} Prompts
                        </p>

                        <p className="text-[#546B41] font-semibold">
                            {creator.totalCopies} Copies
                        </p>

                    </div>

                ))}

            </div>

        </section>

    );
}
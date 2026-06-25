'use client';

import Image from 'next/image';
import { StarFill } from '@gravity-ui/icons';
import { motion } from 'framer-motion';

const CustomerReviews = ({ reviews }) => {

    return (

        <section className="container mx-auto px-5 py-20">

            <div className="text-center">

                <h2 className="text-4xl font-bold text-[#2F3B26]">
                    What Our Users Say
                </h2>

                <p className="mt-3 text-gray-500">
                    Thousands of creators trust PromptCanvas every day.
                </p>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {reviews.map((review, index) => (

                    <motion.div
                        key={review._id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: .4,
                            delay: index * .1
                        }}
                        className="rounded-3xl border border-[#E6D8BB] bg-white p-6 shadow-sm"
                    >

                        <div className="flex items-center gap-4">

                            <img
                                src={review.userImage}
                                alt={review.userName}
                                width={56}
                                height={56}
                                className="h-14 w-14 rounded-full object-cover"
                            />

                            <div>

                                <h4 className="font-semibold text-[#2F3B26]">
                                    {review.userName}
                                </h4>

                                <p className="text-xs text-gray-500">
                                    {review.promptTitle}
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 flex gap-1">

                            {Array.from({ length: review.rating }).map((_, i) => (

                                <StarFill
                                    key={i}
                                    className="h-4 w-4 text-yellow-500"
                                />

                            ))}

                        </div>

                        <p className="mt-4 leading-7 text-gray-600">

                            {review.comment}

                        </p>

                    </motion.div>

                ))}

            </div>

        </section>

    );

};

export default CustomerReviews;
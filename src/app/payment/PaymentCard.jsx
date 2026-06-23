"use client";

import { Card, Button, Chip } from "@heroui/react";
import {
    CrownDiamond,
    Shield,
    Sparkles,
    Check,
    Rocket
} from "@gravity-ui/icons";

export default function PaymentCard({ user }) {

    // async function handlePayment() {

    //     // Stripe Checkout এখানে হবে

    //     console.log(user);

    // }

    return (

        <div className="grid lg:grid-cols-2 gap-8">

            {/* Left */}

            <Card className="rounded-3xl border border-[#DCCCAC] bg-white shadow-none">

                <Card.Header>

                    <div>

                        <Chip className="bg-yellow-100 text-yellow-700">

                            Premium Plan

                        </Chip>

                        <Card.Title className="mt-4 text-3xl font-bold text-[#2F3B26]">

                            PromptCanvas Premium

                        </Card.Title>

                        <Card.Description className="mt-3 text-gray-500">

                            Unlock every premium prompt forever.

                        </Card.Description>

                    </div>

                </Card.Header>

                <Card.Content>

                    <div className="mt-5">

                        <span className="text-6xl font-bold text-[#546B41]">

                            $5

                        </span>

                        <span className="ml-2 text-gray-500">

                            One-Time Payment

                        </span>

                    </div>

                    <div className="mt-8 space-y-4">

                        <div className="flex items-center gap-3">

                            <Check className="text-green-600" />

                            <p>Access all Premium Prompts</p>

                        </div>

                        <div className="flex items-center gap-3">

                            <Check className="text-green-600" />

                            <p>No monthly subscription</p>

                        </div>

                        <div className="flex items-center gap-3">

                            <Check className="text-green-600" />

                            <p>Unlimited Prompt Access</p>

                        </div>

                        <div className="flex items-center gap-3">

                            <Check className="text-green-600" />

                            <p>Future Premium Prompts Included</p>

                        </div>

                    </div>

                </Card.Content>

                <Card.Footer>

                    <form action="/api/checkout_sessions" method="POST" className="w-full">
                        <button
                            type="submit"
                            className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#546B41] px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#445634] hover:shadow-lg hover:shadow-[#546B41]/20 active:scale-[0.98]"
                        >
                            <Rocket className="transition-transform duration-300 group-hover:translate-x-1" />

                            <span>Pay $5 & Unlock Premium</span>
                        </button>
                    </form>

                    {/* <Button
                        onPress={handlePayment}
                        
                    >

                        

                    </Button> */}

                </Card.Footer>

            </Card>

            {/* Right */}

            <div className="space-y-6">

                <Card className="rounded-3xl border border-[#DCCCAC] bg-white shadow-none">

                    <Card.Header>

                        <Card.Title>

                            Payment Summary

                        </Card.Title>

                    </Card.Header>

                    <Card.Content className="space-y-5">

                        <div className="flex justify-between">

                            <span>Plan</span>

                            <span>Premium</span>

                        </div>

                        <div className="flex justify-between">

                            <span>Amount</span>

                            <span>$5</span>

                        </div>

                        <div className="flex justify-between">

                            <span>Payment Type</span>

                            <span>One-Time</span>

                        </div>

                        <div className="flex justify-between font-bold text-[#546B41]">

                            <span>Total</span>

                            <span>$5</span>

                        </div>

                    </Card.Content>

                </Card>

                <Card className="rounded-3xl border border-[#DCCCAC] bg-white shadow-none">

                    <Card.Header>

                        <Card.Title>

                            Why Premium?

                        </Card.Title>

                    </Card.Header>

                    <Card.Content className="space-y-5">

                        <div className="flex gap-3">

                            <Sparkles className="text-[#546B41]" />

                            <p>
                                Unlock all private prompts instantly.
                            </p>

                        </div>

                        <div className="flex gap-3">

                            <Shield className="text-[#546B41]" />

                            <p>
                                Secure Stripe payment.
                            </p>

                        </div>

                        <div className="flex gap-3">

                            <CrownDiamond className="text-[#546B41]" />

                            <p>
                                Lifetime premium access.
                            </p>

                        </div>

                    </Card.Content>

                </Card>

            </div>

        </div>

    );
}
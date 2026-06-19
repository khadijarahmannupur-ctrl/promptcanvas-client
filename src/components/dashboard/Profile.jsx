import { Avatar, Button, Card } from "@heroui/react";

export default function Profile({ user, totalPrompts = 0 }) {
    const role = user?.role || "user";
    const subscription = user?.subscription || "free";

    return (
        <div className="min-h-screen bg-[#FFF8EC] p-4 md:p-6 lg:p-8">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#2F3B26]">
                        My Profile
                    </h1>
                    <p className="mt-1 text-gray-600">
                        Manage your account information and subscription.
                    </p>
                </div>

                {/* Profile Card */}
                <Card className="overflow-hidden border border-[#DCCCAC] bg-white shadow-lg">

                    {/* Cover */}
                    <div className="h-36 bg-gradient-to-r from-[#546B41] via-[#99AD7A] to-[#DCCCAC]" />

                    <div className="relative px-6 pb-6">

                        {/* Avatar */}
                        <div className="-mt-16 mb-4">
                            <Avatar className="h-28 w-28 border-4 border-white shadow-lg">
                                <Avatar.Image src={user?.image} />
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                        </div>

                        {/* Name */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-[#2F3B26]">
                                {user?.name}
                            </h2>

                            <p className="text-gray-500">
                                {user?.email}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid gap-4 md:grid-cols-3">

                            {/* Role */}
                            <div className="rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-5">
                                <p className="text-sm text-gray-500">
                                    Account Role
                                </p>

                                <h3 className="mt-2 text-xl font-semibold capitalize text-[#546B41]">
                                    {role}
                                </h3>
                            </div>

                            {/* Subscription */}
                            <div className="rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-5">
                                <p className="text-sm text-gray-500">
                                    Subscription
                                </p>

                                <h3 className="mt-2 text-xl font-semibold capitalize text-[#546B41]">
                                    {subscription}
                                </h3>
                            </div>

                            {/* Total Prompts */}
                            <div className="rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-5">
                                <p className="text-sm text-gray-500">
                                    Total Prompts
                                </p>

                                <h3 className="mt-2 text-xl font-semibold text-[#546B41]">
                                    {totalPrompts}
                                </h3>
                            </div>

                        </div>

                        {/* Account Information */}
                        <div className="mt-8 rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-6">
                            <h3 className="mb-5 text-lg font-semibold text-[#2F3B26]">
                                Account Information
                            </h3>

                            <div className="grid gap-5 md:grid-cols-2">

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Full Name
                                    </p>

                                    <p className="mt-1 font-medium text-[#2F3B26]">
                                        {user?.name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Email Address
                                    </p>

                                    <p className="mt-1 font-medium text-[#2F3B26]">
                                        {user?.email}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Role
                                    </p>

                                    <p className="mt-1 font-medium capitalize text-[#2F3B26]">
                                        {role}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Membership
                                    </p>

                                    <p className="mt-1 font-medium capitalize text-[#2F3B26]">
                                        {subscription}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Upgrade Section */}
                        {subscription === "free" && (
                            <div className="mt-8 rounded-2xl border border-[#99AD7A] bg-[#99AD7A]/10 p-6">

                                <h3 className="text-lg font-semibold text-[#2F3B26]">
                                    Unlock Premium Features 🚀
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Access all premium prompts, exclusive content, and advanced features.
                                </p>

                                <Button
                                    className="mt-4 bg-[#546B41] text-white hover:bg-[#445636]"
                                >
                                    Upgrade to Premium
                                </Button>

                            </div>
                        )}

                    </div>
                </Card>

            </div>
        </div>
    );
}
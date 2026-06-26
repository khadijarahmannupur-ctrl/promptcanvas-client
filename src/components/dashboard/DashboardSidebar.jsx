import { auth } from "@/lib/auth";
import {
    LayoutSideContentLeft,
    House,
    Person,
    SquarePlus,
    LayoutList,
    Bookmark,
    Star,
    Persons,
    ChartColumn,
    CircleExclamation,
    CreditCard,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";

export async function DashboardSidebar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    const role = user?.role || "user";

    const dashboardItems = {
        creator: [
            {
                icon: House,
                label: "Dashboard",
                href: "/dashboard/creator",
            },
            {
                icon: Person,
                label: "Profile",
                href: "/dashboard/creator/profile",
            },
            {
                icon: SquarePlus,
                label: "Add Prompt",
                href: "/dashboard/creator/myPrompts/addPrompt",
            },
            {
                icon: LayoutList,
                label: "My Prompts",
                href: "/dashboard/creator/myPrompts",
            },
        ],

        user: [
            {
                icon: Person,
                label: "Profile",
                href: "/dashboard/user",
            },
            {
                icon: SquarePlus,
                label: "Add Prompt",
                href: "/dashboard/user/myPrompts/addPrompt",
            },
            {
                icon: LayoutList,
                label: "My Prompts",
                href: "/dashboard/user/myPrompts",
            },
            {
                icon: Bookmark,
                label: "Saved Prompts",
                href: "/dashboard/user/bookmarkedPrompts",
            },
            {
                icon: Star,
                label: "My Reviews",
                href: "/dashboard/user/myReviews",
            },
        ],

        admin: [
            {
                icon: House,
                label: "Dashboard",
                href: "/dashboard/admin",
            },
            {
                icon: Persons,
                label: "All Users",
                href: "/dashboard/admin/allUsers",
            },
            {
                icon: LayoutList,
                label: "All Prompts",
                href: "/dashboard/admin/allPrompts",
            },
            {
                icon: CreditCard,
                label: "Payments",
                href: "/dashboard/admin/allPayments",
            },
            {
                icon: CircleExclamation,
                label: "Reports",
                href: "/dashboard/admin/reportedPrompts",
            },
            {
                icon: ChartColumn,
                label: "Analytics",
                href: "/dashboard/admin/analytics",
            },
        ],
    };

    const navItems = dashboardItems[role];

    const navContent = (
        <div className="space-y-2">

            <div className="mb-6">

                <h2 className="text-xl font-bold text-[#2F3B26]">
                    Dashboard
                </h2>

                <p className="text-sm text-[#546B41]">
                    Welcome back 👋
                </p>

            </div>

            <nav className="flex flex-col gap-2">

                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              px-4
              py-3
              text-[#546B41]
              transition-all
              duration-200
              hover:bg-[#99AD7A]/15
              hover:text-[#2F3B26]
              hover:translate-x-1
            "
                    >
                        <item.icon
                            className="
                h-5
                w-5
                shrink-0
                transition-colors
                group-hover:text-[#2F3B26]
              "
                        />

                        <span className="font-medium">
                            {item.label}
                        </span>
                    </Link>
                ))}

            </nav>

        </div>
    );

    return (
        <>
            {/* Desktop */}

            <aside
                className="
          hidden
          lg:flex
          w-72
          shrink-0
          min-h-screen
          bg-white
          border-r
          border-[#DCCCAC]
          px-5
          py-8
        "
            >
                {navContent}
            </aside>

            {/* Mobile */}

            <div className="sticky top-0 z-30 border-b border-[#DCCCAC] bg-white p-4 lg:hidden">

                <Drawer>

                    <Button
                        variant="outline"
                        className="
              rounded-xl
              border-[#99AD7A]
              text-[#2F3B26]
            "
                    >
                        <LayoutSideContentLeft className="h-5 w-5" />
                        Menu
                    </Button>

                    <Drawer.Backdrop>

                        <Drawer.Content placement="left">

                            <Drawer.Dialog className="w-72 bg-[#FFF8EC]">

                                <Drawer.CloseTrigger />

                                <Drawer.Header className="border-b border-[#DCCCAC]">

                                    <Drawer.Heading className="text-[#2F3B26]">
                                        Dashboard
                                    </Drawer.Heading>

                                </Drawer.Header>

                                <Drawer.Body className="py-6">

                                    {navContent}

                                </Drawer.Body>

                            </Drawer.Dialog>

                        </Drawer.Content>

                    </Drawer.Backdrop>

                </Drawer>

            </div>
        </>
    );
}
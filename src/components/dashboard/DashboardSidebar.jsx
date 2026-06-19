

import { auth } from "@/lib/auth";
import { LayoutSideContentLeft, Bell, Briefcase, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
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
            { icon: House, label: "Home", href: "/dashboard/creator" },
            { icon: Person, label: "Profile", href: "/dashboard/creator/profile" },
            { icon: House, label: "Add Prompt", href: "/dashboard/creator/addPrompt" },
            { icon: House, label: "My Prompts", href: "/dashboard/creator/myPrompts", },
        ],

        user: [
            { icon: Person, label: "Profile", href: "/dashboard/user" },
            { icon: House, label: "Add Prompt", href: "/dashboard/user/addPrompt" },
            { icon: House, label: "My Prompts", href: "/dashboard/user/myPrompts", },
            { icon: House, label: "Saved Prompts", href: "/dashboard/user/savedPrompt", },
            { icon: House, label: "My Reviews", href: "/dashboard/user/myReviews", },
        ],

        admin: [
            { icon: House, label: "Profile", href: "/dashboard/admin" },
            { icon: House, label: "All Users", href: "/dashboard/admin/allUsers" },
            { icon: House, label: "All Prompts", href: "/dashboard/admin/allPrompts", },
            { icon: House, label: "All Payments", href: "/dashboard/admin/allPayments", },
            { icon: House, label: "All Analytics", href: "/dashboard/admin/analytics", },
        ],
    };

    const navItems = dashboardItems[role];

    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                href={item.href}
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}
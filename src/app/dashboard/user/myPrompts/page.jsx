import { getCreatorPrompts } from "@/lib/api/prompts";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

import {
    Table,
    Chip,
    Button,
    Tooltip,
} from "@heroui/react";

import {
    PencilToSquare,
    TrashBin,
    ChartColumn,
} from "@gravity-ui/icons";

export default async function UserAllPromptsPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const creatorId = user.id;

    const prompts = (await getCreatorPrompts(creatorId)) || [];

    const totalPrompts = prompts.length;

    const publicPrompts = prompts.filter(
        (item) => item.visibility === "public"
    ).length;

    const privatePrompts = prompts.filter(
        (item) => item.visibility === "private"
    ).length;

    const pendingPrompts = prompts.filter(
        (item) => item.status === "pending"
    ).length;

    const getStatusColor = (status) => {
        switch (status) {
            case "approved":
                return "success";

            case "pending":
                return "warning";

            case "rejected":
                return "danger";

            default:
                return "default";
        }
    };

    return (
        <div className="space-y-8 mx-10 py-10">

            {/* ================= Header ================= */}

            <div>

                <h1 className="text-3xl font-bold text-[#2F3B26]">
                    My Prompts
                </h1>

                <p className="mt-2 text-gray-500">
                    Manage, update and monitor all prompts you've created.
                </p>

            </div>

            {/* ================= Summary Cards ================= */}

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm">

                    <p className="text-sm text-gray-500">
                        Total Prompts
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-[#546B41]">
                        {totalPrompts}
                    </h2>

                </div>

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm">

                    <p className="text-sm text-gray-500">
                        Public
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-[#546B41]">
                        {publicPrompts}
                    </h2>

                </div>

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm">

                    <p className="text-sm text-gray-500">
                        Private
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-[#546B41]">
                        {privatePrompts}
                    </h2>

                </div>

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm">

                    <p className="text-sm text-gray-500">
                        Pending Review
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-amber-600">
                        {pendingPrompts}
                    </h2>

                </div>

            </div>

            {/* ================= Table ================= */}

            <div className="overflow-hidden rounded-3xl border border-[#DCCCAC] bg-white shadow-sm">

                <div className="border-b border-[#DCCCAC] p-6">

                    <h2 className="text-xl font-semibold text-[#2F3B26]">
                        Prompt List
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Update, delete or view analytics for your prompts.
                    </p>

                </div>

                <Table
                    aria-label="Creator Prompt Table"
                >

                    <Table.ResizableContainer>

                        <Table.Content className="">

                            <Table.Header>

                                <Table.Column
                                    id="title"
                                    isRowHeader
                                    defaultWidth="2fr"
                                >
                                    Prompt
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="category"
                                    defaultWidth="1fr"
                                >
                                    Category
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="tool"
                                    defaultWidth="1fr"
                                >
                                    AI Tool
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="visibility"
                                    defaultWidth="1fr"
                                >
                                    Visibility
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="status"
                                    defaultWidth="1fr"
                                >
                                    Status
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="copies"
                                    defaultWidth="1fr"
                                >
                                    Copies
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="actions"
                                    defaultWidth="1.5fr"
                                >
                                    Actions
                                </Table.Column>

                            </Table.Header>

                            {/* =================== PART-2 START =================== */}
                            <Table.Body
                                emptyContent={
                                    <div className="py-16 text-center">
                                        <h3 className="text-xl font-semibold text-[#546B41]">
                                            No prompts found
                                        </h3>

                                        <p className="mt-2 text-sm text-gray-500">
                                            You have not created any prompts yet.
                                        </p>

                                        <Button
                                            as={Link}
                                            href="/dashboard/user/myPrompts/addPrompt"
                                            className="mt-6 bg-[#546B41] text-white hover:bg-[#455736]"
                                        >
                                            Create Your First Prompt
                                        </Button>
                                    </div>
                                }
                            >
                                {prompts.map((prompt) => (
                                    <Table.Row key={prompt._id}>
                                        {/* Prompt */}

                                        <Table.Cell>
                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={prompt.thumbnail}
                                                    alt={prompt.title}
                                                    className="h-16 w-16 rounded-2xl object-cover border border-[#DCCCAC]"
                                                />

                                                <div>

                                                    <h3 className="font-semibold text-[#2F3B26]">
                                                        {prompt.title}
                                                    </h3>

                                                    <p className="mt-1 text-xs text-gray-500">
                                                        {prompt.difficulty}
                                                    </p>

                                                </div>

                                            </div>
                                        </Table.Cell>

                                        {/* Category */}

                                        <Table.Cell>

                                            <span className="font-medium text-[#546B41]">
                                                {prompt.category}
                                            </span>

                                        </Table.Cell>

                                        {/* AI Tool */}

                                        <Table.Cell>

                                            <span className="text-gray-600">
                                                {prompt.tool}
                                            </span>

                                        </Table.Cell>

                                        {/* Visibility */}

                                        <Table.Cell>

                                            <Chip
                                                variant="soft"
                                                className={
                                                    prompt.visibility === "public"
                                                        ? "bg-[#99AD7A]/20 text-[#546B41]"
                                                        : "bg-[#DCCCAC]/30 text-[#7A6048]"
                                                }
                                            >
                                                {prompt.visibility}
                                            </Chip>

                                        </Table.Cell>

                                        {/* Status */}

                                        <Table.Cell>

                                            <Chip
                                                color={getStatusColor(prompt.status)}
                                                variant="soft"
                                            >
                                                {prompt.status}
                                            </Chip>

                                        </Table.Cell>

                                        {/* Copy Count */}

                                        <Table.Cell>

                                            <span className="font-semibold text-[#546B41]">
                                                {prompt.copyCount}
                                            </span>

                                        </Table.Cell>

                                        {/* Actions */}

                                        <Table.Cell>

                                            <div className="flex items-center gap-4">
                                                {/* Update */}

                                                <Tooltip content="Update Prompt">
                                                    <Link
                                                        href={`/dashboard/user/myPrompt/update/${prompt._id}`}

                                                        className="text-[#546B41] hover:bg-[#99AD7A]/20"
                                                    >
                                                        <PencilToSquare />
                                                    </Link>
                                                </Tooltip>

                                                {/* Analytics */}

                                                <Tooltip content="View Analytics">
                                                    <Link
                                                        href={`/dashboard/user/myPrompt/analytics/${prompt._id}`}

                                                        className="text-[#546B41] hover:bg-[#99AD7A]/20"
                                                    >
                                                        <ChartColumn />
                                                    </Link>
                                                </Tooltip>

                                                {/* Delete */}

                                                <Tooltip content="Delete Prompt">
                                                    <Button
                                                        isIconOnly
                                                        color="danger"
                                                        variant="light"
                                                    >
                                                        <TrashBin />
                                                    </Button>
                                                </Tooltip>

                                            </div>

                                        </Table.Cell>

                                    </Table.Row>
                                ))}
                            </Table.Body>

                        </Table.Content>

                    </Table.ResizableContainer>

                </Table>

            </div>

        </div>
    );
}

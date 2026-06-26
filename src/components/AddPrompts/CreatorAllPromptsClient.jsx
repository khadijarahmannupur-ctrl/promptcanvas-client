"use client";

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
import UpdatePromptModal from "./UpdatePromptModal";
import { useState } from "react";
import { updatePrompt } from "@/lib/actions/prompts";
import DeleteModal from "@/app/dashboard/admin/allPrompts/DeleteModal";

export default function CreatorAllPromptsClient({ prompts }) {

    const totalPrompts = prompts.length;

    const publicPrompts = prompts.filter(
        item => item.visibility === "public"
    ).length;

    const privatePrompts = prompts.filter(
        item => item.visibility === "private"
    ).length;

    const pendingPrompts = prompts.filter(
        item => item.status === "pending"
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

    const handleUpdatePrompt = async (id, data) => {
        const result = await updatePrompt(id, data);

        console.log(result);
    };

    return (
        <div className="space-y-8 mx-10 py-10">

            {/* Header */}

            <div>

                <h1 className="text-3xl font-bold text-[#2F3B26]">
                    My Prompts
                </h1>

                <p className="mt-2 text-gray-500">
                    Manage, update and monitor all prompts you have created.
                </p>

            </div>

            {/* Summary */}

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm">
                    <p className="text-sm text-gray-500">Total Prompts</p>
                    <h2 className="mt-2 text-4xl font-bold text-[#546B41]">
                        {totalPrompts}
                    </h2>
                </div>

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm">
                    <p className="text-sm text-gray-500">Public</p>
                    <h2 className="mt-2 text-4xl font-bold text-[#546B41]">
                        {publicPrompts}
                    </h2>
                </div>

                <div className="rounded-3xl border border-[#DCCCAC] bg-white p-6 shadow-sm">
                    <p className="text-sm text-gray-500">Private</p>
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

            {/* Table */}

            <div className="overflow-hidden rounded-3xl border border-[#DCCCAC] bg-white shadow-sm">

                <div className="border-b border-[#DCCCAC] p-6">

                    <h2 className="text-xl font-semibold text-[#2F3B26]">
                        Prompt List
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Update, delete or view analytics.
                    </p>

                </div>

                <Table aria-label="Creator Prompt Table">

                    <Table.ResizableContainer>

                        <Table.Content>

                            <Table.Header>

                                <Table.Column isRowHeader id="title" defaultWidth="2fr">
                                    Prompt
                                </Table.Column>

                                <Table.Column id="category">
                                    Category
                                </Table.Column>

                                <Table.Column id="tool">
                                    Tool
                                </Table.Column>

                                <Table.Column id="visibility">
                                    Visibility
                                </Table.Column>

                                <Table.Column id="status">
                                    Status
                                </Table.Column>

                                <Table.Column id="copies">
                                    Copies
                                </Table.Column>

                                <Table.Column id="actions">
                                    Actions
                                </Table.Column>

                            </Table.Header>

                            <Table.Body
                                emptyContent={
                                    <div className="py-16 text-center">

                                        <h3 className="text-xl font-semibold text-[#546B41]">
                                            No prompts found
                                        </h3>

                                        <Button
                                            as={Link}
                                            href="/dashboard/creator/myPrompts/addPrompt"
                                            className="mt-5 bg-[#546B41] text-white"
                                        >
                                            Create Prompt
                                        </Button>

                                    </div>
                                }
                            >

                                {prompts.map(prompt => (

                                    <Table.Row key={prompt._id}>

                                        <Table.Cell>

                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={prompt.thumbnail}
                                                    className="h-16 w-16 rounded-xl object-cover"
                                                />

                                                <div>

                                                    <h3 className="font-semibold">
                                                        {prompt.title}
                                                    </h3>

                                                    <p className="text-xs text-gray-500">
                                                        {prompt.difficulty}
                                                    </p>

                                                </div>

                                            </div>

                                        </Table.Cell>

                                        <Table.Cell>
                                            {prompt.category}
                                        </Table.Cell>

                                        <Table.Cell>
                                            {prompt.tool}
                                        </Table.Cell>

                                        <Table.Cell>

                                            <Chip
                                                variant="soft"
                                                className={
                                                    prompt.visibility === "public"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                }
                                            >
                                                {prompt.visibility}
                                            </Chip>

                                        </Table.Cell>

                                        <Table.Cell>

                                            <Chip
                                                color={getStatusColor(prompt.status)}
                                            >
                                                {prompt.status}
                                            </Chip>

                                        </Table.Cell>

                                        <Table.Cell>
                                            {prompt.copyCount}
                                        </Table.Cell>

                                        <Table.Cell>

                                            <div className="flex gap-3">

                                                <Tooltip content="Update">

                                                    <UpdatePromptModal
                                                        prompt={prompt}
                                                        onUpdate={handleUpdatePrompt}
                                                    />

                                                </Tooltip>

                                                <Tooltip content="Analytics">

                                                    <Link
                                                        href={`/allPrompts/${prompt._id}`}
                                                    >
                                                        <ChartColumn />
                                                    </Link>

                                                </Tooltip>

                                                <Tooltip content="Delete">

                                                    <DeleteModal
                                                        promptId={prompt._id}
                                                        promptTitle={prompt.title}
                                                        onDeleted={() => window.location.reload()}
                                                    />

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
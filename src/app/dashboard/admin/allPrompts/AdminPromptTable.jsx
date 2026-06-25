"use client";

import React from "react";
import Link from "next/link";

import {
    Table,
    Button,
} from "@heroui/react";

import {
    CircleArrowDownFill,
    Eye,
    TrashBin,
    Star,
} from "@gravity-ui/icons";
import { updatedPrompt } from "@/lib/actions/prompts";
import toast from "react-hot-toast";
import RejectModal from "./RejectModal";
import DeleteModal from "./DeleteModal";

// import { approvePrompt } from "@/lib/actions/prompts";
// import RejectModal from "./RejectModal";
// import DeleteModal from "./DeleteModal";

const AdminPromptTable = ({ prompts }) => {

    const handleApprove = async (id) => {

        const result = await updatedPrompt(id, { status: "approved", });

        if (result?.modifiedCount) {
            toast.success('Prompt Approved')
        }

    };

    const handleFeature = async (id) => {

        console.log("Feature:", id);

    };


    const handleDelete = (prompt) => {

        console.log(prompt);

        // Delete Modal Open

    };

    const formatDate = (dateString) => {

        if (!dateString) return "";

        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });

    };

    const getStatusDetails = (status) => {

        switch (status?.toLowerCase()) {

            case "approved":
                return {
                    color: "text-emerald-600",
                    label: "Approved",
                };

            case "rejected":
                return {
                    color: "text-red-500",
                    label: "Rejected",
                };

            default:
                return {
                    color: "text-amber-500",
                    label: "Pending",
                };

        }

    };

    return (

        <div className="w-full overflow-x-auto rounded-3xl border border-[#DCCCAC] bg-white shadow-sm">

            <Table className="bg-transparent">

                <Table.ScrollContainer>

                    <Table.Content aria-label="All prompts table">

                        <Table.Header>

                            <Table.Column
                                isRowHeader
                                className="border-b border-[#E6D8BB] bg-[#FFF8EC] py-4 text-[#7A6048]"
                            >
                                Prompt
                            </Table.Column>

                            {/* <Table.Column className="border-b border-[#E6D8BB] bg-[#FFF8EC] py-4 text-[#7A6048]">
                                Creator
                            </Table.Column> */}

                            {/* <Table.Column className="border-b border-[#E6D8BB] bg-[#FFF8EC] py-4 text-[#7A6048]">
                                Category
                            </Table.Column> */}

                            {/* <Table.Column className="border-b border-[#E6D8BB] bg-[#FFF8EC] py-4 text-[#7A6048]">
                                Visibility
                            </Table.Column> */}

                            <Table.Column className="border-b border-[#E6D8BB] bg-[#FFF8EC] py-4 text-[#7A6048]">
                                Status
                            </Table.Column>

                            {/* <Table.Column className="border-b border-[#E6D8BB] bg-[#FFF8EC] py-4 text-[#7A6048]">
                                Created
                            </Table.Column> */}

                            <Table.Column className="border-b border-[#E6D8BB] bg-[#FFF8EC] py-4 text-right text-[#7A6048]">
                                Actions
                            </Table.Column>

                        </Table.Header>

                        <Table.Body>

                            {prompts.map((prompt) => {

                                const promptId =
                                    prompt._id?.$oid || prompt._id;

                                const statusInfo =
                                    getStatusDetails(prompt.status);

                                return (

                                    <Table.Row
                                        key={promptId}
                                        className="border-b border-[#EFE5CF] hover:bg-[#FFFDF8] transition"
                                    >
                                        <Table.Cell className="py-4">

                                            <div className="flex items-center gap-3">

                                                <img
                                                    src={prompt.thumbnail}
                                                    alt={prompt.title}
                                                    className="h-14 w-20 rounded-lg object-cover border border-[#E6D8BB]"
                                                />

                                                <div className="min-w-0">

                                                    <h3 className="truncate font-semibold text-[#2F3B26]">
                                                        {prompt.title}
                                                    </h3>

                                                    <p className="mt-1 text-xs text-gray-500">
                                                        {prompt.tool}
                                                    </p>

                                                </div>

                                            </div>

                                        </Table.Cell>

                                        {/* Creator */}

                                        {/* <Table.Cell className="py-4">

                                            <div>

                                                <p className="font-medium text-[#2F3B26]">
                                                    {prompt.creatorName}
                                                </p>

                                                <p className="text-xs text-gray-500">
                                                    {prompt.creatorEmail}
                                                </p>

                                            </div>

                                        </Table.Cell> */}

                                        {/* Category */}
                                        {/* 
                                        <Table.Cell className="py-4">

                                            <span className="rounded-full bg-[#99AD7A]/20 px-3 py-1 text-xs font-medium text-[#546B41]">

                                                {prompt.category}

                                            </span>

                                        </Table.Cell> */}

                                        {/* Visibility */}

                                        {/* <Table.Cell className="py-4">

                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${prompt.visibility === "private"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-green-100 text-green-700"
                                                    }`}
                                            >

                                                {prompt.visibility}

                                            </span>

                                        </Table.Cell> */}

                                        {/* Status */}

                                        <Table.Cell className="py-4">

                                            <div className="flex items-center gap-2">

                                                <CircleArrowDownFill
                                                    className={`h-2 w-2 ${statusInfo.color}`}
                                                />

                                                <span
                                                    className={`text-sm font-medium ${statusInfo.color}`}
                                                >

                                                    {statusInfo.label}

                                                </span>

                                            </div>

                                        </Table.Cell>

                                        {/* Created */}

                                        {/* <Table.Cell className="py-4 text-sm text-gray-500">

                                            {formatDate(prompt.createdAt)}

                                        </Table.Cell> */}

                                        {/* Actions */}

                                        <Table.Cell className="py-4">

                                            <div className="flex justify-end gap-2">

                                                <Link href={`/allPrompts/${promptId}`}>

                                                    <Button
                                                        isIconOnly
                                                        size="sm"
                                                        variant="light"
                                                        className="border border-[#DCCCAC] text-[#546B41] hover:bg-[#FFF8EC]"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </Button>

                                                </Link>

                                                {prompt.status !== "approved" && (

                                                    <Button
                                                        size="sm"
                                                        variant="light"
                                                        onClick={() => handleApprove(promptId)}
                                                        className="border border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                                                    >
                                                        Approve
                                                    </Button>

                                                )}

                                                {prompt.status !== "rejected" && (

                                                    <RejectModal
                                                        promptId={promptId}
                                                        trigger={
                                                            <Button
                                                                size="sm"
                                                                variant="light"
                                                                className="border border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                                                            >
                                                                Reject
                                                            </Button>
                                                        }
                                                    />

                                                )}

                                                <Button
                                                    isIconOnly
                                                    size="sm"
                                                    variant="light"
                                                    onClick={() => handleFeature(promptId)}
                                                    className="border border-yellow-200 bg-yellow-50 text-yellow-600 hover:bg-yellow-100"
                                                >
                                                    <Star className="h-4 w-4" />
                                                </Button>

                                                <DeleteModal
                                                    promptId={promptId}
                                                    promptTitle={prompt.title}
                                                    onDeleted={() => window.location.reload()}
                                                />

                                            </div>

                                        </Table.Cell>

                                    </Table.Row>

                                );

                            })}

                        </Table.Body>

                    </Table.Content>

                </Table.ScrollContainer>

            </Table>

            {/* <RejectModal /> */}
            {/* <DeleteModal /> */}

        </div>

    );

};

export default AdminPromptTable;
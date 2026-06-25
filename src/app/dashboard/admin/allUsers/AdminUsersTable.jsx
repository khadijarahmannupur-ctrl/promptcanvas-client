"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

import {
    Table,
    Button,
    Chip,
} from "@heroui/react";

import {
    CrownDiamond,
    Person,
    TrashBin,
    ArrowsRotateRight,
    Briefcase,
} from "@gravity-ui/icons";
import { deleteUser, updateUserRole } from "@/lib/actions/users";
import DeleteUserModal from "./DeleteUserModal";


export default function AdminUsersTable({ users }) {

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const getRoleColor = (role) => {

        switch (role?.toLowerCase()) {

            case "admin":
                return "danger";

            case "creator":
                return "secondary";

            default:
                return "success";

        }

    };

    const formatDate = (date) => {

        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

    };

    const getInitials = (name) => {

        if (!name) return "U";

        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .substring(0, 2)
            .toUpperCase();

    };

    const handleRoleChange = async (userId, newRole) => {

        const result = await updateUserRole(userId, newRole);

    };

    const handleDelete = async (id) => {

        const result = await deleteUser(id);

        if (result.deletedCount) {
            toast.success("User deleted successfully");
            setDeleteModalOpen(false);
            setSelectedUser(null);
        }

    };

    return (

        <div className="w-full rounded-3xl border border-[#E6D8BB] bg-white shadow-sm overflow-hidden">

            <Table className="bg-transparent">

                <Table.ScrollContainer>

                    <Table.Content aria-label="Admin Users Table">

                        <Table.Header>

                            <Table.Column
                                isRowHeader
                                className=""
                            >
                                User
                            </Table.Column>

                            <Table.Column className="">
                                Role
                            </Table.Column>

                            <Table.Column className="">
                                Joined
                            </Table.Column>

                            <Table.Column
                                className="text-center"
                            >
                                Actions
                            </Table.Column>

                        </Table.Header>

                        <Table.Body>

                            {users.map((user) => (

                                <Table.Row key={user._id}>
                                    <Table.Cell>

                                        <div className="flex items-center gap-3 py-3">

                                            {user.image ? (

                                                <img
                                                    src={user.image}
                                                    alt={user.name}
                                                    className="h-12 w-12 rounded-full border border-[#E6D8BB] object-cover shrink-0"
                                                />

                                            ) : (

                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#546B41] text-sm font-semibold text-white shrink-0">
                                                    {getInitials(user.name)}
                                                </div>

                                            )}

                                            <div className="min-w-0">

                                                <h3 className="truncate font-semibold text-[#2F3B26]">
                                                    {user.name}
                                                </h3>

                                                <p className="truncate text-sm text-gray-500">
                                                    {user.email}
                                                </p>

                                            </div>

                                        </div>

                                    </Table.Cell>

                                    <Table.Cell>

                                        <Chip
                                            color={getRoleColor(user.role)}
                                            variant="soft"
                                        >
                                            {user.role}
                                        </Chip>

                                    </Table.Cell>

                                    <Table.Cell>

                                        <span className="text-sm text-gray-500">
                                            {formatDate(user.createdAt)}
                                        </span>

                                    </Table.Cell>

                                    <Table.Cell className="py-4 px-4">

                                        <div className="flex items-center justify-end gap-2">

                                            {/* Make Admin */}
                                            {user.role !== "admin" && (
                                                <button
                                                    onClick={() =>
                                                        handleRoleChange(user.id, "admin")
                                                    }
                                                    title="Make Admin"
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E6D8BB] bg-white text-red-500 transition hover:bg-red-50"
                                                >
                                                    <CrownDiamond className="h-4 w-4 text-yellow-600" />
                                                </button>
                                            )}

                                            {/* Make Creator */}
                                            {user.role !== "creator" && (
                                                <button
                                                    onClick={() =>
                                                        handleRoleChange(user.id, "creator")
                                                    }
                                                    title="Make Creator"
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E6D8BB] bg-white text-[#8B5CF6] transition hover:bg-purple-50"
                                                >
                                                    <Briefcase className="h-4 w-4" />
                                                </button>
                                            )}

                                            {/* Make User */}
                                            {user.role !== "user" && (
                                                <button
                                                    onClick={() =>
                                                        handleRoleChange(user.id, "user")
                                                    }
                                                    title="Make User"
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E6D8BB] bg-white text-[#546B41] transition hover:bg-[#FFF8EC]"
                                                >
                                                    <Person className="h-4 w-4" />
                                                </button>
                                            )}

                                            {/* Delete */}
                                            <button
                                                onClick={() => {
                                                    setSelectedUser(user);
                                                    setDeleteModalOpen(true);
                                                }}
                                                title="Delete User"
                                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 bg-white text-red-500 transition hover:bg-red-50"
                                            >
                                                <TrashBin className="h-4 w-4" />
                                            </button>

                                        </div>

                                    </Table.Cell>

                                </Table.Row>

                            ))}

                        </Table.Body>

                    </Table.Content>

                </Table.ScrollContainer>

            </Table>

            <DeleteUserModal
                open={deleteModalOpen}
                user={selectedUser}
                onClose={() => {
                    setDeleteModalOpen(false);
                    setSelectedUser(null);
                }}
                onConfirm={handleDelete}
            />

        </div>

    );

}

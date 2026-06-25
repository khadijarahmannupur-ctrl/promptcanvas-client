'use client';

import React from 'react';

const DeleteUserModal = ({
    open,
    user,
    onClose,
    onConfirm,
    loading = false,
}) => {

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

            <div className="w-full max-w-md rounded-2xl border border-[#E6D8BB] bg-white shadow-2xl">

                {/* Header */}
                <div className="border-b border-[#F3E9D2] px-6 py-5">

                    <h2 className="text-xl font-bold text-[#2F3B26]">
                        Delete User
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        This action cannot be undone.
                    </p>

                </div>

                {/* Body */}
                <div className="px-6 py-6">

                    <p className="text-gray-600 leading-7">
                        Are you sure you want to permanently delete
                        <span className="font-semibold text-[#2F3B26]">
                            {" "} {user?.name}{" "}
                        </span>
                        from PromptCanvas?
                    </p>

                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-[#F3E9D2] px-6 py-5">

                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="rounded-xl border border-[#E6D8BB] px-5 py-2.5 text-[#546B41] transition hover:bg-[#FFF8EC] disabled:opacity-50"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => onConfirm(user.id)}
                        disabled={loading}
                        className="rounded-xl bg-red-500 px-5 py-2.5 font-medium text-white transition hover:bg-red-600 disabled:opacity-50"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>

                </div>

            </div>

        </div>

    );

};

export default DeleteUserModal;
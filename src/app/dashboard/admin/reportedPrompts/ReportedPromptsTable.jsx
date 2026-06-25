'use client';

import React from 'react';
import Link from 'next/link';
import { TrashBin, TriangleExclamation, CircleCheckFill } from '@gravity-ui/icons';
import DeleteReportModal from './DeleteReportModal';
import { dismissReport, removeReportedPrompt } from '@/lib/actions/reports';
import toast from 'react-hot-toast';
import WarnCreatorModal from './WarnCreatorModal';

const ReportedPromptsTable = ({ reportedPrompts }) => {

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    };

    const handleRemovePrompt = async (id) => {

        const result = await removeReportedPrompt(id);
        console.log(result)

        if (result.deletedCount) {
            toast.success("Prompt removed successfully");
        }

    };

    const handleDismiss = async (id) => {
        const result = await dismissReport(id);

        if (result.deletedCount) {
            toast.success("Report dismissed successfully");
        } else {
            toast.error("Failed to dismiss report");
        }
    };

    const handleWarn = async (id, message) => {

        console.log("Warning:", message);

        const result = await dismissReport(id);

        if (result.deletedCount) {
            toast.success("Warning sent successfully");
        }

    };



    return (

        <div className="overflow-hidden rounded-2xl border border-[#E6D8BB] bg-white">

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="border-b border-[#F1E8D6] bg-[#FFFDF8]">

                        <tr>

                            <th className="px-6 py-5 text-left text-sm font-semibold text-[#546B41]">
                                Prompt
                            </th>

                            <th className="px-6 py-5 text-left text-sm font-semibold text-[#546B41]">
                                Reason
                            </th>

                            <th className="px-6 py-5 text-left text-sm font-semibold text-[#546B41]">
                                Description
                            </th>

                            <th className="px-6 py-5 text-right text-sm font-semibold text-[#546B41]">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {reportedPrompts.map((report) => (

                            <tr
                                key={report._id}
                                className="border-b border-[#F6F0E3] transition hover:bg-[#FFFCF7]"
                            >

                                {/* Prompt */}

                                <td className="px-6 py-5">

                                    <div className="min-w-[220px]">

                                        <h3 className="font-semibold text-[#2F3B26]">
                                            {report.promptTitle}
                                        </h3>

                                        <p className="mt-1 text-xs text-gray-500">
                                            Reported on {formatDate(report.createdAt)}
                                        </p>

                                    </div>

                                </td>

                                {/* Reason */}

                                <td className="px-6 py-5">

                                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                                        {report.reason}
                                    </span>

                                </td>

                                {/* Description */}

                                <td className="px-6 py-5">

                                    <p className="max-w-sm truncate text-sm text-gray-500">
                                        {report.description || 'No description'}
                                    </p>

                                </td>

                                {/* Actions */}

                                <td className="px-6 py-5">

                                    <div className="flex justify-end gap-2">

                                        <WarnCreatorModal
                                            onWarn={(message) => handleWarn(report._id, message)}
                                        />

                                        <button
                                            onClick={() => handleDismiss(report._id)}
                                            title="Dismiss"
                                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600 transition hover:bg-emerald-100"
                                        >
                                            <CircleCheckFill className="h-5 w-5" />
                                        </button>

                                        <DeleteReportModal
                                            onDelete={() => handleRemovePrompt(report._id)}
                                        />

                                    </div>

                                </td>

                            </tr>

                        ))}

                        {reportedPrompts.length === 0 && (

                            <tr>

                                <td
                                    colSpan={4}
                                    className="py-16 text-center text-gray-500"
                                >
                                    No reported prompts found.
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default ReportedPromptsTable;
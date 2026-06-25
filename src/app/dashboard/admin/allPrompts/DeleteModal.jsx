"use client";

import { AlertDialog, Button } from "@heroui/react";
import { TrashBin } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { deletePrompt } from "@/lib/actions/prompts";

const DeleteModal = ({ promptId, promptTitle, onDeleted }) => {

    const handleDelete = async () => {

        const result = await deletePrompt(promptId);

        if (result?.deletedCount) {

            toast.success("Prompt deleted successfully");

            if (onDeleted) {
                onDeleted();
            }

        } else {

            toast.error("Failed to delete prompt");

        }

    };

    return (

        <AlertDialog>

            <Button
                size="sm"
                variant="light"
                className="border border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
            >
                <TrashBin className="h-4 w-4" />
            </Button>

            <AlertDialog.Backdrop className="bg-black/40 backdrop-blur-sm">

                <AlertDialog.Container>

                    <AlertDialog.Dialog className="w-full max-w-md rounded-3xl border border-[#DCCCAC] bg-white">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>

                            <AlertDialog.Icon
                                status="danger"
                                className="bg-red-100 text-red-600"
                            >
                                <TrashBin className="size-5" />
                            </AlertDialog.Icon>

                            <AlertDialog.Heading className="text-2xl font-bold text-[#2F3B26]">

                                Delete Prompt?

                            </AlertDialog.Heading>

                        </AlertDialog.Header>

                        <AlertDialog.Body>

                            <p className="leading-7 text-gray-600">

                                Are you sure you want to permanently delete

                                <span className="font-semibold text-[#2F3B26]">
                                    {" "}
                                    {promptTitle}
                                </span>

                                ?

                            </p>

                            <p className="mt-3 text-sm text-red-500">

                                This action cannot be undone.

                            </p>

                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="tertiary"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                onPress={handleDelete}
                                className="bg-red-600 text-white hover:bg-red-700"
                            >
                                Delete Prompt
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>

            </AlertDialog.Backdrop>

        </AlertDialog>

    );

};

export default DeleteModal;
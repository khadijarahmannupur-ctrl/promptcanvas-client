'use client';

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

const DeleteReportModal = ({
    onDelete,
    isDeleting = false,
}) => {

    return (
        <AlertDialog>

            <AlertDialog.Trigger>
                <button
                    title="Remove Prompt"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100"
                >
                    <TrashBin className="h-5 w-5" />
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop>

                <AlertDialog.Container>

                    <AlertDialog.Dialog className="sm:max-w-[420px] rounded-2xl">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>

                            <AlertDialog.Icon status="danger" />

                            <AlertDialog.Heading>
                                Remove Prompt?
                            </AlertDialog.Heading>

                        </AlertDialog.Header>

                        <AlertDialog.Body>

                            <p className="text-sm text-gray-600 leading-6">
                                This will permanently remove the reported prompt from
                                the marketplace and also clear this report.
                            </p>

                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="light"
                            >
                                Cancel
                            </Button>

                            <Button
                                color="danger"
                                isLoading={isDeleting}
                                onPress={onDelete}
                                slot="close"
                            >
                                Remove
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>

            </AlertDialog.Backdrop>

        </AlertDialog>
    );
};

export default DeleteReportModal;
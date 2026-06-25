'use client';

import { useState } from 'react';
import { TriangleExclamation } from '@gravity-ui/icons';
import { AlertDialog, Button, TextArea, Textarea } from '@heroui/react';

const WarnCreatorModal = ({
    onWarn,
    isLoading = false,
}) => {

    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        await onWarn(message);
        setMessage('');
    };

    return (
        <AlertDialog>

            {/* Trigger */}
            <AlertDialog.Trigger>
                <button
                    title="Warn Creator"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-200 bg-yellow-50 text-yellow-600 transition hover:bg-yellow-100"
                >
                    <TriangleExclamation className="h-5 w-5" />
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Backdrop>

                <AlertDialog.Container>

                    <AlertDialog.Dialog className="sm:max-w-[480px] rounded-2xl">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>

                            <AlertDialog.Icon status="warning" />

                            <AlertDialog.Heading>
                                Warn Creator
                            </AlertDialog.Heading>

                        </AlertDialog.Header>

                        <AlertDialog.Body>

                            <p className="mb-4 text-sm text-gray-600">
                                Write a warning message for the creator.
                            </p>

                            <TextArea
                                className="h-32 w-96"
                                placeholder="Example: Your prompt violates our community guideline..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />

                        </AlertDialog.Body>

                        <AlertDialog.Footer>

                            <Button
                                slot="close"
                                variant="light"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                color="warning"
                                isLoading={isLoading}
                                onPress={handleSubmit}
                            >
                                Send Warning
                            </Button>

                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>

                </AlertDialog.Container>

            </AlertDialog.Backdrop>

        </AlertDialog>
    );
};

export default WarnCreatorModal;
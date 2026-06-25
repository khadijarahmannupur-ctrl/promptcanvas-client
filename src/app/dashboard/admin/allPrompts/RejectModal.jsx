"use client";

import { useState } from "react";
import { Modal, Button, TextArea } from "@heroui/react";
import { CircleXmarkFill } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { updatedPrompt } from "@/lib/actions/prompts";

const RejectModal = ({ promptId, trigger }) => {

    const [feedback, setFeedback] = useState("");

    const handleReject = async () => {

        if (!feedback.trim()) {
            toast.error("Please provide rejection feedback.");
            return;
        }

        const result = await updatedPrompt(promptId, {
            status: "rejected",
            rejectionFeedback: feedback,
        });

        if (result?.modifiedCount) {
            toast.success("Prompt rejected successfully");

            setFeedback("");

            window.location.reload();
        }
    };

    return (

        <Modal>

            {trigger}

            <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">

                <Modal.Container>

                    <Modal.Dialog className="w-full max-w-lg rounded-3xl border border-[#DCCCAC] bg-white">

                        {(close) => (

                            <>

                                <Modal.CloseTrigger />

                                <Modal.Header>

                                    <Modal.Icon>

                                        <CircleXmarkFill className="text-red-500" />

                                    </Modal.Icon>

                                    <Modal.Heading className="text-2xl font-bold text-[#2F3B26]">

                                        Reject Prompt

                                    </Modal.Heading>

                                </Modal.Header>

                                <Modal.Body>

                                    <p className="mb-5 text-sm leading-7 text-gray-600">

                                        Please provide a reason why this prompt is being rejected.
                                        This feedback will be visible to the creator.

                                    </p>

                                    <TextArea
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        placeholder="Example: The prompt contains copyrighted content, incomplete instructions, or violates our quality guidelines."
                                        // minRows={6}
                                        className="w-full"
                                    />

                                </Modal.Body>

                                <Modal.Footer className="flex justify-end gap-3">

                                    <Button
                                        variant="bordered"
                                        slot="close"
                                        className="border-[#DCCCAC]"
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        onPress={handleReject}
                                        className="bg-red-500 text-white hover:bg-red-600"
                                        slot="close"
                                    >
                                        Reject Prompt
                                    </Button>

                                </Modal.Footer>

                            </>

                        )}

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>

    );

};

export default RejectModal;
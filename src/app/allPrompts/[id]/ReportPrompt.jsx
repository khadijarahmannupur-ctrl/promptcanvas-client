"use client";

import { useState } from "react";
import {
    Modal,
    Button,
    TextField,
    Label,
    TextArea,
    Description,
    Select,
    ListBox,
} from "@heroui/react";

import { toast } from "react-hot-toast";
import { createReport } from "@/lib/actions/reports";
// import { addReport } from "@/lib/api/reports";


export default function ReportPrompt({ prompt, session }) {

    const [reason, setReason] = useState("Spam");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (close) => {

        if (!session?.user) {

            toast.error("Please login first.");

            return;

        }

        setLoading(true);

        const report = {

            promptId: prompt._id,
            promptTitle: prompt.title,

            reportedBy: session.user.name,
            userEmail: session.user.email,

            reason,
            description,

        };

        const result = await createReport(report);

        if (result.insertedId) {

            toast.success("Report submitted successfully.");

            setReason("Spam");
            setDescription("");

            close();

        } else {

            toast.error(result.message || "Failed to submit report.");

        }

        setLoading(false);

    };

    return (

        <Modal>

            <Button
                slot="trigger"
                color="danger"
                variant="outline"
            >
                Report Prompt
            </Button>

            <Modal.Backdrop>

                <Modal.Container>

                    <Modal.Dialog className="rounded-3xl">

                        {({ close }) => (

                            <>

                                <Modal.CloseTrigger />

                                <Modal.Header>

                                    <Modal.Heading>

                                        Report Prompt

                                    </Modal.Heading>

                                </Modal.Header>

                                <Modal.Body>

                                    <div className="space-y-6">

                                        <div>

                                            <p className="mb-2 text-sm font-medium">

                                                Select Reason

                                            </p>

                                            <Select
                                                selectedKey={reason}
                                                onSelectionChange={(key) => setReason(key)}
                                            >

                                                <Select.Trigger>

                                                    <Select.Value />

                                                </Select.Trigger>

                                                <Select.Popover>

                                                    <ListBox>

                                                        <ListBox.Item id="Spam">
                                                            Spam
                                                        </ListBox.Item>

                                                        <ListBox.Item id="Inappropriate Content">
                                                            Inappropriate Content
                                                        </ListBox.Item>

                                                        <ListBox.Item id="Copyright Violation">
                                                            Copyright Violation
                                                        </ListBox.Item>

                                                        <ListBox.Item id="Other">
                                                            Other
                                                        </ListBox.Item>

                                                    </ListBox>

                                                </Select.Popover>

                                            </Select>

                                        </div>

                                        <TextField
                                            value={description}
                                            onChange={setDescription}
                                        >

                                            <Label>

                                                Additional Description (Optional)

                                            </Label>

                                            <TextArea
                                                placeholder="Describe the issue..."
                                            />

                                            <Description>

                                                You can provide more details about this report.

                                            </Description>

                                        </TextField>

                                    </div>

                                </Modal.Body>

                                <Modal.Footer>

                                    <Button
                                        variant="outline"
                                        onPress={close}
                                    >

                                        Cancel

                                    </Button>

                                    <Button
                                        color="danger"
                                        isLoading={loading}
                                        onPress={() => handleSubmit(close)}
                                    >

                                        Submit Report

                                    </Button>

                                </Modal.Footer>

                            </>

                        )}

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>

    );

}
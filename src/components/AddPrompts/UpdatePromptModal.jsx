'use client';

import { useState } from "react";
import {
    Modal,
    Button,
    TextField,
    Label,
    Input,
} from "@heroui/react";

import { PencilToSquare } from "@gravity-ui/icons";

export default function UpdateTitleModal({ prompt, onUpdate }) {

    const [title, setTitle] = useState(prompt.title);

    const handleUpdate = async () => {
        await onUpdate(prompt._id, {
            title,
        });
    };

    return (
        <Modal>

            {/* Open Button */}
            <Modal.Trigger>

                <button className="text-[#546B41] hover:text-[#3d4f30]">
                    <PencilToSquare />
                </button>

            </Modal.Trigger>

            <Modal.Backdrop>

                <Modal.Container>

                    <Modal.Dialog className="w-full max-w-lg rounded-2xl">

                        <Modal.CloseTrigger />

                        <Modal.Header>

                            <Modal.Heading>
                                Update Prompt Title
                            </Modal.Heading>

                        </Modal.Header>

                        <Modal.Body>

                            <TextField>

                                <Label>
                                    Prompt Title
                                </Label>

                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter prompt title"
                                />

                            </TextField>

                        </Modal.Body>

                        <Modal.Footer>

                            <Button
                                slot="close"
                                variant="light"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                color="primary"
                                onPress={handleUpdate}
                            >
                                Update
                            </Button>

                        </Modal.Footer>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
}
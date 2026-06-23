"use client";

import { Button } from "@heroui/react";
import { Copy } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import { increaseCopyCount } from "@/lib/actions/copy";
import { useRouter } from "next/navigation";
// import { increaseCopyCount } from "@/lib/api/prompts";


export default function CopyPromptButton({ promptId, content,}) {
    const router = useRouter();

    const handleCopy = async () => {

        try {

            await navigator.clipboard.writeText(content);

            await increaseCopyCount(promptId);

            toast.success("Prompt copied successfully.");

            router.refresh();

        }

        catch (error) {

            toast.error("Failed to copy prompt.");

        }

    };

    return (

        <Button
            onPress={handleCopy}
            className="bg-[#546B41] text-white hover:bg-[#435635]"
        >

            <Copy />

            Copy Prompt

        </Button>

    );

}
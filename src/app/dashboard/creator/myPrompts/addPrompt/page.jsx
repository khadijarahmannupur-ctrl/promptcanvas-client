"use client";

import { useState } from "react";
import {
    Form,
    Fieldset,
    TextField,
    Label,
    Input,
    TextArea,
    FieldError,
    Select,
    ListBox,
    RadioGroup,
    Radio,
    Button,
} from "@heroui/react";

import {
    PencilToSquare,
    Sparkles,
    CirclePlus,
} from "@gravity-ui/icons";
import { createPrompt } from "@/lib/actions/prompts";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export default function AddPromptPage() {
    const [errors, setErrors] = useState({});

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const newErrors = {};

        if (!data.title) newErrors.title = "Prompt title is required.";
        if (!data.description)
            newErrors.description = "Prompt description is required.";
        if (!data.content)
            newErrors.content = "Prompt content is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        const promptData = {
            ...data,
            copyCount: 0,
            status: "pending",
        };

        // console.log(promptData);

        const res = await createPrompt(promptData);
        if(res.insertedId){
            toast.success('Prompt Post Successfully');
            e.target.reset();
            redirect('/dashboard/creator')
        }
    };

    const inputClass =
        "w-full rounded-xl border border-[#DCCCAC] bg-white h-12 px-4 outline-none transition-all focus:border-[#546B41]";

    const textAreaClass =
        "w-full rounded-xl border border-[#DCCCAC] bg-white p-4 outline-none transition-all focus:border-[#546B41]";

    const triggerClasses =
        "w-full flex items-center justify-between rounded-xl border border-[#DCCCAC] bg-white h-12 px-4";

    const popoverClasses =
        "rounded-xl border border-[#DCCCAC] bg-white shadow-xl p-2";

    const listItemClasses =
        "rounded-lg px-3 py-2 cursor-pointer hover:bg-[#FFF8EC]";

    return (
        <div className="min-h-screen bg-[#FFF8EC] py-10 px-4 md:px-8">

            <div className="mx-auto max-w-5xl rounded-3xl border border-[#DCCCAC] bg-white p-8 shadow-lg">

                {/* ================= Header ================= */}

                <div className="mb-10 border-b border-[#DCCCAC] pb-6">

                    <div className="inline-flex items-center gap-2 rounded-full bg-[#99AD7A]/20 px-4 py-2">

                        <Sparkles
                            width={18}
                            height={18}
                            className="text-[#546B41]"
                        />

                        <span className="text-sm font-medium text-[#546B41]">
                            Creator Dashboard
                        </span>

                    </div>

                    <h1 className="mt-5 text-3xl font-bold text-[#2F3B26]">
                        Add New Prompt
                    </h1>

                    <p className="mt-2 max-w-2xl text-gray-600">
                        Share your best AI prompt with the community. Every new prompt
                        will be reviewed by an administrator before it becomes publicly
                        available.
                    </p>

                </div>

                {/* ================= Form ================= */}

                <Form
                    onSubmit={handleSubmit}
                    validationErrors={errors}
                    validationBehavior="aria"
                    className="space-y-10"
                >

                    {/* ===================================================== */}
                    {/* PART - 1 : Prompt Information */}
                    {/* ===================================================== */}

                    <Fieldset className="space-y-6">

                        <legend className="mb-3 border-b border-[#DCCCAC] pb-2 text-xl font-semibold text-[#2F3B26]">
                            Prompt Information
                        </legend>

                        {/* Prompt Title */}

                        <TextField
                            name="title"
                            isInvalid={!!errors.title}
                            className="flex flex-col gap-2"
                        >

                            <Label className="font-medium text-[#2F3B26]">
                                Prompt Title
                            </Label>

                            <Input
                                placeholder="e.g. Create Stunning Portfolio Website using React"
                                className={inputClass}
                            />

                            {errors.title && (
                                <FieldError>{errors.title}</FieldError>
                            )}

                        </TextField>

                        {/* Prompt Description */}

                        <TextField
                            name="description"
                            isInvalid={!!errors.description}
                            className="flex flex-col gap-2"
                        >

                            <Label className="font-medium text-[#2F3B26]">
                                Prompt Description
                            </Label>

                            <TextArea
                                rows={4}
                                placeholder="Write a short description about your prompt..."
                                className={textAreaClass}
                            />

                            {errors.description && (
                                <FieldError>{errors.description}</FieldError>
                            )}

                        </TextField>

                        {/* Prompt Content */}

                        <TextField
                            name="content"
                            isInvalid={!!errors.content}
                            className="flex flex-col gap-2"
                        >

                            <Label className="font-medium text-[#2F3B26]">
                                Prompt Content
                            </Label>

                            <TextArea
                                rows={8}
                                placeholder="Write your complete AI Prompt here..."
                                className={textAreaClass}
                            />

                            {errors.content && (
                                <FieldError>{errors.content}</FieldError>
                            )}

                        </TextField>

                    </Fieldset>

                    {/* ===================================================== */}
                    {/* PART - 2 : Prompt Settings */}
                    {/* ===================================================== */}

                    <Fieldset className="space-y-6">

                        <legend className="mb-3 border-b border-[#DCCCAC] pb-2 text-xl font-semibold text-[#2F3B26]">
                            Prompt Settings
                        </legend>

                        {/* Category & AI Tool */}

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                            {/* Category */}

                            <Select
                                name="category"
                                className="w-full"
                            >

                                <Label className="mb-2 block font-medium text-[#2F3B26]">
                                    Category
                                </Label>

                                <Select.Trigger className={triggerClasses}>
                                    <Select.Value placeholder="Select Category" />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover className={popoverClasses}>
                                    <ListBox>

                                        <ListBox.Item
                                            id="Writing"
                                            textValue="Writing"
                                            className={listItemClasses}
                                        >
                                            Writing
                                        </ListBox.Item>

                                        <ListBox.Item
                                            id="Programming"
                                            textValue="Programming"
                                            className={listItemClasses}
                                        >
                                            Programming
                                        </ListBox.Item>

                                        <ListBox.Item
                                            id="Marketing"
                                            textValue="Marketing"
                                            className={listItemClasses}
                                        >
                                            Marketing
                                        </ListBox.Item>

                                        <ListBox.Item
                                            id="Education"
                                            textValue="Education"
                                            className={listItemClasses}
                                        >
                                            Education
                                        </ListBox.Item>

                                        <ListBox.Item
                                            id="Productivity"
                                            textValue="Productivity"
                                            className={listItemClasses}
                                        >
                                            Productivity
                                        </ListBox.Item>

                                    </ListBox>
                                </Select.Popover>

                            </Select>

                            {/* AI Tool */}

                            <Select
                                name="tool"
                                className="w-full"
                            >

                                <Label className="mb-2 block font-medium text-[#2F3B26]">
                                    AI Tool
                                </Label>

                                <Select.Trigger className={triggerClasses}>
                                    <Select.Value placeholder="Select AI Tool" />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover className={popoverClasses}>
                                    <ListBox>

                                        <ListBox.Item id="ChatGPT" textValue="ChatGPT" className={listItemClasses}>
                                            ChatGPT
                                        </ListBox.Item>

                                        <ListBox.Item id="Gemini" textValue="Gemini" className={listItemClasses}>
                                            Gemini
                                        </ListBox.Item>

                                        <ListBox.Item id="Claude" textValue="Claude" className={listItemClasses}>
                                            Claude
                                        </ListBox.Item>

                                        <ListBox.Item id="Midjourney" textValue="Midjourney" className={listItemClasses}>
                                            Midjourney
                                        </ListBox.Item>

                                        <ListBox.Item id="DeepSeek" textValue="DeepSeek" className={listItemClasses}>
                                            DeepSeek
                                        </ListBox.Item>

                                    </ListBox>
                                </Select.Popover>

                            </Select>

                        </div>

                        {/* Tags */}

                        <TextField
                            name="tags"
                            className="flex flex-col gap-2"
                        >

                            <Label className="font-medium text-[#2F3B26]">
                                Tags
                            </Label>

                            <Input
                                placeholder="react, nextjs, ai, prompt"
                                className={inputClass}
                            />

                        </TextField>

                        {/* Difficulty & Thumbnail */}

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                            {/* Difficulty */}

                            <Select
                                name="difficulty"
                                className="w-full"
                            >

                                <Label className="mb-2 block font-medium text-[#2F3B26]">
                                    Difficulty Level
                                </Label>

                                <Select.Trigger className={triggerClasses}>
                                    <Select.Value placeholder="Select Difficulty" />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover className={popoverClasses}>
                                    <ListBox>

                                        <ListBox.Item
                                            id="Beginner"
                                            textValue="Beginner"
                                            className={listItemClasses}
                                        >
                                            Beginner
                                        </ListBox.Item>

                                        <ListBox.Item
                                            id="Intermediate"
                                            textValue="Intermediate"
                                            className={listItemClasses}
                                        >
                                            Intermediate
                                        </ListBox.Item>

                                        <ListBox.Item
                                            id="Pro"
                                            textValue="Pro"
                                            className={listItemClasses}
                                        >
                                            Pro
                                        </ListBox.Item>

                                    </ListBox>
                                </Select.Popover>

                            </Select>

                            {/* Thumbnail */}

                            <TextField
                                name="thumbnail"
                                className="flex flex-col gap-2"
                            >

                                <Label className="font-medium text-[#2F3B26]">
                                    Thumbnail Image URL
                                </Label>

                                <Input
                                    placeholder="https://i.ibb.co/....."
                                    className={inputClass}
                                />

                            </TextField>

                        </div>

                        {/* Visibility */}

                        <div className="flex flex-col gap-3">

                            <Label className="font-medium text-[#2F3B26]">
                                Prompt Visibility
                            </Label>

                            <RadioGroup
                                name="visibility"
                                defaultValue="public"
                                orientation="horizontal"
                                className="flex gap-5"
                            >

                                <Radio
                                    value="public"
                                    className="rounded-xl border border-[#DCCCAC] bg-[#FFF8EC] px-5 py-3"
                                >
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>

                                    <Radio.Content>
                                        <Label>🌍 Public</Label>
                                    </Radio.Content>
                                </Radio>

                                <Radio
                                    value="private"
                                    className="rounded-xl border border-[#DCCCAC] bg-[#FFF8EC] px-5 py-3"
                                >
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>

                                    <Radio.Content>
                                        <Label>🔒 Private (Premium)</Label>
                                    </Radio.Content>
                                </Radio>

                            </RadioGroup>

                        </div>

                    </Fieldset>

                    {/* ===================================================== */}
                    {/* PART - 3 : Submit Section */}
                    {/* ===================================================== */}

                    <div className="rounded-2xl border border-[#DCCCAC] bg-[#FFF8EC] p-6">

                        <h3 className="text-xl font-semibold text-[#2F3B26]">
                            Submission Notice
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-gray-600">
                            Every newly submitted prompt is automatically marked as
                            <span className="mx-1 rounded-md bg-yellow-100 px-2 py-1 font-semibold text-yellow-700">
                                Pending
                            </span>
                            and will remain hidden from the marketplace until it is reviewed
                            by an administrator.
                        </p>

                        <div className="mt-6 grid gap-3 md:grid-cols-3">

                            <div className="rounded-xl bg-white p-4 border border-[#DCCCAC]">
                                <p className="text-sm text-gray-500">
                                    Initial Copy Count
                                </p>

                                <h4 className="mt-2 text-2xl font-bold text-[#546B41]">
                                    0
                                </h4>
                            </div>

                            <div className="rounded-xl bg-white p-4 border border-[#DCCCAC]">
                                <p className="text-sm text-gray-500">
                                    Prompt Status
                                </p>

                                <h4 className="mt-2 font-bold text-amber-600">
                                    Pending Review
                                </h4>
                            </div>

                            <div className="rounded-xl bg-white p-4 border border-[#DCCCAC]">
                                <p className="text-sm text-gray-500">
                                    Marketplace Visibility
                                </p>

                                <h4 className="mt-2 font-bold text-red-500">
                                    Hidden Until Approved
                                </h4>
                            </div>

                        </div>

                    </div>

                    {/* Action Buttons */}

                    <div className="flex flex-col-reverse gap-4 border-t border-[#DCCCAC] pt-6 sm:flex-row sm:justify-end">

                        <Button
                            type="reset"
                            variant="outline"
                            className="h-12 rounded-xl border-[#DCCCAC] px-8 text-[#546B41]"
                        >
                            Reset
                        </Button>

                        <Button
                            type="submit"
                            className="h-12 rounded-xl bg-[#546B41] px-8 font-semibold text-white hover:bg-[#465838]"
                        >
                            <CirclePlus
                                width={18}
                                height={18}
                            />
                            Publish Prompt
                        </Button>

                    </div>

                </Form>

            </div>

        </div>
    );
}
"use client";

import { useState } from "react";
import {
    Card,
    Button,
    Link,
    TextField,
    Label,
    InputGroup,
    Input,
} from "@heroui/react";

import {
    At,
    ShieldKeyhole,
    Eye,
    EyeSlash,
} from "@gravity-ui/icons";

import { signIn } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignIn = async (e) => {
        e.preventDefault();

        setError("");
        setIsLoading(true);

        try {
            const { error: authError } = await signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (authError) {
                setError(authError.message || "Login failed.");
            }
        } catch (err) {
            setError("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        // signIn.social({ provider: "google" });
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[#FFF8EC] px-4 py-10">

            {/* Background Blur */}
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#DCCCAC]/40 blur-3xl" />
            <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#99AD7A]/20 blur-3xl" />

            <Card className="relative z-10 w-full max-w-xl rounded-2xl border border-[#DCCCAC] bg-white p-6 shadow-xl">

                {/* Header */}
                <div className="mb-6 border-b border-[#DCCCAC] pb-5 text-center">
                    <h1 className="text-2xl font-bold text-[#2F3B26]">
                        Welcome Back
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Sign in to continue to PromptCanvas
                    </p>
                </div>

                {/* Google Login */}
                <Button
                    variant="bordered"
                    onPress={handleGoogleSignIn}
                    className="mb-4 w-full border-[#DCCCAC] text-[#2F3B26] hover:bg-[#DCCCAC]/40"
                >
                    {/* <LogoGoogle className="mr-2 h-4 w-4" /> */}
                    <FcGoogle />
                    Continue with Google
                </Button>

                {/* Divider */}
                <div className="my-4 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[#DCCCAC]" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-[#DCCCAC]" />
                </div>

                {/* Form */}
                <form onSubmit={handleSignIn} className="flex flex-col gap-5">

                    {/* Email */}
                    <TextField>
                        <Label className="text-sm text-[#2F3B26]">
                            Email Address
                        </Label>

                        <InputGroup className="flex items-center gap-2 rounded-xl border border-[#DCCCAC] bg-[#FFF8EC] px-3">
                            <At className="h-4 w-4 text-[#546B41]" />

                            <Input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent py-2 outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Password */}
                    <TextField>
                        <Label className="text-sm text-[#2F3B26]">
                            Password
                        </Label>

                        <InputGroup className="flex items-center gap-2 rounded-xl border border-[#DCCCAC] bg-[#FFF8EC] px-3">

                            <ShieldKeyhole className="h-4 w-4 text-[#546B41]" />

                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent py-2 outline-none"
                            />

                            <button
                                type="button"
                                onClick={toggleVisibility}
                                className="text-gray-500 hover:text-[#546B41]"
                            >
                                {isVisible ? (
                                    <EyeSlash className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>

                        </InputGroup>
                    </TextField>

                    {/* Forgot Password
                    <div className="text-right">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-[#546B41]"
                        >
                            Forgot Password?
                        </Link>
                    </div> */}

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    {/* Button */}
                    <Button
                        type="submit"
                        isLoading={isLoading}
                        className="w-full rounded-xl bg-[#546B41] text-white hover:bg-[#445636]"
                    >
                        Sign In
                    </Button>

                    {/* Bottom */}
                    <p className="text-center text-sm text-gray-500">
                        Do not have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="font-medium text-[#546B41]"
                        >
                            Sign Up
                        </Link>
                    </p>

                </form>

            </Card>
        </div>
    );
}
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
    Person,
    At,
    ShieldKeyhole,
    Eye,
    EyeSlash,
} from "@gravity-ui/icons";

import { signUp } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignup = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setIsLoading(true);

        try {
            const { error: authError } = await signUp.email({
                email,
                password,
                name,
                image: photoURL, // 👈 added image url support
                callbackURL: "/",
            });

            if (authError) {
                setError(authError.message || "Signup failed");
            } else {
                setSuccess("Account created successfully 🎉");
                setName("");
                setEmail("");
                setPhotoURL("");
                setPassword("");
            }
        } catch (err) {
            setError("Network error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        setError("");
        setSuccess("Redirecting to Google...");
        // signIn.social({ provider: "google" }) -> your auth system
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[#FFF8EC] px-4 py-10">

            {/* Background */}
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#DCCCAC]/40 blur-3xl" />
            <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#99AD7A]/20 blur-3xl" />

            <Card className="relative z-10 w-full max-w-xl rounded-2xl border border-[#DCCCAC] bg-white p-6 shadow-xl">

                {/* Header */}
                <div className="text-center border-b border-[#DCCCAC] pb-5 mb-6">
                    <h1 className="text-2xl font-bold text-[#2F3B26]">
                        Create Account
                    </h1>
                    <p className="text-sm text-gray-500">
                        Join PromptCanvas community
                    </p>
                </div>

                {/* Google Signup */}
                <Button
                    onPress={handleGoogleSignup}
                    variant="bordered"
                    className="w-full mb-4 border-[#DCCCAC] text-[#2F3B26] hover:bg-[#DCCCAC]/40"
                >
                    {/* <LogoGoogle className="mr-2 h-4 w-4" /> */}
                    <FcGoogle />
                    Continue with Google
                </Button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                    <div className="h-px flex-1 bg-[#DCCCAC]" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-[#DCCCAC]" />
                </div>

                {/* Form */}
                <form onSubmit={handleSignup} className="flex flex-col gap-5">

                    {/* Name */}
                    <TextField>
                        <Label className="text-sm text-[#2F3B26]">Name</Label>
                        <InputGroup className="flex items-center gap-2 border border-[#DCCCAC] rounded-xl px-3 bg-[#FFF8EC]">
                            <Person className="h-4 w-4 text-[#546B41]" />
                            <Input
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-transparent py-2 outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Email */}
                    <TextField>
                        <Label className="text-sm text-[#2F3B26]">Email</Label>
                        <InputGroup className="flex items-center gap-2 border border-[#DCCCAC] rounded-xl px-3 bg-[#FFF8EC]">
                            <At className="h-4 w-4 text-[#546B41]" />
                            <Input
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent py-2 outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Photo URL */}
                    <TextField>
                        <Label className="text-sm text-[#2F3B26]">Photo URL</Label>
                        <InputGroup className="flex items-center gap-2 border border-[#DCCCAC] rounded-xl px-3 bg-[#FFF8EC]">
                            <input
                                type="text"
                                placeholder="https://your-image-link.com"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="w-full bg-transparent py-2 outline-none text-sm"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Password */}
                    <TextField>
                        <Label className="text-sm text-[#2F3B26]">Password</Label>
                        <InputGroup className="flex items-center gap-2 border border-[#DCCCAC] rounded-xl px-3 bg-[#FFF8EC]">

                            <ShieldKeyhole className="h-4 w-4 text-[#546B41]" />

                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Create password"
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

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}

                    {/* Success */}
                    {success && (
                        <p className="text-sm text-green-600">{success}</p>
                    )}

                    {/* Submit */}
                    <Button
                        type="submit"
                        isLoading={isLoading}
                        className="w-full bg-[#546B41] text-white hover:bg-[#445636] rounded-xl"
                    >
                        Sign Up
                    </Button>

                    {/* Login */}
                    <p className="text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/auth/signin" className="text-[#546B41] font-medium">
                            Sign in
                        </Link>
                    </p>

                </form>
            </Card>
        </div>
    );
}
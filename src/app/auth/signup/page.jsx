import { Suspense } from "react";
import SignupContent from "./SignupContent.jsx";


export default function SignupPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignupContent></SignupContent>
        </Suspense>
    );
}
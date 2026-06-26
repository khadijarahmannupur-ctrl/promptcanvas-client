import { Suspense } from "react";
import SigninContent from "./SigninContent";


export default function SignupPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SigninContent />
        </Suspense>
    );
}
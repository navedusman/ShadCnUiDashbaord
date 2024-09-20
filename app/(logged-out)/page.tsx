import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage(){
    return(
        <>
            <h1 className="flex gap-2 items-center">
                <PersonStandingIcon size={50} className="text-pink-500" />
                Welcome to NG Applications
            </h1>
            <p>The best dashboard to manage customer support</p>
            <div className="flex gap-2 items-center">            
            <Button asChild>
                <Link href="/login">Log In</Link>
            </Button>
            <small>or</small>
            <Button asChild variant="secondary">
            <Link href="/signup">Sign Up</Link>
            </Button> 
            </div>
        </>
    )
}
'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export function TopNav() {
    return (
        <nav className="flex justify-end">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}

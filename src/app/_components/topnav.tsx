'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export function TopNav() {
    return (
        <nav className="flex">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </li>
            </ul>
        </nav>
    )
}

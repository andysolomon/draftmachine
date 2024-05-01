'use client'

import { SignedIn } from '@clerk/clerk-react';

export function SideNav() {
    return (
        <nav className="flex flex-col justify-end">
            <SignedIn>
                <ul>
                    <li>Home</li>
                    <li>Drafts
                        <ul>
                            <li>Current Draft</li>
                            <li>Historical Drafts</li>
                        </ul>
                    </li>
                    <li>Create
                        <ul>
                            <li>Draft</li>
                            <li>Team</li>
                            <li>Athlete</li>
                        </ul>
                    </li>
                    <li>Settings</li>
                </ul>
            </SignedIn>
        </nav>
    )
}

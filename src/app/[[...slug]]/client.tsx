'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
// const App = dynamic(() => import('../../App'), { ssr: false })
 
export function ClientOnly({ athletes }) {
    return(
        <div>
            <h1 className="text-3xl font-bold underline">Client Only</h1>
            <ul>
                {athletes.map((athlete) => (
                    <li key={athlete.id}>{athlete.name}</li>
                ))}
            </ul>
        </div>

    )
}

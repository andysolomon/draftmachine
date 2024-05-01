'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
// import { IAthlete } from '../../../draftmachine'
 
// const App = dynamic(() => import('../../App'), { ssr: false })
 
export function ClientOnly() {
    return(
        <div>
            <h1 className="text-3xl font-bold underline">Client Only</h1>
            <ul>

            </ul>
        </div>

    )
}

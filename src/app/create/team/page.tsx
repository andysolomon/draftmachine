'use client'

import { useState, FormEvent, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { BasketballTeam } from "../../../../draftmachine"

export default function CreateTeam() {
    const [teams, setTeams] = useState([])

    const [formData, setFormData] = useState({
        name: '',
        location: ''
    })

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch('http://localhost:3001/api/get-basketball-teams')
            const data = await response.json()
            setTeams(data)
        }
        fetchTeams()
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            // Create a new BasketballTeam instance
            const newTeam = new BasketballTeam(formData.name, formData.location)

            const response = await fetch('http://localhost:3001/api/add-basketball-team', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newTeam.name,
                    location: newTeam.location,
                    teamId: newTeam.teamId
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to create team')
            }

            // Reset form after successful submission
            setFormData({
                name: '',
                location: ''
            })

        } catch (error) {
            console.error('Error creating team:', error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="container mx-auto p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Create New Team</CardTitle>
                    <CardDescription>Add a new basketball team to the database</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Team Name</label>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter team name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Location</label>
                            <Input
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter team location"
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">Create Team</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* Keep the existing teams list */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Existing Teams</h2>
                <ul>
                
                </ul>
            </div>
        </div>
    )
}
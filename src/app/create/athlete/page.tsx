'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "~/components/ui/select"
import { 
    BasketballPositions, 
    IAthlete,
    FootballOffensiveLinePositions,
    FootballOffensiveSkillPositions,
    FootballDefensiveLinePositions,
    FootballDefensiveLineBackerPositions,
    FootballDefensiveBackPositions,
    FootballSpecialTeamsPositions
} from "../../../../draftmachine"

export default function CreateAthlete() {

    const [formData, setFormData] = useState<IAthlete>({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        college: '',
        highSchool: '',
        height: '',
        weight: '',
        positionBasketball: '',
        positionFootball: ''
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
          const response = await fetch('http://localhost:3001/api/add-athlete', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: formData.firstName,
                lastName: formData.lastName,
                dateOfBirth: formData.dateOfBirth,
                college: formData.college,
                highSchool: formData.highSchool,
                height: formData.height,
                weight: formData.weight,
                positionBasketball: formData.positionBasketball,
                positionFootball: formData.positionFootball
            }),
          })
          
          if (!response.ok) {
            throw new Error('Failed to create athlete')
          }
    
          // Reset form after successful submission
          setFormData({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            college: '',
            highSchool: '',
            height: '',
            weight: '',
            positionBasketball: '',
            positionFootball: ''
          })
    
        } catch (error) {
          console.error('Error creating athlete:', error)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSelectChange = (
        field: 'positionBasketball' | 'positionFootball',
        value: BasketballPositions | string | null
    ) => {
        if (value === "none") {
            setFormData(prev => ({
                ...prev,
                [field]: null
            }));
            return;
        }
        
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    }

    return (
        <div className="container mx-auto p-6">
        <Card>
            <CardHeader>
            <CardTitle>Create New Athlete</CardTitle>
            <CardDescription>Add a new athlete to the database</CardDescription>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    />
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Date of Birth</label>
                    <Input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth ? formData.dateOfBirth.toString() : ''}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Basketball Position</label>
                    
                    <Select 
                        value={formData.positionBasketball?.toString() || ''}
                        onValueChange={(value) => handleSelectChange('positionBasketball', value)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select basketball position" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            {Object.keys(BasketballPositions)
                                .filter(key => isNaN(Number(key)))
                                .map((position) => (
                                    <SelectItem 
                                        key={position} 
                                        value={position}
                                    >
                                        {position.replace(/([A-Z])/g, ' $1').trim()
                                            .split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(' ')}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                <label className="text-sm font-medium">Football Position</label>
                <Select 
                    value={formData.positionFootball?.toString() || ''}
                    onValueChange={(value) => handleSelectChange('positionFootball', value)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select football position" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectGroup>
                            <SelectLabel>Offensive Line</SelectLabel>
                            {Object.entries(FootballOffensiveLinePositions)
                                .filter(([key]) => isNaN(Number(key)))
                                .map(([key]) => (
                                    <SelectItem key={`OL_${key}`} value={`OL_${key}`}>
                                        {key.replace(/([A-Z])/g, ' $1').trim()
                                            .split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(' ')}
                                    </SelectItem>
                                ))
                            }
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Offensive Skill</SelectLabel>
                            {Object.entries(FootballOffensiveSkillPositions)
                                .filter(([key]) => isNaN(Number(key)))
                                .map(([key]) => (
                                    <SelectItem key={`OS_${key}`} value={`OS_${key}`}>
                                        {key.replace(/([A-Z])/g, ' $1').trim()
                                            .split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(' ')}
                                    </SelectItem>
                                ))
                            }
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Defensive Line</SelectLabel>
                            {Object.entries(FootballDefensiveLinePositions)
                                .filter(([key]) => isNaN(Number(key)))
                                .map(([key]) => (
                                    <SelectItem key={`DL_${key}`} value={`DL_${key}`}>
                                        {key === 'edgeRusher' ? 'Edge Rusher (DL)' : key.replace(/([A-Z])/g, ' $1').trim()}
                                    </SelectItem>
                                ))
                            }
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Linebackers</SelectLabel>
                            {Object.entries(FootballDefensiveLineBackerPositions)
                                .filter(([key]) => isNaN(Number(key)))
                                .map(([key]) => (
                                    <SelectItem key={`LB_${key}`} value={`LB_${key}`}>
                                        {key === 'edgeRusher' ? 'Edge Rusher (LB)' : key.replace(/([A-Z])/g, ' $1').trim()}
                                    </SelectItem>
                                ))
                            }
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Defensive Backs</SelectLabel>
                            {Object.entries(FootballDefensiveBackPositions)
                                .filter(([key]) => isNaN(Number(key)))
                                .map(([key]) => (
                                    <SelectItem key={`DB_${key}`} value={`DB_${key}`}>
                                        {key.replace(/([A-Z])/g, ' $1').trim()
                                            .split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(' ')}
                                    </SelectItem>
                                ))
                            }
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Special Teams</SelectLabel>
                            {Object.entries(FootballSpecialTeamsPositions)
                                .filter(([key]) => isNaN(Number(key)))
                                .map(([key]) => (
                                    <SelectItem key={`ST_${key}`} value={`ST_${key}`}>
                                        {key.replace(/([A-Z])/g, ' $1').trim()
                                            .split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(' ')}
                                    </SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">College</label>
                    <Input
                    name="college"
                    value={String(formData.college || '')}
                    onChange={handleChange}
                    placeholder="College name"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">High School</label>
                    <Input
                    name="highSchool"
                    value={formData.highSchool ?? ''}
                    onChange={handleChange}
                    placeholder="High school name"
                    />
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Height (in)</label>
                    <Input
                    type="number"
                    name="height"
                    value={formData.height ?? ''}
                    onChange={handleChange}
                    placeholder="Height in inches"
                    required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Weight (lbs)</label>
                    <Input
                    type="number"
                    name="weight"
                    value={formData.weight ?? ''}
                    onChange={handleChange}
                    placeholder="Weight in pounds"
                    required
                    />
                </div>
                </div>

                <div className="flex justify-end">
                <Button type="submit">Create Athlete</Button>
                </div>
            </form>
            </CardContent>
        </Card>
        </div>
    )
}

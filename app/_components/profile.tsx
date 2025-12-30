import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Download, MapPin } from 'lucide-react'
import { skills } from '@/data'
import Link from 'next/link'
import Hero from './Hero'
import { TABS } from '../(root)/page'

interface ProfileProps {
    setActiveTab: (tab: typeof TABS[number]) => void
}

export default function Profile({ setActiveTab }: ProfileProps) {
    return (
        <>
            <Hero setActiveTab={setActiveTab} />

            <div className="space-y-8">
                {/* Bio Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Bio</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            B.Tech (IT) student skilled in Python, C++, and ML frameworks like Scikit-learn, TensorFlow, and PyTorch. 
                            Experienced in LLMs, generative AI, and agentic AI for building scalable, intelligent solutions.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Currently pursuing my degree at Madan Mohan Malaviya University of Technology, Gorakhpur. 
                            I'm passionate about building AI-powered applications and contributing to innovative projects 
                            that solve real-world problems.
                        </p>
                        <div className="flex gap-3 sm:gap-0 sm:items-center flex-col sm:flex-row  sm:space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                Gorakhpur, Uttar Pradesh
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                Available for opportunities
                            </div>
                        </div>

                        <div>
                            <Link href="/Ayush_Singh_Resume.pdf" target='_blank' className="inline-flex items-center text-sm text-primary hover:underline"
                                aria-label="Download Resume" download="Ayush_Singh_Resume.pdf" rel="noopener noreferrer">
                                <Download className="w-4 h-4 mr-2" />
                                Download Resume
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Skills Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Skills & Technologies</CardTitle>
                        <CardDescription>Technologies I work with regularly</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <skill.icon className="w-4 h-4 text-primary" />
                                            <span className="font-medium">{skill.name}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

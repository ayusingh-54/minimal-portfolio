import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Code } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-card border-t border-border mt-16">
                <div className="container mx-auto px-4 py-8 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-muted-foreground">© 2025 Ayush Singh. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://github.com/ayusingh-54" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                    <Github className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://www.linkedin.com/in/ayush-singh54/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://leetcode.com/u/ayusingh54/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
                                    <Code className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="mailto:ayusingh693@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email to Ayush">
                                    <Mail className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

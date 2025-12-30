import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Mail, Linkedin, Github, Phone, Code } from "lucide-react";
import Link from "next/link";

const contactItems = [
    {
        icon: <Phone className="size-7 text-muted-foreground" />,
        title: "Phone",
        value: "+91-7031678999",
        link: "tel:+917031678999",
    },
    {
        icon: <Mail className="size-7 text-muted-foreground" />,
        title: "Email",
        value: "ayusingh693@gmail.com",
        link: "mailto:ayusingh693@gmail.com",
    },
    {
        icon: <Github className="size-7 text-muted-foreground" />,
        title: "GitHub",
        value: "@ayusingh-54",
        link: "https://github.com/ayusingh-54/",
    },
    {
        icon: <Linkedin className="size-7 text-muted-foreground" />,
        title: "LinkedIn",
        value: "@ayush-singh54",
        link: "https://www.linkedin.com/in/ayush-singh54/",
    },
    {
        icon: <Code className="size-7 text-muted-foreground" />,
        title: "LeetCode",
        value: "@ayusingh54",
        link: "https://leetcode.com/u/ayusingh54/",
    },
];

export default function ContactCard() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 mb-8">

                {
                    contactItems.map((item, index) => (
                        <Link href={item.link} key={index} aria-label={`${item.title} links`} >
                            <Card className="w-full md:max-w-xs hover:bg-muted/60 transition-all duration-300">
                                <CardContent className="flex items-center gap-3 p-2">
                                    <div className="h-16 w-16 rounded-md border border-border bg-background flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.value}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))

                }
            </div>
        </>
    );
}

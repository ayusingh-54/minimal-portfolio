import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'
import { Analytics } from "@vercel/analytics/next"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Ayush Singh - AI/ML Developer & Software Engineer",
    template: "%s | Ayush Singh",
  },
  description: "AI/ML Developer & Software Engineer Portfolio of Ayush Singh — building intelligent, scalable solutions with Python, Machine Learning, LLMs, and modern web technologies.",
  keywords: [
    "AI Developer",
    "ML Engineer",
    "Machine Learning",
    "Python Developer",
    "LLMs",
    "LangChain",
    "Software Engineer",
    "Portfolio",
    "Ayush Singh",
    "Deep Learning",
    "Full Stack Developer",
  ],
  authors: [{ name: "Ayush Singh", url: "https://github.com/ayusingh-54" }],
  creator: "Ayush Singh",
  metadataBase: new URL("https://minimal-portfolio-ebon-ten.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://minimal-portfolio-ebon-ten.vercel.app",
    title: "Ayush Singh - AI/ML Developer & Software Engineer",
    description:
      "Explore the portfolio of Ayush Singh, an AI/ML Developer building intelligent solutions with Machine Learning, LLMs, and modern web technologies.",
    siteName: "Ayush Singh Portfolio",
    images: [
      {
        url: "/og_bannerr.jpeg",
        width: 1200,
        height: 630,
        alt: "Ayush Singh Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Singh - AI/ML Developer & Software Engineer",
    description:
      "AI/ML Developer & Software Engineer Portfolio of Ayush Singh.",
    creator: "@ayusingh54",
    images: ["/og_bannerr.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ydHSzattedGcB-5-HAZYQTflySCqIgWSVqZD8wgedEo" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}

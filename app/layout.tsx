import { Inter, Gilda_Display } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gilda",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${gilda.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}


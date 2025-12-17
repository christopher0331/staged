import { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"
import { navigationConfig } from "@/config/navigation"
import { MainNav } from "@/components/layout/main-nav"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "National LeioMyoSarcoma Foundation",
    template: "%s | NLMSF",
  },
  description:
    "Empowering and educating about leiomyosarcoma, a rare smooth tissue cancer",
  keywords: [
    "Leiomyosarcoma",
    "LMS",
    "Cancer",
    "Support",
    "Research",
    "Education",
    "NLMSF",
  ],
  authors: [
    {
      name: "NLMSF",
      url: "https://nlmsf.org",
    },
  ],
  creator: "NLMSF",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nlmsf.org",
    title: "National LeioMyoSarcoma Foundation",
    description: "Empowering and educating about leiomyosarcoma, a rare smooth tissue cancer",
    siteName: "NLMSF",
  },
  twitter: {
    card: "summary_large_image",
    title: "National LeioMyoSarcoma Foundation",
    description: "Empowering and educating about leiomyosarcoma, a rare smooth tissue cancer",
    creator: "@nlmsf",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-gradient-to-r from-white via-purple-50 to-white shadow-sm">
            <div className="container max-w-7xl px-4 sm:px-6 lg:px-18 flex h-24 items-center">
              <MainNav items={navigationConfig} />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

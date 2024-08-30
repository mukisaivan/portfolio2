import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mukisa Ivan Portfolio",
  description: "Mukisa Ivan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen ">
          <NavBar />
          <div className=" flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

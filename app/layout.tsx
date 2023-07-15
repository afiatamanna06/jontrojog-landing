"use client";
import NavigationBar from '@/components/navigation/NavigationBar'
import { useAtom } from "jotai";
import darkModeAtom from "@/atoms/darkModeAtom";
import './globals.css'
import Footer from '@/components/footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [colorMode, toggleColorMode] = useAtom(darkModeAtom);

  return (
    <html lang="en">
      <head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jontrojog</title>
        <meta name="description" content="A modern IoT supply website" />

        <link rel="canonical" href="https://jontrojog-landing.vercel.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jontrojog" />
        <meta name="thumbnail" content="/logo.png" />
        <meta
          property="og:description"
          content="A modern IoT supply website"
        />
        <meta property="og:url" content="https://jontrojog-landing.vercel.app/" />
        <meta property="og:site_name" content="Jontrojog" />
        <meta
          property="og:image"
          content="/logo.png"
        />
        <meta
          property="og:image:url"
          content="/logo.png"
        />
        <meta
          property="og:image:secure_url"
          content="/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="11 minutes" />
        <meta name="twitter:title" content="Jontrojog" />
        <meta
          name="twitter:description"
          content="A modern IoT supply website"
        />
        <meta
          name="twitter:image"
          content="/logo.png"
        />

        <link rel="shortlink" href="https://jontrojog-landing.vercel.app/" />
        <meta name="generator" content="WPML ver:4.6.3 stt:66,37,1,2,68;" />
        <meta name="generator" content="Site Kit by Google 1.99.0" />
        <link
          rel="apple-touch-icon"
          href="/logo.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/logo.png"
        />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`min-h-[100vh] font-['VVDSExp'] overflow-x-hidden ${colorMode === "light" ? "dark" : "light"}`}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

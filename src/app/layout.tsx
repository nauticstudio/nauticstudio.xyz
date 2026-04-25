import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/context";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nautic Boy & Studio | Electronic Music Production",
  description: "Elevating electronic music from the booth to the final master. Producer, DJ and Mix & Mastering Engineer. Studio services, DJ sets and production templates.",
  keywords: ["mixing", "mastering", "DJ", "producer", "templates", "electronic music", "audio engineering", "nautic studio", "nautic boy", "music production", "ableton live", "techno"],
  authors: [{ name: "Nautic Boy & Studio" }],
  themeColor: "#000000",
  openGraph: {
    type: "website",
    url: "https://nauticstudio.xyz/",
    title: "Nautic Boy & Studio",
    description: "Elevating electronic music from the booth to the final master. Producer, DJ and Mix & Mastering Engineer.",
    images: [{ url: "/images/studio.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nautic Boy & Studio",
    description: "Elevating electronic music from the booth to the final master. Producer, DJ and Mix & Mastering Engineer.",
    images: ["/images/studio.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-white`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

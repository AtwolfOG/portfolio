import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atwolf | Full-Stack Developer",
  description:
    "I'm Atwolf, a Full-Stack Developer who builds clean, performant web applications from frontend to backend. Explore my projects, skills, and get in touch.",
  keywords: [
    "Atwolf",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Atwolf", url: "https://github.com/AtwolfOG" }],
  creator: "Atwolf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atwolf.vercel.app", // 🔁 update this
    siteName: "Atwolf | Portfolio",
    title: "Atwolf | Full-Stack Developer",
    description:
      "I'm Atwolf, a Full-Stack Developer who builds clean, performant web applications from frontend to backend. Explore my projects, skills, and get in touch.",
    images: [
      {
        url: "/og-image.png", // 🔁 add a 1200×630 preview image to /public
        width: 1200,
        height: 630,
        alt: "Atwolf - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atwolf | Full-Stack Developer",
    description:
      "Full-Stack Developer building clean, performant web apps. Check out my work and get in touch.",
    images: ["/og-image.png"], // 🔁 same image as openGraph
    creator: "@atwolf", // 🔁 update with your Twitter/X handle if you have one
  },
  metadataBase: new URL("https://atwolf.vercel.app"), // 🔁 update this
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

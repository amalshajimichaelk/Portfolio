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
  title: "Amal Shaji Michael | Developer & Video Editor",
  description: "Passionate programming enthusiast and video editor exploring new technologies and creative projects. Portfolio showcasing projects in Python, C, Java, JavaScript, and more.",
  keywords: ["Amal Shaji Michael", "Developer", "Video Editor", "Python", "Java", "JavaScript", "Web Development", "Programming"],
  authors: [{ name: "Amal Shaji Michael" }],
  openGraph: {
    title: "Amal Shaji Michael | Developer & Video Editor",
    description: "Passionate programming enthusiast and video editor",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

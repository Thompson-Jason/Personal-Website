import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import ErrorBoundary from "@/components/errorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jason Thompson - Software Engineer Portfolio",
  description:
    "Portfolio website showcasing Jason Thompson's software engineering projects, skills, and experience at Capital One.",
  keywords:
    "Jason Thompson, Software Engineer, Portfolio, Capital One, React, Next.js, TypeScript, Java, Python, C++",
  authors: [{ name: "Jason Thompson" }],
  creator: "Jason Thompson",
  openGraph: {
    title: "Jason Thompson - Software Engineer Portfolio",
    description:
      "Portfolio website showcasing Jason Thompson's software engineering projects and experience",
    type: "website",
    locale: "en_US",
  },
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
      <body className={inter.className}>
        <ErrorBoundary>
          <TransitionProvider>{children}</TransitionProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

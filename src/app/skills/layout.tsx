import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Jason Thompson",
  description: "Technical skills and background including Java, C++, Python, React, Next.js, and more technologies used by Jason Thompson.",
  keywords: "skills, Java, C++, Python, React, Next.js, TypeScript, software engineering",
  openGraph: {
    title: "Skills - Jason Thompson",
    description: "Technical skills and programming expertise",
    type: "website",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

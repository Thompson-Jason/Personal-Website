import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Jason Thompson",
  description: "Explore Jason Thompson's software engineering projects including personal websites, CLI tools, and mobile applications.",
  keywords: "portfolio, projects, software engineering, web development, mobile apps, CLI tools",
  openGraph: {
    title: "Portfolio - Jason Thompson",
    description: "Software engineering projects and portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

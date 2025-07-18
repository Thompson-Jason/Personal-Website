import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Jason Thompson",
  description: "Get in touch with Jason Thompson. Send a message about opportunities, collaborations, or questions.",
  keywords: "contact, email, message, collaboration, opportunities",
  openGraph: {
    title: "Contact - Jason Thompson",
    description: "Get in touch with Jason Thompson",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

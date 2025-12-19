import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full bg-primary-bg text-primary-text">
      {children}
    </section>
  );
}

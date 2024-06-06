import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jason Thompson Portfolio App",
  description: "Portfolio webpage for Jason Thompson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animation Playground - Web Presentation Effects",
  description:
    "An interactive playground for exploring text, mouse, data, image, micro-interaction, and advanced web animation effects.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://red-mud.vercel.app"),
  title: {
    default: "Red Mud Critical Minerals Platform",
    template: "%s | Red Mud"
  },
  description:
    "Enterprise platform for critical-minerals recovery from red mud residue.",
  applicationName: "Red Mud",
  openGraph: {
    title: "Red Mud Critical Minerals Platform",
    description:
      "Enterprise platform for critical-minerals recovery from red mud residue.",
    url: "https://red-mud.vercel.app",
    siteName: "Red Mud",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Mud Critical Minerals Platform",
    description:
      "Enterprise platform for critical-minerals recovery from red mud residue."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

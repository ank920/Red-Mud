import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://rare-earth.vercel.app"),
  title: {
    default: "Rare Earth Critical Minerals Platform",
    template: "%s | Rare Earth"
  },
  description:
    "Enterprise platform for critical-minerals recovery from rare earth residue.",
  applicationName: "Rare Earth",
  openGraph: {
    title: "Rare Earth Critical Minerals Platform",
    description:
      "Enterprise platform for critical-minerals recovery from rare earth residue.",
    url: "https://rare-earth.vercel.app",
    siteName: "Rare Earth",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Earth Critical Minerals Platform",
    description:
      "Enterprise platform for critical-minerals recovery from rare earth residue."
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

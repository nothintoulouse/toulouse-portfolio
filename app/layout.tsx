import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.toulouse.cloud"),
  title: {
    default: "Brayden Toulouse · Applied AI & Operations",
    template: "%s · Brayden Toulouse",
  },
  description:
    "Applied AI systems, workflow automation, and product delivery grounded in real hospitality operations.",
  openGraph: {
    type: "website",
    url: "https://portfolio.toulouse.cloud",
    title: "Brayden Toulouse · Applied AI & Operations",
    description: "I turn operational problems into working systems.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Brayden Toulouse — I turn operational problems into working systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayden Toulouse · Applied AI & Operations",
    description: "I turn operational problems into working systems.",
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: "#0F2E1C",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Loaded via <link> rather than next/font so the three toulouse.cloud
            sites share one font source. next/font resolves Google Fonts at
            build time, which also breaks in network-restricted build sandboxes. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Instrument+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

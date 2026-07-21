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
        width: 1792,
        height: 922,
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

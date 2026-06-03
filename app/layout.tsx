import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matchmadecouple.com"),
  title: "Match Made Couple LLC | Matching Outfits, Unmatched Adventures",
  description:
    "Diego and Tamara share Hawaii travel guidance and authentic media production for adventure tours, hotels, restaurants, and brands.",
  openGraph: {
    title: "Match Made Couple LLC | Matching Outfits, Unmatched Adventures",
    description:
      "Hawaii island guides, trusted travel resources, and authentic media production by Diego and Tamara.",
    url: "https://matchmadecouple.com/",
    siteName: "Match Made Couple LLC",
    images: [
      {
        url: "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2026/03/INTRO-PHOTO-SQUARE-2.png?resize=1024%2C1024&ssl=1",
        width: 1024,
        height: 1024,
        alt: "Diego and Tamara from Match Made Couple LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Match Made Couple LLC | Matching Outfits, Unmatched Adventures",
    description:
      "Hawaii island guides, trusted travel resources, and authentic media production by Diego and Tamara.",
    images: [
      "https://i0.wp.com/matchmadecouple.com/wp-content/uploads/2026/03/INTRO-PHOTO-SQUARE-2.png?resize=1024%2C1024&ssl=1",
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-ready')}}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

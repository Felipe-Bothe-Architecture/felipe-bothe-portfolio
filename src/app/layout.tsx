import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { MantineProvider } from "@/providers/MantineProvider";
import { SiteLayout } from "@/components/layout/SiteLayout";
import "@mantine/core/styles.css";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Bothe - Bespoke Residential Architecture",
  description: "High-end professional architectural monolith aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      {...mantineHtmlProps}
      className={`${notoSerif.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider>
          <SiteLayout>{children}</SiteLayout>
        </MantineProvider>
      </body>
    </html>
  );
}

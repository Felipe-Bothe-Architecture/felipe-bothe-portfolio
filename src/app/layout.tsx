import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { MantineProvider } from "@/providers/MantineProvider";
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
  title: "Atelier Minimal",
  description: "High-end professional architectural monolith aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}

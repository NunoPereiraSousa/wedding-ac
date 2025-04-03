import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Carol & Alex - 23 DE JUNHO DE 2025",
  description: "Carol & Alex - 23 DE JUNHO DE 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body>{children}</body>
    </html>
  );
}

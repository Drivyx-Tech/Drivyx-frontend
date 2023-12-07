"use client";

import "../globals.css";
import { MultiProviders } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MultiProviders>{children}</MultiProviders>
      </body>
    </html>
  );
}

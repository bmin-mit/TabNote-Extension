import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabNote",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

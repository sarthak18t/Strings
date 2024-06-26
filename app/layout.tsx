import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider, Provider } from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strings",
  description: "Strings is a thread alternative",
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <ContextProvider>{children}</ContextProvider>
        </Provider>
      </body>
    </html>
  );
}

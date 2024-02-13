import { Metadata } from "next";
import { Inter } from "next/font/google";
import { TrpcProvider } from "@client/utils/trpc";

import { APP_TITLE, APP_DESCRIPTION } from "@client/constants";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrpcProvider>
          <div>{children}</div>
        </TrpcProvider>
      </body>
    </html>
  );
};

export default RootLayout;

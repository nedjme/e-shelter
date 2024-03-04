import { Metadata } from "next";
import { Inter } from "next/font/google";
import { TrpcProvider } from "@client/utils/trpc";

import { APP_TITLE, APP_DESCRIPTION } from "@client/constants";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import "@client/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

type LocalizationProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

const LocaleLayout: React.FC<LocalizationProps> = ({
  children,
  params: { locale },
}) => {
  const messages = useMessages();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <TrpcProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </TrpcProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;

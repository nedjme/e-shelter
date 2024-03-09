import { Inter } from "next/font/google";
import { TrpcProvider } from "@client/utils/trpc";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import "@client/styles/globals.css";
import AppLayout from "@client/layouts/AppLayout";

const inter = Inter({ subsets: ["latin"] });

type LocalizationProps = {
  children: React.ReactNode;
  params: { locale: string };
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
            <AppLayout>{children}</AppLayout>
          </NextIntlClientProvider>
        </TrpcProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;

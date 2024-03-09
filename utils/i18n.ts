import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { pathnames } from "@/constants/pathnames";
import { locales } from "@/constants/locales";

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });

export type Pathname = keyof typeof pathnames;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const baseLocale = new Intl.Locale(locale).baseName;
  if (!locales.includes(baseLocale)) notFound();

  return {
    messages: (await import(`../messages/${baseLocale}.json`)).default,
  };
});

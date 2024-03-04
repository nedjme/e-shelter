import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

// Can be imported from a shared config
export const locales = ["en", "fr"];

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const baseLocale = new Intl.Locale(locale).baseName;
  if (!locales.includes(baseLocale)) notFound();

  return {
    messages: (await import(`../messages/${baseLocale}.json`)).default,
  };
});

import { Pathnames } from "next-intl/navigation";
import { locales } from "./locales";

export const pathnames = {
  "/": "/",
  "/dashboard": "/dashboard",
  "/records": "/records",
} satisfies Pathnames<typeof locales>;

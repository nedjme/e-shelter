import { Pathnames } from "next-intl/navigation";
import { locales } from "./locales";

export const pathnames = {
  "/": "/",
  "/dashboard": "/dashboard",
  "/records": "/records",
  "/login": "/login",
  "/register": "/register",
  "/privacy": "/privacy",
  "/terms": "/terms",
} satisfies Pathnames<typeof locales>;

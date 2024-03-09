import { ReactNode } from "react";
import AuthLayout from "@client/layouts/AuthLayout";

type UserLayoutProps = {
  children: ReactNode;
};

export default function AuthenticationLayout({ children }: UserLayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}

import { ReactNode } from "react";
import AppLayout from "@/layouts/AppLayout";

type UserLayoutProps = {
  children: ReactNode;
};

export default function UserLayout({ children }: UserLayoutProps) {
  return <AppLayout>{children}</AppLayout>;
}

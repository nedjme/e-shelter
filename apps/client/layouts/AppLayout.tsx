import React from "react";

import { Sidebar } from "@client/components/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="flex w-screen h-screen flex-row">
      <Sidebar />
      <main className="h-full w-full bg-slate-100">{children}</main>
    </div>
  );
}

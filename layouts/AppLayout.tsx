import React from "react";

import { Sidebar } from "@/components/Sidebar";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex flex-row h-full">
        <Sidebar />
        <main className="w-full h-full p-4 bg-slate-50">{children}</main>
      </div>
    </div>
  );
}

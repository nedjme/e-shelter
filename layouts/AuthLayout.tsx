import React from "react";

import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <main className="w-full h-full p-4 bg-slate-50">{children}</main>
    </div>
  );
}

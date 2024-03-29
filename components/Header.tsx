"use client";

import React from "react";
import LanguagePicker from "./LanguagePicker";
import Image from "next/image";
import { Link } from "@/utils/i18n";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-screen gap-2 px-4 bg-[#38B874] h-14 shadow-bottom-md border-bottom z-2">
      <Link href="/" className="flex flex-row gap-2 -mt-1 item-center">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
        <span className="mt-2 font-semibold text-white text-md">E-shelter</span>
      </Link>
      <LanguagePicker />
    </div>
  );
}

"use client";

import React from "react";

import { Pathname, useRouter } from "@client/utils/i18n";
import { LayoutDashboard, Library } from "lucide-react";
import {
  Command,
  CommandItem,
  CommandList,
} from "@client/components/ui/command";

import UserCard from "./UserCard";
import { useTranslations } from "next-intl";

type Props = {};

type MenuItem = { link: Pathname; icon: React.ElementType; text: string };

export function Sidebar(props: Props) {
  const router = useRouter();
  const t = useTranslations();

  const menuItems: MenuItem[] = [
    { link: "/dashboard", icon: LayoutDashboard, text: t("dashboard") },
    { link: "/records", icon: Library, text: t("records") },
  ];

  return (
    <div className="w-[300px] h-full shadow-md flex flex-col gap-2 pt-4 px-2 bg-[#2c3c54]">
      <div className="mb-2">
        <UserCard />
      </div>
      <Command className="h-fit">
        <CommandList>
          {menuItems.map((item) => (
            <CommandItem
              key={item.link}
              onSelect={() => router.push(item.link)}
              className="flex flex-row gap-2"
            >
              <item.icon className="w-4" />
              <span>{item.text}</span>
            </CommandItem>
          ))}
        </CommandList>
      </Command>
    </div>
  );
}

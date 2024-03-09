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

type Props = {};

type MenuItem = { link: Pathname; icon: React.ElementType; text: string };

export function Sidebar(props: Props) {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { link: "/dashboard", icon: LayoutDashboard, text: "Dashboard" },
    { link: "/records", icon: Library, text: "Records" },
  ];

  return (
    <div className="w-[300px] min-h-screen border shadow-md flex flex-col gap-2 pt-4">
      <UserCard />
      <Command>
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

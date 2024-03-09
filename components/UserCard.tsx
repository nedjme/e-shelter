import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

type Props = {
  email?: string;
  fullName?: string;
};

export default function UserCard({
  email = "test@shelter.com",
  fullName = "test user",
}: Props) {
  return (
    <Card className="flex flex-row gap-4 p-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-[14px]">{fullName}</p>
        <p className="text-[12px] text-neutral-500">{email}</p>
      </div>
    </Card>
  );
}

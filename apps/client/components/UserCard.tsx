import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@client/components/ui/avatar";
import { Card } from "@client/components/ui/card";

type Props = {
  email?: string;
  fullName?: string;
};

export default function UserCard({
  email = "test@shelter.com",
  fullName = "test user",
}: Props) {
  return (
    <Card className="p-2 m-1 flex flex-row gap-4">
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

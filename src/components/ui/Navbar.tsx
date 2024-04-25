"use client";

import Link from "next/link";
import { useAtomValue } from "jotai";

import { signInAnonymously } from "@/lib/firebase/auth";
import { UserAvatar } from "@/components/UserAvatar";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import { authPendingAtom, balanceAtom, userUidAtom } from "@/state/atoms";

function Navbar() {
  const isAuthPending = useAtomValue(authPendingAtom);
  const userUid = useAtomValue(userUidAtom);
  const balance = useAtomValue(balanceAtom);

  const handleLoginClick = () => {
    signInAnonymously();
  };

  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center px-5 m500:h-16 ">
      <div className="mx-auto flex w-[1252px] max-w-full px-12 items-center justify-between">
        <div className="flex items-center gap-10 m400:flex-1 m400:pl-5">
          <Link className="text-4xl font-bold m500:text-xl" href={"/"}>
            ACEFACE
          </Link>
        </div>

        <div className="flex items-center gap-10 m700:hidden"></div>

        <div className="flex items-center justify-end gap-2">
          {userUid && balance && (
            <Badge className="font-bold" text={String(balance)} />
          )}
          {!isAuthPending && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <UserAvatar />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

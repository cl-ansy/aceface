"use client";

import Link from "next/link";
import { useAtomValue } from "jotai";

import { AuthDropdownMenu } from "@/components/AuthDropdownMenu";
import { AuthDialog } from "@/components/AuthDialog";
import Badge from "@/components/ui/Badge";

import { balanceAtom, userUidAtom } from "@/state/userAtoms";

function Navbar() {
  const userUid = useAtomValue(userUidAtom);
  const balance = useAtomValue(balanceAtom);

  return (
    <nav
      className="m500:h-16 pointer-events-none fixed left-0 top-0 z-10 mx-auto flex h-20 w-full
        items-center px-5"
    >
      <div className="mx-auto flex w-[1252px] max-w-full items-center justify-between px-12">
        <div className="m400:flex-1 m400:pl-5 flex items-center gap-10">
          <Link className="m500:text-xl text-4xl font-bold" href={"/"}>
            ACEFACE
          </Link>
        </div>

        <div className="m700:hidden flex items-center gap-10"></div>

        <div className="pointer-events-auto flex items-center justify-end gap-2">
          {userUid && balance && (
            <Badge className="font-bold" text={String(balance)} />
          )}
          {userUid && <AuthDropdownMenu />}
          {!userUid && <AuthDialog />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

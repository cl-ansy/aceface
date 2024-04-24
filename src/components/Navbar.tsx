"use client";

import Link from "next/link";
import { useAtomValue } from "jotai";
import { AiOutlineUser } from "react-icons/ai";

import { signInAnonymously } from "@/lib/firebase/auth";
// import { getWalletByUserId } from "@/lib/firebase/firestore";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

import { authPendingAtom, displayNameAtom, userUidAtom } from "@/state/atoms";

function Navbar() {
  const isAuthPending = useAtomValue(authPendingAtom);
  const displayName = useAtomValue(displayNameAtom);
  const userUid = useAtomValue(userUidAtom);

  const handleLoginClick = () => {
    signInAnonymously();
  };

  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-white px-5 m500:h-16 ">
      <div className="mx-auto flex w-[1252px] max-w-full px-12 items-center justify-between">
        <div className="flex items-center gap-10 m400:flex-1 m400:pl-5">
          <Link className="text-4xl font-bold m500:text-xl" href={"/"}>
            ACEFACE
          </Link>
        </div>

        <div className="flex items-center gap-10 m700:hidden"></div>
        <div className="flex items-center justify-end gap-2">
          {!isAuthPending && userUid && (
            <Avatar>
              <AiOutlineUser className="h-8 w-8" />
            </Avatar>
          )}
          {!isAuthPending && !userUid && (
            <Button
              onClick={handleLoginClick}
              className="flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

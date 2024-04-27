import { useAtomValue, useSetAtom } from "jotai";

import { signInAnonymously } from "@/lib/firebase/auth";
import { UserAvatar } from "@/components/UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import { userUidAtom, displayNameAtom, clearAuthAtom } from "@/state/atoms";

function AuthContent() {
  const displayName = useAtomValue(displayNameAtom);
  const setClearAuthAtom = useSetAtom(clearAuthAtom);

  const handleSignOutClick = () => {
    setClearAuthAtom();
  };

  return (
    <DropdownMenuContent>
      <DropdownMenuLabel>{displayName}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleSignOutClick}>Sign out</DropdownMenuItem>
    </DropdownMenuContent>
  );
}

function UnauthContent() {
  const handleLoginClick = () => {
    signInAnonymously();
  };

  return (
    <DropdownMenuContent>
      <DropdownMenuItem onClick={handleLoginClick}>Sign in</DropdownMenuItem>
    </DropdownMenuContent>
  );
}

export function AuthDropdownMenu() {
  const userUid = useAtomValue(userUidAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar />
      </DropdownMenuTrigger>
      {userUid ? <AuthContent /> : <UnauthContent />}
    </DropdownMenu>
  );
}

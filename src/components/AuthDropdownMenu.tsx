import { useAtomValue } from "jotai";

import { signInAnonymously, signOut } from "@/lib/firebase/auth";
import { UserAvatar } from "@/components/UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import { displayNameAtom } from "@/state/atoms";

export function AuthDropdownMenu() {
  const displayName = useAtomValue(displayNameAtom);

  const handleLoginClick = () => {
    signInAnonymously();
  };

  const handleSignOutClick = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{displayName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem onClick={handleLoginClick}>Sign in</DropdownMenuItem> */}
        <DropdownMenuItem onClick={handleSignOutClick}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { useAtomValue } from "jotai";
import { AiOutlineUser } from "react-icons/ai";

import Avatar from "@/components/ui/Avatar";

import { displayNameAtom } from "@/state/atoms";

export function UserAvatar() {
  const displayName = useAtomValue(displayNameAtom);

  return (
    <Avatar>
      {displayName ? displayName[0] : <AiOutlineUser className="h-8 w-8" />}
    </Avatar>
  );
}

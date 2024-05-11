import { useAtomValue } from "jotai";
import { AiOutlineUser } from "react-icons/ai";

import Avatar from "@/components/ui/Avatar";

import { displayNameAtom, userUidAtom } from "@/state/userAtoms";

export function UserAvatar() {
  const displayName = useAtomValue(displayNameAtom);
  const userUid = useAtomValue(userUidAtom);

  return (
    <Avatar>
      {userUid && displayName && displayName[0]}
      {!userUid && <AiOutlineUser className="h-8 w-8" />}
    </Avatar>
  );
}

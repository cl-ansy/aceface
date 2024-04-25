import { AiOutlineUser } from "react-icons/ai";

import Avatar from "@/components/ui/Avatar";

export function UserAvatar() {
  return (
    <Avatar>
      <AiOutlineUser className="h-8 w-8" />
    </Avatar>
  );
}

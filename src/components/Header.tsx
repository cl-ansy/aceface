"use client";

import { useUserStore } from "@/state/userStore";

export default function Header() {
  const user = useUserStore((state) => state.user);

  return (
    <header>
      {user.uid}
    </header>
  );
}

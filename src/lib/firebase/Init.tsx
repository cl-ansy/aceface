"use client";

import { useEffect } from "react";

import { useUserStore } from "@/state/userStore";
import { signInAnonymously } from "@/lib/firebase/auth";

export default function Header() {
  const subscribe = useUserStore((state) => state.subscribe);

  useEffect(() => {
    const unsubscribe = subscribe();
    signInAnonymously();
    return () => unsubscribe();
  }, [subscribe]);

  return <></>;
}

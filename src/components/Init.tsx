"use client";

import { useEffect } from "react";

import {
  useUserStore
} from "@/state/userStore";

export default function Header() {
  const subscribe = useUserStore((state) => state.subscribe);
  const signInAnonymously = useUserStore((state) => state.signInAnonymously);

  useEffect(() => {
    const unsubscribe = subscribe();

    signInAnonymously();

    return () => unsubscribe();
  }, []);

  return (
    <></>
  );
}

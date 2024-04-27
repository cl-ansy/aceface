"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";

import { onAuthStateChanged } from "@/lib/firebase/auth";
import { authAtom, authPendingAtom } from "@/state/atoms";

const useAuthSub = () => {
  const setAuth = useSetAtom(authAtom);
  const setAuthPending = useSetAtom(authPendingAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setAuth(user);
      setAuthPending(false);
    });
    return unsubscribe;
  }, [setAuth, setAuthPending]);
};

export function Subscribers() {
  useAuthSub();
  return null;
}

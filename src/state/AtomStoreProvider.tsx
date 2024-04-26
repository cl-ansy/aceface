"use client";

import { type ReactNode, useEffect } from "react";
import { Provider, createStore, useSetAtom } from "jotai";

import { onAuthStateChanged } from "@/lib/firebase/auth";
import { atomStore, authAtom, authPendingAtom } from "@/state/atoms";

type AtomStoreProviderProps = {
  children: ReactNode;
};

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

function FirebaseSubs() {
  useAuthSub();
  return null;
}

export default function AtomStoreProvider({
  children,
}: AtomStoreProviderProps) {
  return (
    <Provider store={atomStore}>
      <FirebaseSubs />
      {children}
    </Provider>
  );
}

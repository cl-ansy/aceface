"use client";

import { Provider } from "jotai";

import { Subscribers } from "@/firebase/subscribers";
import { atomStore } from "@/state/userAtoms";

type AtomStoreProviderProps = {
  children: React.ReactNode;
};

export default function AtomStoreProvider({
  children,
}: AtomStoreProviderProps) {
  return (
    <Provider store={atomStore}>
      <Subscribers />
      {children}
    </Provider>
  );
}

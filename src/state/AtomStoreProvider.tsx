"use client";

import { Provider } from "jotai";

import { Subscribers } from "@/state/subscribers";
import { atomStore } from "@/state/atoms";

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

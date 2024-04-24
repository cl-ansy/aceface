"use client";

import { ReactNode } from "react";
import { Provider, createStore } from "jotai";

type AtomStoreProviderProps = {
  children: ReactNode;
};

export const atomStore = createStore();

export default function AtomStoreProvider({
  children,
}: AtomStoreProviderProps) {
  return <Provider store={atomStore}>{children}</Provider>;
}

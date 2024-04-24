"use client";

import { ReactNode } from "react";
import { Provider, createStore } from "jotai";

import { authAtom } from "@/state/atoms";

type AtomStoreProviderProps = {
  children: ReactNode;
};

const atomStore = createStore();

export default function AtomStoreProvider({
  children,
}: AtomStoreProviderProps) {
  return <Provider store={atomStore}>{children}</Provider>;
}

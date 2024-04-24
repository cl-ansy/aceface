import { atom } from "jotai";
import { User } from "firebase/auth";

import { onAuthStateChanged } from "@/lib/firebase/auth";

export const authAtom = atom<User | null>(null);
authAtom.onMount = (setAtom) => {
  const unsubscribe = onAuthStateChanged((user) => {
    setAtom(user);
  });

  return () => unsubscribe();
};

export const walletAtom = atom({ balance: 0 });

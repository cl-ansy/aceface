import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { User } from "firebase/auth";

import { onAuthStateChanged } from "@/lib/firebase/auth";

// Auth
export const authAtom = atom<User | null>(null);
authAtom.onMount = (setAtom) => {
  const unsubscribe = onAuthStateChanged((user) => {
    setAtom(user);
  });

  return () => unsubscribe();
};
export const userUidAtom = atom((get) => get(authAtom)?.uid);
export const displayNameAtom = atom(
  (get) => get(authAtom)?.displayName || "Anonymous"
);

// Wallet
export const walletAtom = atom({ balance: 0 });
export const balanceAtom = focusAtom(walletAtom, (optic) =>
  optic.prop("balance")
);

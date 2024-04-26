import { atom, createStore } from "jotai";
import { focusAtom } from "jotai-optics";
import { User } from "firebase/auth";

import { getWalletByUserId } from "@/lib/firebase/firestore";
import { DocumentData } from "firebase/firestore";

export type Wallet = {
  balance?: number;
  userUid?: string;
};

export const atomStore = createStore();

// Auth
export const authPendingAtom = atom<boolean>(true);
export const authAtom = atom<User | null>(null);

export const userUidAtom = atom<string | undefined>(
  (get) => get(authAtom)?.uid
);
export const displayNameAtom = atom<string | undefined>(
  (get) => get(authAtom)?.displayName || "Anonymous"
);

// Wallet
export const walletAtom = atom<Wallet>({
  userUid: undefined,
  balance: undefined,
});
export const balanceAtom = focusAtom(walletAtom, (optic) =>
  optic.prop("balance")
);

// Subscribers
atomStore.sub(userUidAtom, () => {
  const userUid = atomStore.get(userUidAtom);
  const setBalance = (data: DocumentData | undefined) => {
    atomStore.set(walletAtom, {
      userUid: data && data.userUid,
      balance: data && data.balance,
    });
  };
  const unsub = getWalletByUserId(userUid || "", setBalance);
  return () => unsub();
});

import { atom, createStore } from "jotai";
import { focusAtom } from "jotai-optics";
import { Unsubscribe, type User } from "firebase/auth";
import { type DocumentData } from "firebase/firestore";

import { signOut } from "@/firebase/auth";
import { getWalletByUserId } from "@/firebase/firestore";

export type Wallet = {
  balance?: number;
  userUid?: string;
};

type WalletUnsubAtom = {
  fn: (() => void) | undefined;
};

export const atomStore = createStore();

// Auth
export const authPendingAtom = atom<boolean>(true);

export const authAtom = atom<User | null>(null);

export const clearAuthAtom = atom(null, (get, set) => {
  set(replaceWalletUnsubAtom, { fn: undefined });
  set(walletAtom, { userUid: undefined, balance: undefined });
  signOut();
});

export const userUidAtom = atom<string | undefined>(
  (get) => get(authAtom)?.uid,
);

export const displayNameAtom = atom<string | undefined>(
  (get) => get(authAtom)?.displayName || "Anonymous",
);

// Wallet
export const walletAtom = atom<Wallet>({
  userUid: undefined,
  balance: undefined,
});

const walletUnsubAtom = atom<WalletUnsubAtom>({ fn: undefined });

export const replaceWalletUnsubAtom = atom(
  null,
  (get, set, newUnsub: WalletUnsubAtom) => {
    const unsub = get(walletUnsubAtom);
    if (unsub.fn) unsub.fn();
    set(walletUnsubAtom, newUnsub);
  },
);

export const balanceAtom = focusAtom(walletAtom, (optic) =>
  optic.prop("balance"),
);

// Subscribers
atomStore.sub(userUidAtom, () => {
  const userUid = atomStore.get(userUidAtom);
  if (!userUid) return;

  const unsub = getWalletByUserId(userUid, (data: DocumentData | undefined) => {
    atomStore.set(walletAtom, {
      userUid: data && data.userUid,
      balance: data && data.balance,
    });
  });

  atomStore.set(replaceWalletUnsubAtom, { fn: unsub });
  return unsub;
});

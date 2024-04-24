import { atom, createStore } from "jotai";
import { focusAtom } from "jotai-optics";
import { User } from "firebase/auth";

// import { atomStore } from "@/state/AtomStoreProvider";
import { onAuthStateChanged } from "@/lib/firebase/auth";
import { type Wallet, getWalletByUserId } from "@/lib/firebase/firestore";

export const atomStore = createStore();

// Auth
export const authPendingAtom = atom(true);
export const authAtom = atom<User | null>(null);

export const userUidAtom = atom((get) => get(authAtom)?.uid);
export const displayNameAtom = atom(
  (get) => get(authAtom)?.displayName || "Anonymous"
);

// Wallet
export const walletAtom = atom({ balance: 0 });
export const balanceAtom = focusAtom(walletAtom, (optic) =>
  optic.prop("balance")
);

// Subscribers
atomStore.sub(userUidAtom, () => {
  const userUid = atomStore.get(userUidAtom);
  const setBalance = (wallet: Wallet) => {
    // atomStore.set(balanceAtom, balance);
  };
  const unsub = getWalletByUserId(userUid || "", setBalance);
  return () => unsub();
});

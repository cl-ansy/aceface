import { atom } from "jotai";
import { User } from "firebase/auth";

import { onAuthStateChanged } from "@/lib/firebase/auth";

const walletAtom = atom({ balance: 0 });

const authAtom = atom<User | null>(null);

authAtom.onMount = (setAtom) => {
  const unsubscribe = onAuthStateChanged((user) => {
    setAtom(user);
  });

  return () => unsubscribe();
};

export default authAtom;

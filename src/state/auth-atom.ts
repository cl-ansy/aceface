import { atom, useAtom } from "jotai";

import {
  type User,
  onAuthStateChanged,
  signInAnonymously,
} from "@/lib/firebase/auth";

const authAtom = atom<User>(null);

authAtom.onMount = (setAtom) => {
  const unsubscribe = onAuthStateChanged((user) => {
    setAtom(user);
  });

  signInAnonymously();

  return unsubscribe;
};

export default authAtom;

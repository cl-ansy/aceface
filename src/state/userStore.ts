import { create } from "zustand";

import {
  onAuthStateChanged,
  signInAnonymously as _signInAnonymously,
} from "@/lib/firebase/auth";

export interface User {
  uid: string;
}

interface UserState {
  user: User | null;
  subscribe: () => () => void;
  signInAnonymously: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    uid: "",
  },
  subscribe: () =>
    onAuthStateChanged((user) => {
      set({ user: user });
    }),
  signInAnonymously: () => _signInAnonymously(),
}));

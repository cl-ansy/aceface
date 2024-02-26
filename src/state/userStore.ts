import { create } from "zustand";

import {
  onAuthStateChanged,
  signInAnonymously as _signInAnonymously,
} from "@/lib/firebase/auth";

export interface User {
  uid: string
}

interface UserState {
  user: User
  subscribe: () => () => void
  signInAnonymously: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    uid: "",
  },
  subscribe: () => onAuthStateChanged((user: User) => {
    set({ user: user });
  }),
  signInAnonymously: () => _signInAnonymously()
}));

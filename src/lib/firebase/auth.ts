import {
  NextOrObserver,
  User,
  onAuthStateChanged as _onAuthStateChanged,
  signInAnonymously as _signInAnonymously,
} from "firebase/auth";

import { auth } from "@/lib/firebase/firebase";

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInAnonymously() {
  try {
    await _signInAnonymously(auth);
  } catch (error) {
    console.log("Error signing in anonymously", error);
  }
}

export async function signOut() {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out", error);
  }
}

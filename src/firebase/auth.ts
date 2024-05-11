import {
  NextOrObserver,
  User,
  onAuthStateChanged as _onAuthStateChanged,
  signInAnonymously as _signInAnonymously,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/firebase/firebase";

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return _onAuthStateChanged(auth, cb);
}

export async function createUserWithEmailAndPassword(
  email: string,
  password: string,
) {
  try {
    await _createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error creating account", error);
  }
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

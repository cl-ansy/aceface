"use client";

import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
  signInAnonymously,
} from "@/lib/firebase/auth";

interface User {
  uid: string;
}

export default function Header() {
  const [user, setUser] = useState({
    uid: '',
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user: User) => {
      setUser(user);
    })

    signInAnonymously();

    return () => unsubscribe();
  }, []);

  return (
    <header>
      {user.uid}
    </header>
  );
}

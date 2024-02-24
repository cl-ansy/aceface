"use client";

import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInAnonymously,
} from "@/lib/firebase/auth";

export default function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
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

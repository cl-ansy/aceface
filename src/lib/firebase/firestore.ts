import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { firestore } from "@/lib/firebase/firebase";

export const getGames = async () => {
  const gamesSnapshot = await getDocs(collection(firestore, "games"));
  gamesSnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

export type Wallet = {
  balance: number;
  userUid: string;
};

export const getWalletByUserId = (
  userUid: string,
  setter: (wallet: Wallet) => void
) => {
  // const userWalletQuery = query(
  //   collection(firestore, "wallets"),
  //   where("userUid", "==", userUid)
  // );
  // const unsubscribe = onSnapshot(userWalletQuery, (querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.data());
  //   });
  // });
  const unsub = onSnapshot(doc(firestore, "wallets", userUid), (doc) => {
    console.log("Current data: ", doc.data());
  });

  return unsub;
};

import {
  collection,
  getDocs,
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

export const getWalletByUserId = (userUid: string) => {
  const userWalletQuery = query(
    collection(firestore, "wallets"),
    where("userUid", "==", userUid)
  );
  const unsubscribe = onSnapshot(userWalletQuery, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

  return unsubscribe;
};

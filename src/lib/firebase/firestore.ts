import { doc, onSnapshot, DocumentData } from "firebase/firestore";

import { firestore } from "@/lib/firebase/firebase";

export const getWalletByUserId = (
  userUid: string,
  cb: (wallet: DocumentData | undefined) => void
) => {
  const unsub = onSnapshot(doc(firestore, "wallets", userUid), (doc) => {
    // console.log("Current data: ", doc.data());
    cb(doc.data());
  });

  return unsub;
};

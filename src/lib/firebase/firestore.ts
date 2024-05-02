import { doc, onSnapshot, DocumentData } from "firebase/firestore";

import { firestore } from "@/lib/firebase/firebase";

export const getWalletByUserId = (
  userUid: string | undefined,
  cb: (wallet: DocumentData | undefined) => void,
) => {
  if (!userUid) return;

  const unsub = onSnapshot(doc(firestore, "wallets", userUid), (doc) => {
    cb(doc.data());
  });

  return unsub;
};

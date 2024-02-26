import { collection, getDocs } from "firebase/firestore";

import { firestore } from "@/lib/firebase/firebase";

export const getGames = async () => {
    const gamesSnapshot = await getDocs(collection(firestore, "games"));
    gamesSnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}

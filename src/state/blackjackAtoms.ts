import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { focusAtom } from "jotai-optics";

import type { Player } from "@/game/blackjack/blackjackTypes";

const initialGameData = {
  type: "blackjack",
  rules: {
    deckCount: 6,
    penetration: 0.65,
  },
  shoe: {
    shoeUid: "",
    remaining: 20,
  },
  round: {
    roundUid: "",
    status: "new",
    turn: 1,
  },
  players: {
    1: { hand: {} },
    2: { hand: {} },
    3: {
      userUid: "asdf",
      handUid: "",
      displayName: "Wowza",
      hand: {
        0: "HA",
        1: "HQ",
      },
    },
    4: { hand: {} },
    5: { hand: {} },
  },
  dealer: {
    handUid: "",
    hand: ["0", "SK"],
  },
};

export const gameAtom = atom(initialGameData);

export const gameUidAtom = atom("");

export const rulesAtom = atom((get) => get(gameAtom).rules);

export const shoeAtom = atom((get) => get(gameAtom).shoe);

export const roundAtom = atom((get) => get(gameAtom).round);

export const playersAtom = atom((get) => get(gameAtom).players);

export const playerOneAtom = atom((get) => get(playersAtom)[1]);
export const playerTwoAtom = atom((get) => get(playersAtom)[2]);
export const playerThreeAtom = atom<Player>((get) => get(playersAtom)[3]);
export const playerFourAtom = atom((get) => get(playersAtom)[4]);
export const playerFiveAtom = atom((get) => get(playersAtom)[5]);

// export const playerFamily = atomFamily((playerNum) =>
//   atom((get) => get(playersAtom)[playerNum as keyof Players]),
// );

export const dealerAtom = atom((get) => get(gameAtom).dealer);

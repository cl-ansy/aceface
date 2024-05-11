import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

import type { Game, Players } from "@/game/blackjack/blackjackTypes";

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
    1: null,
    2: null,
    3: {
      userUid: "asdf",
      handUid: "",
      displayName: "Wowza",
      hand: {
        0: "HA",
        1: "HQ",
      },
    },
    4: null,
    5: null,
  },
  dealer: {
    handUid: "",
    hand: {
      0: "0",
      1: "SK",
    },
  },
};

const gameAtom = atom<Game>(initialGameData);

export const gameUidAtom = atom("");

export const rulesAtom = atom((get) => get(gameAtom).rules);

export const shoeAtom = atom((get) => get(gameAtom).shoe);

export const roundAtom = atom((get) => get(gameAtom).round);

export const playersAtom = atom((get) => get(gameAtom).players);

export const playerFamily = atomFamily((playerNum) =>
  atom((get) => get(playersAtom)[playerNum as keyof Players]),
);

export const dealerAtom = atom((get) => get(gameAtom).dealer);

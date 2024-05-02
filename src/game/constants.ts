export const TABLE_HEIGHT = 190;

export const SUITS = ["H", "S", "C", "D"];

export const RANKS = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
];

export type Card = {
  suit: string;
  rank: string;
};

export const DECK = (() =>
  SUITS.flatMap((suit) => RANKS.map((rank) => `${suit}${rank}`)))();

export type Rules = {
  deckCount: number;
  penetration: number;
};

export type Shoe = {
  shoeUid: string;
  remaining: number;
};

export type Round = {
  roundUid: string;
  status: string;
  turn: number;
};

export type Hand = {
  [key: number]: string;
};

export type Player = {
  handUid?: string;
  userUid?: string;
  displayName?: string;
  hand: Hand;
};

export type Players = {
  1: Player | null;
  2: Player | null;
  3: Player | null;
  4: Player | null;
  5: Player | null;
};

export type Dealer = {
  handUid?: string;
  hand: Hand;
};

export type Game = {
  type: string;
  rules: Rules;
  shoe: Shoe;
  round: Round;
  players: Players;
  dealer: Dealer;
};

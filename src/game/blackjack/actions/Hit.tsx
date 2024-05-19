import { useAtom } from "jotai";

import { Button } from "@/components/ui/Button";
import { gameAtom } from "@/state/blackjackAtoms";

// import { DECK } from "@/lib/constants";

export const HitButton = () => {
  const [game, setGame] = useAtom(gameAtom);

  const handleClick = () => {
    const updatedGame = {
      ...game,
      players: {
        ...game.players,
        3: {
          ...game.players[3],
          hand: {
            ...game.players[3].hand,
            [Object.keys(game.players[3].hand).length]: "S3",
          },
        },
      },
    };
    setGame(updatedGame);
  };

  return (
    <Button size="xs" onClick={handleClick}>
      H
    </Button>
  );
};

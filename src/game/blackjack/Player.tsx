import { useAtomValue } from "jotai";

import CardMesh from "@/game/common/meshes/CardMesh";
import { playerFamily } from "@/state/blackjackAtoms";

type PlayerProps = {
  position: number;
};

export default function Player({ position }: PlayerProps) {
  const player = useAtomValue(playerFamily(position));

  // console.log(player);

  return null;
}

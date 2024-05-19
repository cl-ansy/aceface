"use client";

import tunnel from "tunnel-rat";

import Canvas from "@/game/Canvas";
import TableScene from "@/game/common/scenes/TableScene";
import BlackjackScene from "@/game/blackjack/BlackjackScene";

export const ui = tunnel();

export default function Blackjack() {
  return (
    <>
      <div id="ui">
        <ui.Out />
      </div>
      <Canvas>
        <TableScene>
          <BlackjackScene />
        </TableScene>
      </Canvas>
    </>
  );
}

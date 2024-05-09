import Canvas from "@/game/Canvas";
import TableScene from "@/game/common/scenes/TableScene";
import BlackjackScene from "@/game/blackjack/BlackjackScene";

export default function Page() {
  return (
    <Canvas>
      <TableScene>
        <BlackjackScene />
      </TableScene>
    </Canvas>
  );
}

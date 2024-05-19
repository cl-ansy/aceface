import { ui } from "@/game/blackjack/Blackjack";
import { HitButton } from "@/game/blackjack/actions/Hit";
import { StandButton } from "@/game/blackjack/actions/Stand";

export const PlayerUI = () => {
  return (
    <ui.In>
      <div className="flex space-x-3">
        <HitButton />
        <StandButton />
      </div>
    </ui.In>
  );
};

import { Html } from "@react-three/drei";

import { HitButton } from "@/game/blackjack/actions/Hit";
import { StandButton } from "@/game/blackjack/actions/Stand";

export const PlayerInterface = () => {
  return (
    <Html center={true} position={[0, 10, 3]}>
      <div className="flex space-x-3">
        <HitButton />
        <StandButton />
      </div>
    </Html>
  );
};

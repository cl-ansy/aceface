import { Html } from "@react-three/drei";

import { HitButton } from "@/game/Actions/Hit";
import { StandButton } from "@/game/Actions/Stand";

export const HandActions = () => {
  return (
    <Html center={true} position={[0, 10, 3]}>
      <div className="flex space-x-4">
        <HitButton />
        <StandButton />
      </div>
    </Html>
  );
};

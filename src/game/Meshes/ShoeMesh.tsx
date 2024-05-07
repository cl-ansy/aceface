import { MeshInstance as Card } from "@/game/Meshes/GLTF/InstanceProvider";

import { degreesToRadians } from "@/lib/utils";
import { DECK, TABLE_HEIGHT } from "@/game/constants";

export default function ShoeMesh() {
  return (
    <Card
      name="Joker"
      position-x={5.5}
      position-y={TABLE_HEIGHT}
      position-z={-4.5}
      rotation-y={degreesToRadians(10)}
      rotation-z={degreesToRadians(180)}
    />
  );
}

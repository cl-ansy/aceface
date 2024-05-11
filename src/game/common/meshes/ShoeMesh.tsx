import { MeshInstance as Card } from "@/game/common/meshes/gltf/InstanceProvider";

import { getShoePosition } from "@/lib/animations";

export default function ShoeMesh() {
  const {
    shoePositionX,
    shoePositionY,
    shoePositionZ,
    shoeRotationY,
    shoeRotationZ,
  } = getShoePosition();

  return (
    <Card
      name="Joker"
      position-x={shoePositionX}
      position-y={shoePositionY}
      position-z={shoePositionZ}
      rotation-y={shoeRotationY}
      rotation-z={shoeRotationZ}
    />
  );
}

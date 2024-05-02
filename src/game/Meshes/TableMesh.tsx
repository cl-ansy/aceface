import { useGLTF } from "@react-three/drei";

export default function TableMesh() {
  let glb = useGLTF("/assets/table/Blackjack_Table.glb");
  return (
    <primitive
      rotation-y={-Math.PI / 2}
      position={[0, 0, 0]}
      scale={2}
      object={glb.scene}
    />
  );
}

import { OrbitControls } from "@react-three/drei";

export default function TableControls() {
  return (
    <OrbitControls
      enableZoom
      enablePan={false}
      enableRotate={false}
      minDistance={200}
      maxDistance={1000}
    />
  );
}

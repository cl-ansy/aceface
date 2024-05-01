import { OrbitControls } from "@react-three/drei";

export default function TableControls() {
  return (
    <OrbitControls
      makeDefault
      minZoom={0.1}
      maxZoom={20}
      target={[0, 50, 100]}
    />
  );
}

import { ReactNode } from "react";
import { PerspectiveCamera } from "@react-three/drei";

export default function FloorCamera({ children }: { children?: ReactNode }) {
  return (
    <PerspectiveCamera
      zoom={1}
      near={0.1}
      far={1000}
      fov={50}
      position={[0, -75, 450]}
      rotation={[0.3, 0, 0]}
      makeDefault
    >
      {children}
    </PerspectiveCamera>
  );
}

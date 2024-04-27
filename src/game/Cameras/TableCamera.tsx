import { ReactNode } from "react";
import { PerspectiveCamera } from "@react-three/drei";

export default function FloorCamera({ children }: { children?: ReactNode }) {
  return (
    <PerspectiveCamera
      zoom={1}
      near={0.1}
      far={1000}
      fov={100}
      position={[0, 0, 500]}
      makeDefault
    >
      {children}
    </PerspectiveCamera>
  );
}

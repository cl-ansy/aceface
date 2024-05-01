import { ReactNode } from "react";
import { OrthographicCamera } from "@react-three/drei";

export default function FloorCamera({ children }: { children?: ReactNode }) {
  return (
    <OrthographicCamera
      zoom={4.5}
      near={0.1}
      far={1000}
      position={[0, -50, 400]}
      rotation={[0.3, 0, 0]}
      makeDefault
    >
      {children}
    </OrthographicCamera>
  );
}

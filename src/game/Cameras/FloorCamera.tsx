import { ReactNode } from "react";
import { OrthographicCamera } from "@react-three/drei";

export default function FloorCamera({ children }: { children?: ReactNode }) {
  return (
    <OrthographicCamera
      zoom={0.4}
      near={0}
      far={200}
      position={[0, 0, 200]}
      makeDefault>
      {children}
    </OrthographicCamera>
  );
}

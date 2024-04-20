import { ReactNode } from "react";
import { OrthographicCamera } from "@react-three/drei";

export default function TopDownCamera({ children }: { children?: ReactNode }) {
  return (
    <OrthographicCamera
      zoom={0.4}
      near={0}
      far={100}
      position={[0, 0, 100]}
      makeDefault
    >
      {children}
    </OrthographicCamera>
  );
}

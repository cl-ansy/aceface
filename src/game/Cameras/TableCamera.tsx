import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";

export default function TableCamera(props: any) {
  return (
    <PerspectiveCamera
      makeDefault
      // position={[0, 26, 11.5]}
      fov={50}
      near={0.01}
      far={100}
      {...props}
    />
  );
}

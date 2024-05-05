import { PerspectiveCamera } from "@react-three/drei";

export default function FloorCamera({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <PerspectiveCamera makeDefault near={0.1} far={1000} fov={32}>
      {children}
    </PerspectiveCamera>
  );
}

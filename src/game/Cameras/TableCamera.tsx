import { OrthographicCamera } from "@react-three/drei";

export default function FloorCamera({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <OrthographicCamera
      zoom={5}
      near={0.1}
      far={1000}
      position={[0, -30, 300]}
      makeDefault
    >
      {children}
    </OrthographicCamera>
  );
}

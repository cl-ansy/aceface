import { OrthographicCamera } from "@react-three/drei";

export default function FloorCamera({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <OrthographicCamera
      zoom={4}
      near={0.1}
      far={1000}
      position={[0, 0, 500]}
      rotation={[0.3, 0, 0]}
      makeDefault
    >
      {children}
    </OrthographicCamera>
  );
}

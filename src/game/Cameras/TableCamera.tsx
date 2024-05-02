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
      position={[0, 250, 100]}
      makeDefault
    >
      {children}
    </OrthographicCamera>
  );
}

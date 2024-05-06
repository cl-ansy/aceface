import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

export default function TableCamera(props: any) {
  return (
    <PerspectiveCamera
      makeDefault
      fov={75}
      aspect={2}
      near={0.01}
      far={1000}
      {...props}
    />
    // <OrthographicCamera makeDefault near={0.1} far={1000} {...props} />
  );
}

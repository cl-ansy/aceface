import { useEffect, useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import CameraControls from "camera-controls";

import {
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
} from "three";

CameraControls.install({
  THREE: {
    Vector2,
    Vector3,
    Vector4,
    Quaternion,
    Matrix4,
    Spherical,
    Box3,
    Sphere,
    Raycaster,
  },
});
extend({ CameraControls });

export default function TableControls(props: any) {
  const ref = useRef<CameraControls>(null);

  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    ref.current?.setLookAt(0, 350, 125, 0, 100, -50);
  });

  useFrame((_, delta) => ref.current?.update(delta));

  // @ts-ignore
  return <cameraControls ref={ref} args={[camera, gl.domElement]} {...props} />;
}

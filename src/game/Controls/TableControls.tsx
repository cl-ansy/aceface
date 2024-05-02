import { useEffect, useRef } from "react";
import { extend, invalidate, useFrame, useThree } from "@react-three/fiber";
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
    const currentCam = ref.current;

    currentCam?.setLookAt(0, 350, 125, 0, 100, -50);

    const update = () => invalidate();

    currentCam?.addEventListener("controlstart", update);
    currentCam?.addEventListener("control", update);
    currentCam?.addEventListener("controlend", update);
    currentCam?.addEventListener("transitionstart", update);
    currentCam?.addEventListener("update", update);

    return () => {
      currentCam?.removeAllEventListeners();
    };
  });

  useFrame((_, delta) => ref.current?.update(delta));

  // @ts-ignore
  return <cameraControls ref={ref} args={[camera, gl.domElement]} {...props} />;
}

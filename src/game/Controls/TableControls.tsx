import { useEffect, useRef } from "react";
import { invalidate, useFrame, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import CameraControlsPrimitive from "camera-controls";

export default function TableControls(props: any) {
  const ref = useRef<CameraControlsPrimitive>(null);

  const camera = useThree((state) => state.camera);

  useEffect(() => {
    const currentCam = ref.current;

    // currentCam?.setPosition(0, 26, 9.5);
    // currentCam?.lookInDirectionOf(0, -9.5, -1);
    // currentCam?.setOrbitPoint(0, 9.5, 1);

    currentCam?.setPosition(0, 20, 4);
    currentCam?.setTarget(0, -1, -4);

    if (currentCam) {
      currentCam.mouseButtons = {
        left: CameraControlsPrimitive.ACTION.NONE,
        right: CameraControlsPrimitive.ACTION.TRUCK,
        wheel: CameraControlsPrimitive.ACTION.DOLLY,
        middle: CameraControlsPrimitive.ACTION.DOLLY,
      };
    }

    const update = () => invalidate();
    currentCam?.addEventListener("controlstart", update);
    currentCam?.addEventListener("control", update);
    currentCam?.addEventListener("controlend", update);
    currentCam?.addEventListener("transitionstart", update);
    currentCam?.addEventListener("update", update);
    currentCam?.addEventListener("wake", update);
    currentCam?.addEventListener("rest", update);

    return () => {
      currentCam?.removeAllEventListeners();
    };
  });

  useFrame((_, delta) => ref.current?.update(delta));

  return (
    <CameraControls
      ref={ref}
      camera={camera}
      minDistance={15}
      maxDistance={200}
      {...props}
    />
  );
}

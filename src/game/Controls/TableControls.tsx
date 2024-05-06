import { useEffect, useRef } from "react";
import { invalidate, useFrame, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

export default function TableControls(props: any) {
  const ref = useRef<CameraControls>(null);

  const camera = useThree((state) => state.camera);

  useEffect(() => {
    const currentCam = ref.current;

    currentCam?.setLookAt(0, 26, 12, 0, 9.5, 1);
    // currentCam?.zoomTo(3);

    // if (currentCam) {
    //   currentCam.mouseButtons = {
    //     left: CameraControls.ACTION.NONE,
    //     right: CameraControls.ACTION.NONE,
    //     wheel: CameraControls.ACTION.ZOOM,
    //     middle: CameraControls.ACTION.ZOOM,
    //   };
    // }

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

  return <CameraControls ref={ref} camera={camera} {...props} />;
}

// import { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";

export default function TableControls() {
  // const controlsRef = useRef({});

  // useEffect(() => {
  //   if (controlsRef?.current) {
  //     controlsRef.current = {
  //       ...controlsRef.current,
  //       mouseButtons: {
  //         left: 0,
  //         right: 0,
  //         middle: 0,
  //         wheel: 16,
  //       },
  //       touches: {
  //         one: 0,
  //         two: 512,
  //         three: 0,
  //       },
  //     };
  //   }
  // }, [controlsRef.current]);

  return <CameraControls minDistance={200} maxDistance={1000} />;
}

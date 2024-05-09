import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

export function Spotlight() {
  const spotlightRef = useRef<any>();
  // useHelper(spotlightRef, SpotLightHelper);

  return (
    <spotLight
      ref={spotlightRef}
      position={[0, 20, 10]}
      intensity={500}
      angle={Math.PI / 2.2}
    />
  );
}

function AmbientLight() {
  return <ambientLight args={["white", 5]} />;
}

function HemisphereLight() {
  return <hemisphereLight args={["white", "darkslategrey", 1.5]} />;
}

function DirectionalLight() {
  return <directionalLight position={[0, 15, 0]} intensity={3} />;
}

export default function TableLighting() {
  return (
    <>
      {/* <AmbientLight /> */}
      {/* <HemisphereLight /> */}
      {/* <Spotlight /> */}
      <DirectionalLight />
    </>
  );
}

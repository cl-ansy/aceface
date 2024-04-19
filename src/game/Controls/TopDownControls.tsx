import { MapControls } from "@react-three/drei";

export default function TopDownControls() {
  return (
    <MapControls enableDamping={true} zoomToCursor={true} screenSpacePanning />
  );
}

import { MapControls } from "@react-three/drei";

export default function FloorControls() {
  return (
    <MapControls enableDamping={true} zoomToCursor={true} screenSpacePanning />
  );
}

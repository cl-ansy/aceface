import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function CarpetMesh() {
  const { scene } = useThree();
  const carpetTexture = useTexture(
    "/assets/carpets/1K-casino_carpet_2-diffuse.jpg"
  );

  useLayoutEffect(() => {
    const oldBackground = scene.background;
    scene.background = carpetTexture;
    return () => {
      scene.background = oldBackground;
    };
  }, [carpetTexture]);
}

import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture, Backdrop, Sky } from "@react-three/drei";

// export default function FloorMesh() {
//   const { scene } = useThree();
//   const carpetTexture = useTexture(
//     "/assets/carpets/1K-casino_carpet_2-diffuse.jpg"
//   );

//   useLayoutEffect(() => {
//     const oldBackground = scene.background;
//     scene.background = carpetTexture;
//     return () => {
//       scene.background = oldBackground;
//     };
//   }, [scene, carpetTexture]);
// }

// export default function FloorMesh() {
//   return (
//     <Backdrop
//       floor={1000} // Stretches the floor segment, 0.25 by default
//       segments={200} // Mesh-resolution, 20 by default
//     >
//       <meshStandardMaterial color="#353540" />
//     </Backdrop>
//   );
// }

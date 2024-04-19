import { Html, useProgress } from "@react-three/drei";

export default function LoadingProgress() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

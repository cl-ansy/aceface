import { Html, useProgress } from "@react-three/drei";

import { Progress } from "@/components/ui/Progress";

export default function LoadingProgress() {
  const { progress } = useProgress();

  return (
    <Html center={true} position={[0, 10, 0]}>
      <Progress value={progress} className="w-40" />
    </Html>
  );
}

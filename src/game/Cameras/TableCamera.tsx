import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

export default function TableCamera(props: any) {
  return (
    <PerspectiveCamera makeDefault {...props} />
    // <OrthographicCamera makeDefault {...props} />
    // <TablePerspectiveCamera makeDefault {...props} />
    // <TableOrthographicCamera makeDefault near={0.1} far={1000} {...props} />
  );
}

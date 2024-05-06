import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

export function TablePerspectiveCamera({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <PerspectiveCamera fov={50}>{children}</PerspectiveCamera>;
}

export function TableOrthographicCamera({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <OrthographicCamera>{children}</OrthographicCamera>;
}

export default function TableCamera(props: any) {
  return (
    <TablePerspectiveCamera makeDefault near={0.1} far={1000} {...props} />
    // <TableOrthographicCamera makeDefault near={0.1} far={1000} {...props} />
  );
}

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight color="white" position={[0, 0, 500]} />
    </>
  );
}

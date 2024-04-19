export default function Lighting() {
  return (
    <>
      <ambientLight intensity={5} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </>
  );
}

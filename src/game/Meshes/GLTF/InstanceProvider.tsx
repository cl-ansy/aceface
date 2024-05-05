import { useContext, useMemo, createContext } from "react";
import type { Mesh, MeshPhysicalMaterial } from "three";
import { useGLTF, Merged } from "@react-three/drei";
import { a } from "@react-spring/three";
import { GLTF } from "three-stdlib";
import type {
  GroupProps,
  MeshProps,
  Node,
  Object3DNode,
  Object3DProps,
} from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    BlackjackTable: Mesh;
    Joker: Mesh;
    H1: Mesh;
    H2: Mesh;
    H3: Mesh;
    H4: Mesh;
    H5: Mesh;
    H6: Mesh;
    H7: Mesh;
    H8: Mesh;
    H9: Mesh;
    H10: Mesh;
    H11: Mesh;
    H12: Mesh;
    H13: Mesh;
    C1: Mesh;
    C2: Mesh;
    C3: Mesh;
    C4: Mesh;
    C5: Mesh;
    C6: Mesh;
    C7: Mesh;
    C8: Mesh;
    C9: Mesh;
    C10: Mesh;
    C11: Mesh;
    C12: Mesh;
    C13: Mesh;
    S1: Mesh;
    S2: Mesh;
    S3: Mesh;
    S4: Mesh;
    S5: Mesh;
    S6: Mesh;
    S7: Mesh;
    S8: Mesh;
    S9: Mesh;
    S10: Mesh;
    S11: Mesh;
    S12: Mesh;
    S13: Mesh;
    D1: Mesh;
    D2: Mesh;
    D3: Mesh;
    D4: Mesh;
    D5: Mesh;
    D6: Mesh;
    D7: Mesh;
    D8: Mesh;
    D9: Mesh;
    D10: Mesh;
    D11: Mesh;
    D12: Mesh;
    D13: Mesh;
  };
  materials: {
    Material: MeshPhysicalMaterial;
    Joker: MeshPhysicalMaterial;
    H1: MeshPhysicalMaterial;
    H2: MeshPhysicalMaterial;
    H3: MeshPhysicalMaterial;
    H4: MeshPhysicalMaterial;
    H5: MeshPhysicalMaterial;
    H6: MeshPhysicalMaterial;
    H7: MeshPhysicalMaterial;
    H8: MeshPhysicalMaterial;
    H9: MeshPhysicalMaterial;
    H10: MeshPhysicalMaterial;
    H11: MeshPhysicalMaterial;
    H12: MeshPhysicalMaterial;
    H13: MeshPhysicalMaterial;
    C1: MeshPhysicalMaterial;
    C2: MeshPhysicalMaterial;
    C3: MeshPhysicalMaterial;
    C4: MeshPhysicalMaterial;
    C5: MeshPhysicalMaterial;
    C6: MeshPhysicalMaterial;
    C7: MeshPhysicalMaterial;
    C8: MeshPhysicalMaterial;
    C9: MeshPhysicalMaterial;
    C10: MeshPhysicalMaterial;
    C11: MeshPhysicalMaterial;
    C12: MeshPhysicalMaterial;
    C13: MeshPhysicalMaterial;
    S1: MeshPhysicalMaterial;
    S2: MeshPhysicalMaterial;
    S3: MeshPhysicalMaterial;
    S4: MeshPhysicalMaterial;
    S5: MeshPhysicalMaterial;
    S6: MeshPhysicalMaterial;
    S7: MeshPhysicalMaterial;
    S8: MeshPhysicalMaterial;
    S9: MeshPhysicalMaterial;
    S10: MeshPhysicalMaterial;
    S11: MeshPhysicalMaterial;
    S12: MeshPhysicalMaterial;
    S13: MeshPhysicalMaterial;
    D1: MeshPhysicalMaterial;
    D2: MeshPhysicalMaterial;
    D3: MeshPhysicalMaterial;
    D4: MeshPhysicalMaterial;
    D5: MeshPhysicalMaterial;
    D6: MeshPhysicalMaterial;
    D7: MeshPhysicalMaterial;
    D8: MeshPhysicalMaterial;
    D9: MeshPhysicalMaterial;
    D10: MeshPhysicalMaterial;
    D11: MeshPhysicalMaterial;
    D12: MeshPhysicalMaterial;
    D13: MeshPhysicalMaterial;
  };
};

export const InstanceContext = createContext({});

export function InstanceProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const { nodes } = useGLTF("/assets/models/Blackjack.glb") as GLTFResult;
  const instances = useMemo(
    () => ({
      BlackjackTable: nodes.BlackjackTable,
      Joker: nodes.Joker,
      HA: nodes.H1,
      H2: nodes.H2,
      H3: nodes.H3,
      H4: nodes.H4,
      H5: nodes.H5,
      H6: nodes.H6,
      H7: nodes.H7,
      H8: nodes.H8,
      H9: nodes.H9,
      HT: nodes.H10,
      HJ: nodes.H11,
      HQ: nodes.H12,
      HK: nodes.H13,
      CA: nodes.C1,
      C2: nodes.C2,
      C3: nodes.C3,
      C4: nodes.C4,
      C5: nodes.C5,
      C6: nodes.C6,
      C7: nodes.C7,
      C8: nodes.C8,
      C9: nodes.C9,
      CT: nodes.C10,
      CJ: nodes.C11,
      CQ: nodes.C12,
      CK: nodes.C13,
      SA: nodes.S1,
      S2: nodes.S2,
      S3: nodes.S3,
      S4: nodes.S4,
      S5: nodes.S5,
      S6: nodes.S6,
      S7: nodes.S7,
      S8: nodes.S8,
      S9: nodes.S9,
      ST: nodes.S10,
      SJ: nodes.S11,
      SQ: nodes.S12,
      SK: nodes.S13,
      DA: nodes.D1,
      D2: nodes.D2,
      D3: nodes.D3,
      D4: nodes.D4,
      D5: nodes.D5,
      D6: nodes.D6,
      D7: nodes.D7,
      D8: nodes.D8,
      D9: nodes.D9,
      DT: nodes.D10,
      DJ: nodes.D11,
      DQ: nodes.D12,
      DK: nodes.D13,
    }),
    [nodes],
  );

  return (
    <Merged meshes={instances} {...props}>
      {(instances: {}) => (
        <InstanceContext.Provider value={instances}>
          {children}
        </InstanceContext.Provider>
      )}
    </Merged>
  );
}

export function MeshInstance({
  name,
  meshProps,
  ...props
}: {
  name: string;
  meshProps?: MeshProps;
} & GroupProps) {
  const instances = useContext(InstanceContext);
  console.log(instances);
  const MeshInstance = instances[
    name as keyof typeof instances
  ] as React.ElementType;

  return (
    MeshInstance && (
      <a.group {...props} dispose={null}>
        <MeshInstance {...meshProps} />
      </a.group>
    )
  );
}

useGLTF.preload("/assets/models/Blackjack.glb");

// @ts-nocheck
import { useContext } from "react";
import { useGLTF } from "@react-three/drei";
import { animated } from "@react-spring/three";

import { ModelContext } from "@/game/Meshes/CardInstances";

export function BACK(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="BACK" {...props} dispose={null}>
      <instances.Cube name="Cube006" />
      <instances.Cube1 name="Cube006_1" />
    </animated.group>
  );
}

export function JOKER(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="JOKER" {...props} dispose={null}>
      <instances.Cube name="Cube006" />
      <instances.Cube1 name="Cube006_1" />
    </animated.group>
  );
}

export function DK(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="DK" {...props} dispose={null}>
      <instances.Cube2 name="Cube002" />
      <instances.Cube3 name="Cube002_1" />
    </animated.group>
  );
}

export function HK(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="HK" {...props} dispose={null}>
      <instances.Cube4 name="Cube004" />
      <instances.Cube5 name="Cube004_1" />
    </animated.group>
  );
}

export function CK(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="CK" {...props} dispose={null}>
      <instances.Cube6 name="Cube003" />
      <instances.Cube7 name="Cube003_1" />
    </animated.group>
  );
}

export function SK(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="SK" {...props} dispose={null}>
      <instances.Cube8 name="Cube005" />
      <instances.Cube9 name="Cube005_1" />
    </animated.group>
  );
}

export function DQ(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="DQ" {...props} dispose={null}>
      <instances.Cube10 name="Cube007" />
      <instances.Cube11 name="Cube007_1" />
    </animated.group>
  );
}

export function HQ(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="HQ" {...props} dispose={null}>
      <instances.Cube12 name="Cube010" />
      <instances.Cube13 name="Cube010_1" />
    </animated.group>
  );
}

export function CQ(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="CQ" {...props} dispose={null}>
      <instances.Cube14 name="Cube009" />
      <instances.Cube15 name="Cube009_1" />
    </animated.group>
  );
}

export function SQ(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="SQ" {...props} dispose={null}>
      <instances.Cube16 name="Cube011" />
      <instances.Cube17 name="Cube011_1" />
    </animated.group>
  );
}

export function DJ(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="DJ" {...props} dispose={null}>
      <instances.Cube18 name="Cube013" />
      <instances.Cube19 name="Cube013_1" />
    </animated.group>
  );
}

export function HJ(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="HJ" {...props} dispose={null}>
      <instances.Cube20 name="Cube015" />
      <instances.Cube21 name="Cube015_1" />
    </animated.group>
  );
}

export function CJ(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="CJ" {...props} dispose={null}>
      <instances.Cube22 name="Cube014" />
      <instances.Cube23 name="Cube014_1" />
    </animated.group>
  );
}

export function SJ(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="SJ" {...props} dispose={null}>
      <instances.Cube24 name="Cube016" />
      <instances.Cube25 name="Cube016_1" />
    </animated.group>
  );
}

export function DA(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="DA" {...props} dispose={null}>
      <instances.Cube26 name="Cube017" />
      <instances.Cube27 name="Cube017_1" />
    </animated.group>
  );
}

export function HA(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="HA" {...props} dispose={null}>
      <instances.Cube28 name="Cube019" />
      <instances.Cube29 name="Cube019_1" />
    </animated.group>
  );
}

export function CA(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="CA" {...props} dispose={null}>
      <instances.Cube30 name="Cube018" />
      <instances.Cube31 name="Cube018_1" />
    </animated.group>
  );
}

export function SA(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="SA" {...props} dispose={null}>
      <instances.Cube32 name="Cube020" />
      <instances.Cube33 name="Cube020_1" />
    </animated.group>
  );
}

export function DT(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="DT" {...props} dispose={null}>
      <instances.Cube34 name="Cube001" />
      <instances.Cube35 name="Cube001_1" />
    </animated.group>
  );
}

export function HT(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="HT" {...props} dispose={null}>
      <instances.Cube36 name="Cube012" />
      <instances.Cube37 name="Cube012_1" />
    </animated.group>
  );
}

export function CT(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="CT" {...props} dispose={null}>
      <instances.Cube38 name="Cube008" />
      <instances.Cube39 name="Cube008_1" />
    </animated.group>
  );
}

export function ST(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="ST" {...props} dispose={null}>
      <instances.Cube40 name="Cube025" />
      <instances.Cube41 name="Cube025_1" />
    </animated.group>
  );
}

export function D9(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="D9" {...props} dispose={null}>
      <instances.Cube42 name="Cube026" />
      <instances.Cube43 name="Cube026_1" />
    </animated.group>
  );
}

export function H9(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="H9" {...props} dispose={null}>
      <instances.Cube44 name="Cube028" />
      <instances.Cube45 name="Cube028_1" />
    </animated.group>
  );
}

export function C9(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="C9" {...props} dispose={null}>
      <instances.Cube46 name="Cube027" />
      <instances.Cube47 name="Cube027_1" />
    </animated.group>
  );
}

export function S9(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="S9" {...props} dispose={null}>
      <instances.Cube48 name="Cube029" />
      <instances.Cube49 name="Cube029_1" />
    </animated.group>
  );
}

export function D8(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="D8" {...props} dispose={null}>
      <instances.Cube50 name="Cube034" />
      <instances.Cube51 name="Cube034_1" />
    </animated.group>
  );
}

export function H8(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="H8" {...props} dispose={null}>
      <instances.Cube52 name="Cube036" />
      <instances.Cube53 name="Cube036_1" />
    </animated.group>
  );
}

export function C8(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="C8" {...props} dispose={null}>
      <instances.Cube54 name="Cube035" />
      <instances.Cube55 name="Cube035_1" />
    </animated.group>
  );
}

export function S8(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="S8" {...props} dispose={null}>
      <instances.Cube56 name="Cube037" />
      <instances.Cube57 name="Cube037_1" />
    </animated.group>
  );
}

export function D7(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="D7" {...props} dispose={null}>
      <instances.Cube58 name="Cube030" />
      <instances.Cube59 name="Cube030_1" />
    </animated.group>
  );
}

export function H7(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="H7" {...props} dispose={null}>
      <instances.Cube60 name="Cube032" />
      <instances.Cube61 name="Cube032_1" />
    </animated.group>
  );
}

export function C7(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="C7" {...props} dispose={null}>
      <instances.Cube62 name="Cube031" />
      <instances.Cube63 name="Cube031_1" />
    </animated.group>
  );
}

export function S7(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="S7" {...props} dispose={null}>
      <instances.Cube64 name="Cube033" />
      <instances.Cube65 name="Cube033_1" />
    </animated.group>
  );
}

export function D6(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="D6" {...props} dispose={null}>
      <instances.Cube66 name="Cube021" />
      <instances.Cube67 name="Cube021_1" />
    </animated.group>
  );
}

export function H6(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="H6" {...props} dispose={null}>
      <instances.Cube68 name="Cube023" />
      <instances.Cube69 name="Cube023_1" />
    </animated.group>
  );
}

export function C6(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="C6" {...props} dispose={null}>
      <instances.Cube70 name="Cube022" />
      <instances.Cube71 name="Cube022_1" />
    </animated.group>
  );
}

export function S6(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="S6" {...props} dispose={null}>
      <instances.Cube72 name="Cube024" />
      <instances.Cube73 name="Cube024_1" />
    </animated.group>
  );
}

export function D5(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="D5" {...props} dispose={null}>
      <instances.Cube74 name="Cube038" />
      <instances.Cube75 name="Cube038_1" />
    </animated.group>
  );
}

export function H5(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="H5" {...props} dispose={null}>
      <instances.Cube76 name="Cube040" />
      <instances.Cube77 name="Cube040_1" />
    </animated.group>
  );
}

export function C5(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="C5" {...props} dispose={null}>
      <instances.Cube78 name="Cube039" />
      <instances.Cube79 name="Cube039_1" />
    </animated.group>
  );
}

export function S5(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="S5" {...props} dispose={null}>
      <instances.Cube80 name="Cube041" />
      <instances.Cube81 name="Cube041_1" />
    </animated.group>
  );
}

export function D4(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="D4" {...props} dispose={null}>
      <instances.Cube82 name="Cube042" />
      <instances.Cube83 name="Cube042_1" />
    </animated.group>
  );
}

export function H4(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="H4" {...props} dispose={null}>
      <instances.Cube84 name="Cube044" />
      <instances.Cube85 name="Cube044_1" />
    </animated.group>
  );
}

export function C4(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="C4" {...props} dispose={null}>
      <instances.Cube86 name="Cube043" />
      <instances.Cube87 name="Cube043_1" />
    </animated.group>
  );
}

export function S4(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="S4" {...props} dispose={null}>
      <instances.Cube88 name="Cube045" />
      <instances.Cube89 name="Cube045_1" />
    </animated.group>
  );
}

export function D3(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="D3" {...props} dispose={null}>
      <instances.Cube90 name="Cube051" />
      <instances.Cube91 name="Cube051_1" />
    </animated.group>
  );
}

export function H3(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="H3" {...props} dispose={null}>
      <instances.Cube92 name="Cube053" />
      <instances.Cube93 name="Cube053_1" />
    </animated.group>
  );
}

export function C3(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="C3" {...props} dispose={null}>
      <instances.Cube94 name="Cube052" />
      <instances.Cube95 name="Cube052_1" />
    </animated.group>
  );
}

export function S3(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="S3" {...props} dispose={null}>
      <instances.Cube96 name="Cube054" />
      <instances.Cube97 name="Cube054_1" />
    </animated.group>
  );
}

export function D2(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="D2" {...props} dispose={null}>
      <instances.Cube98 name="Cube046" />
      <instances.Cube99 name="Cube046_1" />
    </animated.group>
  );
}

export function H2(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="H2" {...props} dispose={null}>
      <instances.Cube100 name="Cube047" />
      <instances.Cube101 name="Cube047_1" />
    </animated.group>
  );
}

export function C2(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="C2" {...props} dispose={null}>
      <instances.Cube102 name="Cube048" />
      <instances.Cube103 name="Cube048_1" />
    </animated.group>
  );
}

export function S2(props) {
  const instances = useContext(ModelContext);
  return (
    <animated.group name="S2" {...props} dispose={null}>
      <instances.Cube104 name="Cube049" />
      <instances.Cube105 name="Cube049_1" />
    </animated.group>
  );
}

useGLTF.preload("/assets/models/cards/Cards.glb");

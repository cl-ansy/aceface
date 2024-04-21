import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function AssetLoader() {
  useLoader.preload(TextureLoader, [
    "/cards/vector/2H.svg",
    "/cards/vector/3H.svg",
    "/cards/vector/4H.svg",
    "/cards/vector/5H.svg",
    "/cards/vector/6H.svg",
    "/cards/vector/7H.svg",
    "/cards/vector/8H.svg",
    "/cards/vector/9H.svg",
    "/cards/vector/TH.svg",
    "/cards/vector/JH.svg",
    "/cards/vector/QH.svg",
    "/cards/vector/KH.svg",
    "/cards/vector/AH.svg",
    "/cards/vector/2S.svg",
    "/cards/vector/3S.svg",
    "/cards/vector/4S.svg",
    "/cards/vector/5S.svg",
    "/cards/vector/6S.svg",
    "/cards/vector/7S.svg",
    "/cards/vector/8S.svg",
    "/cards/vector/9S.svg",
    "/cards/vector/TS.svg",
    "/cards/vector/JS.svg",
    "/cards/vector/QS.svg",
    "/cards/vector/KS.svg",
    "/cards/vector/AS.svg",
    "/cards/vector/2C.svg",
    "/cards/vector/3C.svg",
    "/cards/vector/4C.svg",
    "/cards/vector/5C.svg",
    "/cards/vector/6C.svg",
    "/cards/vector/7C.svg",
    "/cards/vector/8C.svg",
    "/cards/vector/9C.svg",
    "/cards/vector/TC.svg",
    "/cards/vector/JC.svg",
    "/cards/vector/QC.svg",
    "/cards/vector/KC.svg",
    "/cards/vector/AC.svg",
    "/cards/vector/2D.svg",
    "/cards/vector/3D.svg",
    "/cards/vector/4D.svg",
    "/cards/vector/5D.svg",
    "/cards/vector/6D.svg",
    "/cards/vector/7D.svg",
    "/cards/vector/8D.svg",
    "/cards/vector/9D.svg",
    "/cards/vector/TD.svg",
    "/cards/vector/JD.svg",
    "/cards/vector/QD.svg",
    "/cards/vector/KD.svg",
    "/cards/vector/AD.svg",
    "/cards/vector/Back.svg",
  ]);
  return null;
}

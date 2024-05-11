import { degreesToRadians, randomInRange } from "@/lib/utils";
import { TABLE_HEIGHT } from "@/lib/constants";

export const getShoePosition = () => ({
  shoePositionX: 5.5,
  shoePositionY: TABLE_HEIGHT,
  shoePositionZ: -4.5,
  shoeRotationY: degreesToRadians(10),
  shoeRotationZ: degreesToRadians(180),
});

export const createCardSpring = (height: number, position: number) => {
  const {
    shoePositionX,
    shoePositionY,
    shoePositionZ,
    shoeRotationY,
    shoeRotationZ,
  } = getShoePosition();

  return {
    from: {
      positionX: shoePositionX,
      positionY: shoePositionY,
      positionZ: shoePositionZ,
      rotationY: shoeRotationY,
      rotationZ: shoeRotationZ,
    },
    to: [
      {
        positionX: 4,
        positionY: TABLE_HEIGHT + 1,
        positionZ: -4.5,
        rotationY: degreesToRadians(0),
        rotationZ: degreesToRadians(0),
      },
      {
        positionX: randomInRange(-0.1, 0.1),
        positionY: TABLE_HEIGHT + height * 0.01,
        positionZ: randomInRange(0.9, 1.1),
        rotationY: randomInRange(-0.2, 0.2),
      },
    ],
    config: {
      precision: 0.0001,
      duration: 300,
    },
  };
};

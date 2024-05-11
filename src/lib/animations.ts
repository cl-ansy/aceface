import {
  degreesToRadians,
  randomInRange,
  toRenderPrecision,
} from "@/lib/utils";
import { TABLE_HEIGHT } from "@/lib/constants";

export const getShoePosition = () => ({
  shoePositionX: 5.5,
  shoePositionY: TABLE_HEIGHT,
  shoePositionZ: -4.5,
  shoeRotationY: degreesToRadians(10),
  shoeRotationZ: degreesToRadians(180),
});

export const getHandPositionBySeat = (seat: number) => {
  let x, z;

  switch (seat) {
    case 1:
      (x = 4), (z = 0);
      break;
    case 2:
      (x = 2), (z = 0.5);
      break;
    case 3:
      (x = 0), (z = 1);
      break;
    case 4:
      (x = -2), (z = 0.5);
      break;
    case 5:
      (x = -4), (z = 0);
      break;
    default:
      (x = 0), (z = 0);
  }

  return { x, z };
};

export const getCardSpring = (height: number, seat: number) => {
  const {
    shoePositionX,
    shoePositionY,
    shoePositionZ,
    shoeRotationY,
    shoeRotationZ,
  } = getShoePosition();

  const { x, z } = getHandPositionBySeat(seat);

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
        // positionX: randomInRange(-0.1, 0.1),
        positionX: x,
        positionY: TABLE_HEIGHT + height * 0.01,
        // positionZ: randomInRange(0.9, 1.1),
        positionZ: z,
        rotationY: randomInRange(-0.2, 0.2),
      },
    ],
    config: {
      precision: 0.0001,
      duration: 300,
    },
  };
};

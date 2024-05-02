import { BufferGeometry, BufferAttribute } from "three";

// Standard card dimensions
// Width: 2.5 in | 63.5 mm
// Height: 3.5 in | 88.9 mm
// Depth: 2mm
// Radius: 3.5mm
export const CardGeometry = RoundedBoxFlat(6.35, 8.89, 0.1, 0.35, 4);

export function RoundedBoxFlat(
  w: number, // width
  h: number, // height
  d: number, // depth
  r: number, // radius
  s: number, // smoothness
  q?: number // quadrant
) {
  let qu = q || 1; // qu: start quadrant regarding u, optional
  const pi = Math.PI;
  let indices: number[] = [];
  let positions: number[] = [];
  let uvs: number[] = [];

  makeFronts(s, 1, 0); // smoothness, front is 1, start index  center front
  makeFronts(s, -1, 4 * (s + 3) + 1); // smoothness, back is -1, start index center back
  makeFrame(s, 2 * (4 * (s + 3) + 1), 1, 4 * (s + 3) + 2); // smoothness, start index framing ,start index front, start index back

  const geometry = new BufferGeometry();
  geometry.setIndex(new BufferAttribute(new Uint32Array(indices), 1));
  geometry.setAttribute(
    "position",
    new BufferAttribute(new Float32Array(positions), 3)
  );
  geometry.setAttribute("uv", new BufferAttribute(new Float32Array(uvs), 2));

  // add multimaterial groups for front, back, framing
  const vtc = 4 * (s + 2) * 3;
  geometry.addGroup(0, vtc, 0);
  geometry.addGroup(vtc, vtc, 1);
  geometry.addGroup(2 * vtc, 2 * vtc + 3, 2);

  geometry.computeVertexNormals();

  return geometry;

  function makeFronts(s: number, side: number, idx: number) {
    const d0 = side === 1 ? 0 : 1;
    const d1 = side === 1 ? 1 : 0;

    let id = 0;

    for (let q = 1; q < 5; q++) {
      // quadrants
      id++;

      for (let j = 0; j < s + 2; j++) {
        indices.push(idx, idx + d0 + id, idx + d1 + id);
        id++;
      }
    }

    positions.push(0, 0, (side * d) / 2); // center
    uvs.push(0.5, 0.5);

    let x, y, z, sgnX, sgnY;
    let phi = 0;
    const u0 = side === 1 ? 0 : 1;

    for (let q = 1; q < 5; q++) {
      sgnX = q === 1 || q === 4 ? 1 : -1;
      sgnY = q < 3 ? 1 : -1;

      x = (Math.cos(phi) * w) / 2;
      y = (Math.sin(phi) * h) / 2;
      z = (side * d) / 2;

      positions.push(x, y, z);
      uvs.push(u0 + side * (0.5 + x / w), 0.5 + y / h);

      for (let j = 0; j < s + 1; j++) {
        const c = {
          x: sgnX * (w / 2 - r),
          y: sgnY * (h / 2 - r),
          z: (side * d) / 2,
        }; // quadrant center

        const dPhi = ((pi / 2) * j) / s;

        x = c.x + r * Math.cos(phi + dPhi);
        y = c.y + r * Math.sin(phi + dPhi);
        z = c.z;
        positions.push(x, y, z);
        uvs.push(u0 + side * (0.5 + x / w), 0.5 + y / h);
      }

      phi = phi + pi / 2;

      x = (Math.cos(phi) * w) / 2;
      y = (Math.sin(phi) * h) / 2;
      z = (side * d) / 2;

      positions.push(x, y, z);
      uvs.push(u0 + side * (0.5 + x / w), 0.5 + y / h);
    }
  }

  function makeFrame(s: number, sidx: number, sif: number, sib: number) {
    let a, b, c, d, xf, yf, zf, xb, yb, zb;
    const pif = sif * 3; // position start index front
    const pib = sib * 3; // position start index back

    let idx = sidx;

    for (let q = 1; q < 5; q++) {
      for (let j = 0; j < s + 2; j++) {
        a = idx;
        b = idx + 1;
        c = idx + 2;
        d = idx + 3;

        indices.push(a, b, d, a, d, c);

        idx += 2;
      }

      idx += 2;
    }

    const ls = 2 * r * Math.sin(pi / (s * 4)); // length of the outer line of a corner segment
    const w2r = w / 2 - r;
    const h2r = h / 2 - r;
    const peri = 4 * w2r + 4 * h2r + 4 * s * ls; // perimeter

    let u;
    idx = 0; // reset

    for (let q = 1; q < 5; q++) {
      u = qu / 4;

      for (let j = 0; j < s + 3; j++) {
        xf = positions[pif + idx];
        yf = positions[pif + idx + 1];
        zf = positions[pif + idx + 2];

        xb = positions[pib + idx];
        yb = positions[pib + idx + 1];
        zb = positions[pib + idx + 2];

        positions.push(xf, yf, zf, xb, yb, zb);

        idx += 3;

        uvs.push(u, 0, u, 1);

        if (j === 0) {
          u -= q === 1 || q === 3 ? h2r / peri : w2r / peri;
        }
        if (j === s + 1) {
          u -= q === 1 || q === 3 ? w2r / peri : h2r / peri;
        }
        if (j > 0 && j < s + 1) {
          u -= ls / peri;
        }
      }

      qu = 4 - ((5 - qu) % 4); // cyclic next quadrant with respect to u
    }
  }
}

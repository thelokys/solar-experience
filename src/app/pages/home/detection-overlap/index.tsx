import { calculateAxes } from "./utils/calculate-axes";
import { calculateRotatedRectanglePoints } from "./utils/calculate-rotated-rectangle-points";
import { degreesToRadians } from "./utils/degrees-to-radians";
import { isOverlapOnAxis } from "./utils/is-overlap-on-axis";
import { projectPointsOntoAxis } from "./utils/project-points-onto-axis";

interface Rectangle2D {
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
}

export function detectionOverlap(
  rectangle1: Rectangle2D,
  rectangle2: Rectangle2D
) {
  const radians1 = degreesToRadians(rectangle1.angle);
  const radians2 = degreesToRadians(rectangle2.angle);

  const points1 = calculateRotatedRectanglePoints(rectangle1, radians1);
  const points2 = calculateRotatedRectanglePoints(rectangle2, radians2);

  const axes = calculateAxes(points1).concat(calculateAxes(points2));

  for (const axis of axes) {
    const projection1 = projectPointsOntoAxis(points1, axis);
    const projection2 = projectPointsOntoAxis(points2, axis);

    if (!isOverlapOnAxis(projection1, projection2)) {
      return false;
    }
  }

  return true;
}

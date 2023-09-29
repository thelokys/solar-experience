interface Point2D {
  x: number;
  y: number;
}

interface Axis2D {
  x: number;
  y: number;
}

export function projectPointsOntoAxis(points: Point2D[], axis: Axis2D) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;

  for (const point of points) {
    const dotProduct = point.x * axis.x + point.y * axis.y;
    if (dotProduct < min) {
      min = dotProduct;
    }
    if (dotProduct > max) {
      max = dotProduct;
    }
  }

  return { min, max };
}

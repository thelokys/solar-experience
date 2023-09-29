interface Projection2D {
  min: number;
  max: number;
}

export function isOverlapOnAxis(
  projection1: Projection2D,
  projection2: Projection2D
) {
  return (
    projection1.max >= projection2.min && projection2.max >= projection1.min
  );
}

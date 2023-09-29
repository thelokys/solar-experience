interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function calculateRotatedRectanglePoints(
  rectangle: RectangleProps,
  radians: number
) {
  const { x, y, width, height } = rectangle;

  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const centerX = x + halfWidth;
  const centerY = y + halfHeight;

  const cosTheta = Math.cos(radians);
  const sinTheta = Math.sin(radians);

  const x1 = centerX + halfWidth * cosTheta - halfHeight * sinTheta;
  const y1 = centerY + halfWidth * sinTheta + halfHeight * cosTheta;
  const x2 = centerX - halfWidth * cosTheta - halfHeight * sinTheta;
  const y2 = centerY - halfWidth * sinTheta + halfHeight * cosTheta;
  const x3 = centerX - halfWidth * cosTheta + halfHeight * sinTheta;
  const y3 = centerY - halfWidth * sinTheta - halfHeight * cosTheta;
  const x4 = centerX + halfWidth * cosTheta + halfHeight * sinTheta;
  const y4 = centerY + halfWidth * sinTheta - halfHeight * cosTheta;

  return [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
    { x: x4, y: y4 },
  ];
}

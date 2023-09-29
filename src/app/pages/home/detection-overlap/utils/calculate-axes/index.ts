interface Vertice2D {
  x: number;
  y: number;
}

export function calculateAxes(vertices: Vertice2D[]) {
  const axes = [];

  for (let i = 0; i < vertices.length; i++) {
    const p1 = vertices[i];
    const p2 = vertices[(i + 1) % vertices.length];

    const edge = { x: p2.x - p1.x, y: p2.y - p1.y };

    axes.push({ x: -edge.y, y: edge.x });
  }

  return axes;
}

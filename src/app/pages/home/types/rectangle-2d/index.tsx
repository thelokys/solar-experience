export interface Rectangle2D {
  id: string;
  y: number;
  x: number;
  width: number;
  height: number;
  angle: number;

  isColliding?: boolean;
}

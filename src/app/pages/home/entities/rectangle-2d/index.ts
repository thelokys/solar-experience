import { generateId } from "../../utils/generate-id";

export interface Rectangle2DProps {
  y: number;
  x: number;
  width: number;
  height: number;
  angle: number;
}

export class Rectangle2D {
  public readonly id: string;

  private props: Required<Rectangle2DProps>;

  private constructor(props?: Rectangle2DProps, id?: string) {
    this.id = id || generateId();

    if (!props) {
      this.props = {} as Rectangle2DProps;
      return;
    }
    this.props = {
      ...props,
    };
  }

  static create(props?: Rectangle2DProps, id?: string) {
    return new Rectangle2D(props, id);
  }

  public moveTo(newX: number, newY: number) {
    this.x = newX;
    this.y = newY;
  }

  public resizeWith(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public get x(): number {
    return this.props.x;
  }

  public set x(x: number) {
    this.x = x;
  }

  public get y(): number {
    return this.props.y;
  }

  public set y(y: number) {
    this.y = y;
  }

  public get width(): number {
    return this.props.width;
  }

  public set width(width: number) {
    this.width = width;
  }

  public get height(): number {
    return this.props.height;
  }
  public set height(height: number) {
    this.height = height;
  }

  public get angle(): number {
    return this.props.angle;
  }

  public set angle(v: number) {
    this.props.angle = v;
  }

  toJSON() {
    return { ...this.props };
  }
}

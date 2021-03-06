export interface Position {
  x: number;
  y: number;
}

export interface IGameObject {
  id: number;
  pos: Position;
  update(deltaTime: number): void;
  render(context: CanvasRenderingContext2D, deltaTime: number): void;
}

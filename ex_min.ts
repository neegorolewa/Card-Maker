import { Canvas, Size, Docum } from "./data";

const sizeCanvas: Size = {
  width: 100,
  height: 100,
};

const canvas: Canvas = {
  name: "firstCanvas",
  background: "#FFFFFF",
  size: sizeCanvas,
  filter: null,
  objects: [],
};

const doc: Docum = {
  page: canvas,
};

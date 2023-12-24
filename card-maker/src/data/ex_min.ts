import { Canvas, Size, Application, HistoryOperations } from "./data";

const sizeCanvas: Size = {
  width: 800,
  height: 400,
};

const canvas: Canvas = {
  name: "firstCanvas",
  background: "#FFFFFF",
  size: sizeCanvas,
  filter: null,
  objects: [],
};

const hist: HistoryOperations = {
  history: [canvas],
  index: 0,
};

const doc: Application = {
  page: hist.history[hist.index],
  history: hist,
};

export default doc;

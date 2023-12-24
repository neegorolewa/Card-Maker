import {
  Canvas,
  Char,
  Size,
  Position,
  Block,
  TextBlock,
  ImageBlock,
  GraphicBlock,
  Figure,
  HistoryOperations,
} from "./data";
import { Application } from "./data";

const size1: Size = {
  width: 10,
  height: 10,
};

const sizeCanvas: Size = {
  width: 1000,
  height: 500,
};

const ch1: Char = {
  id: "id1",
  value: "H",
  fontSize: 80,
  fontFamily: "Font",
  color: "#111111",
  bold: false,
};

const ch2: Char = {
  id: "id2",
  value: "H",
  fontSize: 50,
  fontFamily: "Font",
  color: "#111111",
  bold: false,
};

const pos1: Position = {
  x: 50,
  y: 400,
};

const block1: Block = {
  id: "id1",
  position: pos1,
  size: size1,
};

const text: TextBlock = {
  ...block1,
  type: "text",
  chars: [ch1, ch2],
};

const size2: Size = {
  width: 800,
  height: 300,
};

const pos2: Position = {
  x: 20,
  y: 20,
};

const block2: Block = {
  id: "id2",
  position: pos2,
  size: size2,
};

const image: ImageBlock = {
  ...block2,
  type: "image",
  data: "mem.png",
};

const sizeEllipse: Size = {
  width: 100,
  height: 30,
};

const posEllipse: Position = {
  x: 30,
  y: 30,
};

const blockEllipse: Block = {
  id: "id3",
  position: posEllipse,
  size: sizeEllipse,
};

const sizeCircle: Size = {
  width: 100,
  height: 100,
};

const posCircle: Position = {
  x: 600,
  y: 300,
};

const blockCircle: Block = {
  id: "id4",
  position: posCircle,
  size: sizeCircle,
};

const sizeRectangle: Size = {
  width: 500,
  height: 100,
};

const posRectangle: Position = {
  x: 250,
  y: 200,
};

const blockRectangle: Block = {
  id: "id5",
  position: posRectangle,
  size: sizeRectangle,
};

const sizeTriangle: Size = {
  width: 50,
  height: 50,
};

const posTriangle: Position = {
  x: 250,
  y: 400,
};

const blockTriangle: Block = {
  id: "id6",
  position: posTriangle,
  size: sizeTriangle,
};

const figureTriangle: Figure = "triangle";

const figureRectangle: Figure = "rectangle";

const figureEllipse: Figure = "ellipse";

const figureCircle: Figure = "circle";

const graphicEllipse: GraphicBlock = {
  ...blockEllipse,
  type: "graphic",
  color: "#213123",
  form: figureEllipse,
};

const graphicCircle: GraphicBlock = {
  ...blockCircle,
  type: "graphic",
  color: "#111111",
  form: figureCircle,
};

const graphicRectangle: GraphicBlock = {
  ...blockRectangle,
  type: "graphic",
  color: "#123456",
  form: figureRectangle,
};

const graphicTriangle: GraphicBlock = {
  ...blockTriangle,
  type: "graphic",
  color: "#858585",
  form: figureTriangle,
};

const canvas3: Canvas = {
  name: "SecondCanvas",
  background: "#FFFFFF",
  size: sizeCanvas,
  filter: null,
  objects: [
    text,
    image,
    graphicEllipse,
    graphicCircle,
    graphicRectangle,
    graphicTriangle,
  ],
};

const hist1: HistoryOperations = {
  history: [canvas3],
  index: 0,
};

const doc: Application = {
  page: hist1.history[hist1.index],
  history: hist1,
};

export default doc;

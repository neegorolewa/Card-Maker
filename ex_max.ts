import {
  Canvas,
  Char,
  Size,
  Position,
  Block,
  TextBlock,
  Docum,
  ImageBlock,
  GraphicBlock,
  Figure,
  Operation,
  HistoryOperations,
} from "./data";

const size1: Size = {
  width: 10,
  height: 10,
};

const sizeCanvas: Size = {
  width: 100,
  height: 100,
};

const ch1: Char = {
  value: "H",
  fontSize: 11,
  fontFamily: "Font",
  color: "#111111",
  bold: false,
};

const ch2: Char = {
  value: "H",
  fontSize: 11,
  fontFamily: "Font",
  color: "#111111",
  bold: false,
};

const pos1: Position = {
  x: 12,
  y: 12,
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

const operation_1: Operation = {
  id: 1,
  type: "create",
};

const size2: Size = {
  width: 20,
  height: 20,
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
  data: "https://",
};

const operation_2: Operation = {
  id: 2,
  type: "create",
};

const sizeEllipse: Size = {
  width: 30,
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

const operation_3: Operation = {
  id: 3,
  type: "create",
};

const sizeCircle: Size = {
  width: 40,
  height: 40,
};

const posCircle: Position = {
  x: 30,
  y: 30,
};

const blockCircle: Block = {
  id: "id4",
  position: posCircle,
  size: sizeCircle,
};

const operation_4: Operation = {
  id: 4,
  type: "create",
};

const sizeRectangle: Size = {
  width: 20,
  height: 10,
};

const posRectangle: Position = {
  x: 5,
  y: 5,
};

const blockRectangle: Block = {
  id: "id5",
  position: posRectangle,
  size: sizeRectangle,
};

const operation_5: Operation = {
  id: 5,
  type: "create",
};

const sizeTriangle: Size = {
  width: 15,
  height: 15,
};

const posTriangle: Position = {
  x: 10,
  y: 20,
};

const blockTriangle: Block = {
  id: "id6",
  position: posTriangle,
  size: sizeTriangle,
};

const operation_6: Operation = {
  id: 6,
  type: "create",
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
  color: "#213123",
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

const operations: HistoryOperations = [
  operation_1,
  operation_2,
  operation_3,
  operation_4,
  operation_5,
  operation_6,
];

const doc: Docum = {
  page: canvas3,
};

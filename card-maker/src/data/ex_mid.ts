import {
  Canvas,
  Char,
  Size,
  Position,
  Block,
  TextBlock,
  Application,
  ImageBlock,
  HistoryOperations,
} from "./data";

const size1: Size = {
  width: 400,
  height: 250,
};

const sizeCanvas: Size = {
  width: 800,
  height: 500,
};

const ch1: Char = {
  id: "id1",
  value: "H",
  fontSize: 40,
  fontFamily: "Font-serif",
  color: "#123456",
  bold: false,
  italic: true,
  underlined: true,
};

const ch2: Char = {
  id: "id2",
  value: "H",
  fontSize: 43,
  fontFamily: "Arial",
  color: "#696969",
  bold: false,
  italic: true,
  underlined: true,
};

const pos1: Position = {
  x: 400,
  y: 250,
};

const block1: Block = {
  id: "id1",
  position: pos1,
  size: size1,
};

const text: TextBlock = {
  ...block1,
  type: "text",
  data: "2 тест",
  fontSize: 20,
  fontFamily: "Arial",
  color: "black",
  bold: true,
  italic: false,
  underlined: true,
};

const size2: Size = {
  width: 100,
  height: 100,
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

const canvas2: Canvas = {
  name: "SecondCanvas",
  background: "#FFFFFF",
  size: sizeCanvas,
  filter: null,
  objects: [text, image],
};

const hist2: HistoryOperations = {
  history: [canvas2],
  index: 0,
};

const doc: Application = {
  page: hist2.history[hist2.index],
  history: hist2,
};

export default doc;

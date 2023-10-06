import {
  Canvas,
  Char,
  Size,
  Position,
  Block,
  TextBlock,
  Docum,
  ImageBlock,
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

const canvas2: Canvas = {
  name: "SecondCanvas",
  background: "#FFFFFF",
  size: sizeCanvas,
  filter: null,
  objects: [text, image],
};

const doc: Docum = {
  page: canvas2,
};

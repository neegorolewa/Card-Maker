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
  Figure
} 
from './data'

const size1: Size = {
  width: 10,
  height: 10,
}

const sizeCanvas: Size = {
  width: 100,
  height: 100,
}

const ch1: Char = {
 value: 'H',
 fontSize: 11,
 fontFamily: 'Font',
 color: '#111111',
 bold: false,
};

const ch2: Char = {
  value: 'H',
  fontSize: 11,
  fontFamily: 'Font',
  color: '#111111',
  bold: false,
};

const pos1: Position = {
  x: 12,
  y: 12,
}

const block1: Block = {
  id: 'id1',
  position: pos1,
  size: size1,
}

const text: TextBlock = {
  ...block1,
  type: 'text',
  chars: [ch1, ch2],
}

const size2: Size = {
  width: 20,
  height: 20,
}

const pos2: Position = {
  x: 20,
  y: 20,
}

const block2: Block = {
  id: 'id2',
  position: pos2,
  size: size2,
}

const image: ImageBlock = {
  ...block2,
  type: 'image',
  data: 'https://',
}

const sizeEllipse: Size = {
  width: 30,
  height: 30,
}

const posEllipse: Position = {
  x: 30,
  y: 30,
}

const blockEllipse: Block = {
  id: 'id3',
  position: posEllipse,
  size: sizeEllipse,
}

const sizeCircle: Size = {
  width: 40,
  height: 40,
}

const posCircle: Position = {
  x: 30,
  y: 30,
}

const blockCircle: Block = {
  id: 'id3',
  position: posCircle,
  size: sizeCircle,
}

const figureEllipse: Figure = 'ellipse';

const figureCircle: Figure = 'circle';

const graphicEllipse: GraphicBlock = {
  ...blockEllipse,
  type: 'graphic',
  color: '#213123',
  form: figureEllipse,
}

const graphicCircle: GraphicBlock = {
  ...blockCircle,
  type: 'graphic',
  color: '#111111',
  form: figureCircle,
}

const canvas3: Canvas = {
  name: 'SecondCanvas',
  background: '#FFFFFF',
  size: sizeCanvas,
  filter: null,
  objects: [text, image, graphicEllipse, graphicCircle],
};  

const doc: Docum = {
  pages: canvas3,
}
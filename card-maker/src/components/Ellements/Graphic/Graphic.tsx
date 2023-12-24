import { Figure, Position } from "../../../data/data";

type GraphicProps = {
  form: Figure;
  color: string;
  width: number;
  height: number;
};

function calcCoordsTraingle(width: number, height: number): string {
  const x1 = width / 2;
  const y1 = 0;
  const x2 = 0;
  const y2 = height;
  const x3 = width;
  const y3 = height;
  return `${x1}, ${y1} ${x2}, ${y2} ${x3}, ${y3}`;
}

function Graphic(props: GraphicProps) {
  const form = props.form;
  const width = props.width;
  const height = props.height;
  const color = props.color;
  return (
    <svg width={width} height={height} fill={color}>
      <g>
        {form === "ellipse" && (
          <ellipse
            cx={width / 2}
            cy={height / 2}
            rx={width / 2}
            ry={height / 2}
          />
        )}
        {form === "rectangle" && (
          <rect x={0} y={0} width={width} height={height} />
        )}
        {form === "triangle" && (
          <polygon points={calcCoordsTraingle(width, height)} />
        )}
        {form === "circle" && (
          <circle cx={width / 2} cy={height / 2} r={width / 2} />
        )}
      </g>
    </svg>
  );
}

export default Graphic;

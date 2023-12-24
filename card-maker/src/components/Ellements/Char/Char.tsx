import { CSSProperties } from "react";
import { Color } from "../../../data/data";

type CharProps = {
  key: string;
  value: string;
  fontSize: number;
  fontFamily: string;
  color: Color;
  bold: boolean;
};

function Char(props: CharProps) {
  const style: CSSProperties = {
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    color: props.color,
    fontWeight: props.bold ? "bold" : "normal",
  };

  return <span style={style}>{props.value}</span>;
}

export default Char;

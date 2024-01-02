import { TextBlock } from "../../../data/data";
import { CSSProperties } from "react";

type TextProps = {
  text: TextBlock;
};

function Text(props: TextProps) {
  const text = props.text;
  const style: CSSProperties = {
    fontFamily: text.fontFamily,
    fontSize: text.fontSize,
    color: text.color,
    fontStyle: text.italic ? "italic" : "normal",
    fontWeight: text.bold ? "bold" : "normal",
    textDecoration: text.underlined ? "underline" : "none",
  };

  return (
    <span style={style} onClick={(e: React.MouseEvent) => e.preventDefault()}>
      {text.data}
    </span>
  );
}

export default Text;

import { Char as TChar } from "../../../data/data";
import Char from "../Char/Char";

type TextProps = {
  text: Array<TChar>;
};

function Text(props: TextProps) {
  return (
    <span>
      {props.text.map((char) => (
        <Char
          key={char.id}
          value={char.value}
          fontSize={char.fontSize}
          fontFamily={char.fontFamily}
          color={char.color}
          bold={char.bold}
        />
      ))}
    </span>
  );
}

export default Text;

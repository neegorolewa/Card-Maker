import { TextBlock } from "../../data/data";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  ChangeEvent,
  useContext,
} from "react";

import styles from "./TextMenu.module.css";
import { ColorContext } from "../../context/Color/ColorContext";
import { FontsContext } from "../../context/Fonts/FontsContext";

type Props = {
  newObj: TextBlock;
  setNewObj: Dispatch<SetStateAction<TextBlock>>;
};

const TextMenu = (props: Props) => {
  const { newObj, setNewObj } = props;

  const changeColor = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    setNewObj((newObj) => ({
      ...newObj,
      color: element.getAttribute("data-color")!,
    }));
  };

  const changeFont = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setNewObj((newObj) => ({
      ...newObj,
      fontFamily: target.value,
    }));
  };

  const changeTextStyle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewObj((newObj) => ({
      ...newObj,
      [`${e.target.value}`]: e.target.checked,
    }));
  };

  const changeTextElement = (e: ChangeEvent<HTMLInputElement>) => {
    setNewObj((newObj) => ({
      ...newObj,
      data: e.target.value,
    }));
  };

  const changeTextSize = (e: ChangeEvent<HTMLInputElement>) => {
    const fontSize = e.target.value === "" ? 0 : parseInt(e.target.value);
    setNewObj((newObj) => ({
      ...newObj,
      fontSize: fontSize,
    }));
  };

  const colors = useContext(ColorContext);
  const fonts = useContext(FontsContext);
  return (
    <div className="menuText">
      <select onChange={changeFont} name="fontSelect" id="fontSelect">
        {fonts.length &&
          fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
      </select>
      <div className={styles.selectColor}>
        {colors.length &&
          colors.map((color) => (
            <div key={color}>
              <div
                onClick={changeColor}
                data-color={color}
                className={`${styles.colorLabel} ${
                  newObj.color == color ? styles.checkedColorCheckbox : null
                }`}
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
      </div>
      <input onChange={changeTextSize} type="number" />
      <input onChange={changeTextElement} type="text" value={newObj.data} />
      Bold
      <input onChange={changeTextStyle} type="checkbox" value={"bold"} />
      Italic
      <input onChange={changeTextStyle} type="checkbox" value={"italic"} />
      Underlined
      <input onChange={changeTextStyle} type="checkbox" value={"underlined"} />
    </div>
  );
};

export default TextMenu;

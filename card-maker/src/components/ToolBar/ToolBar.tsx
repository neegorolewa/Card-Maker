import { Dispatch, SetStateAction, useState } from "react";
import { GraphicBlock, ImageBlock, TextBlock } from "../../data/data";
import styles from "./ToolBar.module.css";
import Button from "../Ellements/Button/Button";

type Props = {
  add: (obj: TextBlock | ImageBlock | GraphicBlock) => void;
  setTextMenu: (value: boolean) => void;
};

function ToolBar(props: Props) {
  const addObject = props.add;
  const [id, setID] = useState<string>("1");
  const addTextBlock = () => {
    const obj: TextBlock = {
      id: id,
      position: { x: 100, y: 100 },
      size: { width: 100, height: 50 },
      type: "text",
      data: "Введите текст...",
      fontSize: 15,
      fontFamily: "arial",
      color: "black",
      bold: false,
      italic: false,
      underlined: false,
    };
    addObject(obj);
    props.setTextMenu(true);
    setID(String(Number(id) + 1));
  };

  function uploadFile() {
    const input = document.createElement("input");
    input.type = "file";

    input.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        const src = URL.createObjectURL(selectedFile);
        addImage(src);
      }
    });
    input.click();
  }

  const addImage = (src: string) => {
    const obj: ImageBlock = {
      id: id,
      position: { x: 100, y: 100 },
      size: { width: 50, height: 25 },
      type: "image",
      data: src,
    };
    addObject(obj);
    props.setTextMenu(true);
    setID(String(Number(id) + 1));
  };

  const addEllipse = () => {
    const obj: GraphicBlock = {
      id: id,
      position: { x: 100, y: 100 },
      size: { width: 50, height: 50 },
      type: "graphic",
      form: "ellipse",
      color: "#000000",
    };
    addObject(obj);
    props.setTextMenu(true);
    setID(String(Number(id) + 1));
  };

  const addRectangle = () => {
    const obj: GraphicBlock = {
      id: id,
      position: { x: 100, y: 100 },
      size: { width: 50, height: 50 },
      type: "graphic",
      form: "rectangle",
      color: "#000000",
    };
    addObject(obj);
    props.setTextMenu(true);
    setID(String(Number(id) + 1));
  };

  const addTriangle = () => {
    const obj: GraphicBlock = {
      id: id,
      position: { x: 100, y: 100 },
      size: { width: 50, height: 50 },
      type: "graphic",
      form: "triangle",
      color: "#000000",
    };
    addObject(obj);
    props.setTextMenu(true);
    setID(String(Number(id) + 1));
  };

  const addCircle = () => {
    const obj: GraphicBlock = {
      id: id,
      position: { x: 100, y: 100 },
      size: { width: 50, height: 50 },
      type: "graphic",
      form: "circle",
      color: "#000000",
    };
    addObject(obj);
    props.setTextMenu(true);
    setID(String(Number(id) + 1));
  };

  return (
    <div className={styles.tool_bar}>
      <Button type="undo" onclick={() => console.log("undo")} />
      <Button type="redo" onclick={() => console.log("redo")} />
      <Button type="image" onclick={uploadFile} />
      <Button type="text" onclick={addTextBlock} />
      <Button type="rectangle" onclick={addRectangle} />
      <Button type="circle" onclick={addCircle} />
      <Button type="ellipse" onclick={addEllipse} />
      <Button type="triangle" onclick={addTriangle} />
    </div>
  );
}

export default ToolBar;

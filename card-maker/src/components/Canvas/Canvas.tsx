import { CSSProperties, Dispatch, SetStateAction } from "react";
import {
  Canvas as TCanvas,
  GraphicBlock,
  ImageBlock,
  TextBlock,
} from "../../data/data";
import styles from "./Canvas.module.css";
import Block from "../Ellements/Block/Block";
import SelectionArea from "../SelectArea/SelectArea";

type CanvasProps = {
  page: TCanvas;
  newObj: GraphicBlock | ImageBlock | TextBlock | null;
  setNewObj: Dispatch<SetStateAction<TextBlock | ImageBlock | GraphicBlock>>;
  setCanvas: Dispatch<SetStateAction<TCanvas>>;
  setTextMenu: Dispatch<SetStateAction<boolean>>;
};

function Canvas(props: CanvasProps) {
  const canvas = props.page;
  const newObj = props.newObj;
  const setNewObj = props.setNewObj;
  const setCanvas = props.setCanvas;
  const setTextMenu = props.setTextMenu;

  const style: CSSProperties = {
    background: canvas.background,
    width: canvas.size.width,
    height: canvas.size.height,
  };
  return (
    <div className={styles.canvas} style={style}>
      {canvas.objects.map((object) => (
        <Block key={object.id} object={object} />
      ))}
      {newObj != null ? (
        <SelectionArea
          newObj={newObj}
          setNewObj={setNewObj}
          setCanvas={setCanvas}
          setTextMenu={setTextMenu}
        />
      ) : null}
    </div>
  );
}

export default Canvas;

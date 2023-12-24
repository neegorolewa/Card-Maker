import { CSSProperties } from "react";
import { Canvas as TCanvas } from "../../data/data";
import styles from "./Canvas.module.css";
import Block from "../Ellements/Block/Block";

type CanvasProps = {
  page: TCanvas;
};

function Canvas(props: CanvasProps) {
  const canvas = props.page;
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
    </div>
  );
}

export default Canvas;

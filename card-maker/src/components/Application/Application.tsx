import {
  Canvas as TCanvas,
  Application as TApplication,
} from "../../data/data";
import Canvas from "../Canvas/Canvas";
import ToolBar from "../ToolBar/ToolBar";
import styles from "./Application.module.css";

type DocProps = {
  app: TApplication;
};

function Application(props: DocProps) {
  const canvas: TCanvas = props.app.page;
  return (
    <div className={styles.app}>
      <p className={styles.app_name}>Project: {canvas.name}</p>
      <Canvas page={canvas} />
      <ToolBar />
    </div>
  );
}

export default Application;

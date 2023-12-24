import {
  Canvas as TCanvas,
  Application as TApplication,
  TextBlock,
  ImageBlock,
  GraphicBlock,
} from "../../data/data";
import Canvas from "../Canvas/Canvas";
import ToolBar from "../ToolBar/ToolBar";
import styles from "./Application.module.css";
import FileMenu from "../Menu/Menu";
import { useState } from "react";

type DocProps = {
  app: TApplication;
};

function Application(props: DocProps) {
  const [canvas, setCanvas] = useState<TCanvas>(props.app.page);

  const addObject = (obj: TextBlock | ImageBlock | GraphicBlock) => {
    setCanvas((canvas: TCanvas) => ({
      ...canvas,
      objects: [...canvas.objects, obj],
    }));
  };

  return (
    <div className={styles.app}>
      <p className={styles.app_name}>{canvas.name} - Card Maker</p>
      <div>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>File</button>
          <div className={styles.dropdown_content}>
            <FileMenu export={canvas} import={setCanvas} />
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <Canvas page={canvas} />
      </div>
      <div className={styles.location}>
        <ToolBar />
      </div>
    </div>
  );
}

export default Application;

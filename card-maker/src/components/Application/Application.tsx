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
import TextMenu from "../TextMenu/TextMenu";
import { useState, Dispatch, SetStateAction } from "react";

type DocProps = {
  app: TApplication;
};

function Application(props: DocProps) {
  const [canvas, setCanvas] = useState<TCanvas>(props.app.page);

  const addObject = (obj: TextBlock | ImageBlock | GraphicBlock) => {
    setNewObj(obj);
  };

  const [newObj, setNewObj] = useState<TextBlock | ImageBlock | GraphicBlock>(
    null!,
  );

  const [showTextMenu, setTextMenu] = useState<boolean>(false);

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
        <Canvas
          page={canvas}
          newObj={newObj}
          setNewObj={setNewObj}
          setCanvas={setCanvas}
          setTextMenu={setTextMenu}
        />
      </div>
      <div className={styles.location}>
        <ToolBar add={addObject} setTextMenu={setTextMenu} />
      </div>
      {showTextMenu ? (
        <div className={styles.bar_section}>
          <TextMenu
            newObj={newObj as TextBlock}
            setNewObj={setNewObj as Dispatch<SetStateAction<TextBlock>>}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Application;

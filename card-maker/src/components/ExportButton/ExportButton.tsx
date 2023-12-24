import { Canvas } from "../../data/data";
import styles from "./ExportButton.module.css";

type ButtonProps = {
  type: string;
  action: Canvas;
};

function ExportButton(props: ButtonProps) {
  const type = props.type;
  const canvas = props.action;
  const src = "./img/" + type + ".png";

  const file = new Blob([JSON.stringify(canvas)], {
    type: "application.json",
  });

  function downloadFile() {
    const link = document.createElement("a");
    const url = URL.createObjectURL(file);
    link.href = url;
    link.download = "file.json";
    link.click();
  }

  return (
    <button className={styles.button} onClick={downloadFile}>
      <img src={src} className={styles.icon} alt={props.type} />
    </button>
  );
}

export default ExportButton;

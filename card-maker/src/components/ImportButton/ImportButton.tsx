import styles from "./ImportButton.module.css";
import { Canvas } from "../../data/data";

type ButtonProps = {
  type: string;
  action: (canvas: Canvas) => void;
};

function ImportButton(props: ButtonProps) {
  const type = props.type;
  const setCanvas = props.action;
  const src = "./img/" + type + ".png";

  function importFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];

      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          const fileContent = JSON.parse(reader.result as string);
          setCanvas(fileContent);
        };
        reader.readAsText(selectedFile);
      }
    });

    input.click();
  }

  return (
    <button className={styles.button} onClick={importFile}>
      <img src={src} className={styles.icon} alt={props.type} />
    </button>
  );
}

export default ImportButton;

import Button from "../Ellements/Button/Button";
import { Canvas } from "../../data/data";
import ExportButton from "../ExportButton/ExportButton";
import ImportButton from "../ImportButton/ImportButton";

type FileMenuProps = {
  export: Canvas;
  import: (canvas: Canvas) => void;
};

function FileMenu(props: FileMenuProps) {
  return (
    <div>
      <Button type="new-file" />
      <Button type="save-file" />
      <ImportButton type="import-file" action={props.import} />
      <ExportButton type="export-file" action={props.export} />
    </div>
  );
}

export default FileMenu;

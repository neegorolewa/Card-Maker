import styles from "./ToolBar.module.css";
import Button from "../Ellements/Button/Button";

function ToolBar() {
  return (
    <div className={styles.tool_bar}>
      <Button type="undo" />
      <Button type="redo" />
      <Button type="new-file" />
      <Button type="import-file" />
      <Button type="save-file" />
      <Button type="export-file" />
      <Button type="image" />
      <Button type="text" />
      <Button type="rectangle" />
      <Button type="circle" />
      <Button type="ellipse" />
      <Button type="triangle" />
    </div>
  );
}

export default ToolBar;

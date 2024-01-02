import { CSSProperties } from "react";
import { GraphicBlock, TextBlock, ImageBlock } from "../../../data/data";
import Graphic from "../Graphic/Graphic";
import Image from "../Image/Image";
import Text from "../Text/Text";
import styles from "./Block.module.css";

type BlockProps = {
  object: GraphicBlock | TextBlock | ImageBlock;
};

function isText(object: BlockProps["object"]): object is TextBlock {
  return (
    object.type === "text" &&
    typeof object.data === "string" &&
    object.data !== null
  );
}

function isImage(object: BlockProps["object"]): object is ImageBlock {
  return (
    object.type === "image" &&
    typeof object.data === "string" &&
    object.data !== null
  );
}

function isGraphic(object: BlockProps["object"]): object is GraphicBlock {
  return (
    object.type === "graphic" &&
    typeof object.form !== null &&
    object.color !== null
  );
}

function Block(props: BlockProps) {
  const object = props.object;
  const style: CSSProperties = {
    width: object.size.width,
    height: object.size.height,
    top: object.position.y,
    left: object.position.x,
  };

  return (
    <div style={style} className={styles.block}>
      {isText(object) && <Text text={object} />}
      {isImage(object) && (
        <Image
          src={object.data}
          width={object.size.width}
          height={object.size.height}
        />
      )}
      {isGraphic(object) && (
        <Graphic
          form={object.form}
          color={object.color}
          width={object.size.width}
          height={object.size.height}
        />
      )}
    </div>
  );
}

export default Block;

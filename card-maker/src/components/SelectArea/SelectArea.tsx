import { useRef, useEffect } from "react";
import styles from "./SelectArea.module.css";
import { Dispatch, SetStateAction } from "react";
import { useDnD } from "../../hooks/useDnD/useDnD";
import ResizeArea from "../Resize/Resize";
import { Canvas, TextBlock, ImageBlock, GraphicBlock } from "../../data/data";
import Text from "../Ellements/Text/Text";
import Image from "../Ellements/Image/Image";
import Graphic from "../Ellements/Graphic/Graphic";

type Props = {
  newObj: TextBlock | ImageBlock | GraphicBlock;
  setNewObj: Dispatch<SetStateAction<TextBlock | ImageBlock | GraphicBlock>>;
  setCanvas: Dispatch<SetStateAction<Canvas>>;
  setTextMenu: Dispatch<SetStateAction<boolean>>;
};

function SelectionArea(props: Props) {
  const { newObj, setCanvas, setNewObj, setTextMenu } = props;

  const styleArea = {
    width: newObj.size.width,
    height: newObj.size.height,
    top: newObj.position.y,
    left: newObj.position.x,
  };

  const { registerDndItem } = useDnD();

  const ref = useRef<HTMLDivElement>(null);
  const dndControlRef = useRef<HTMLDivElement>(null);
  const refAreaWrapper = useRef<HTMLDivElement>(null);

  const addElement = (newObj: TextBlock | ImageBlock | GraphicBlock) => {
    switch (newObj.type) {
      case "text":
        return <Text text={newObj} />;
      case "graphic":
        return (
          <Graphic
            form={newObj.form}
            color={newObj.color}
            width={newObj.size.width}
            height={newObj.size.height}
          />
        );
      case "image":
        return (
          <Image
            src={newObj.data}
            width={newObj.size.width}
            height={newObj.size.height}
          />
        );
      default:
        return null;
    }
  };

  const deleteNewItem = () => {
    setTextMenu(() => false);
    setNewObj(() => null!);
  };

  const addElemToCanvas = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target == refAreaWrapper.current) {
      setCanvas((page: Canvas) => {
        return {
          ...page,
          objects: [...page.objects, newObj],
        };
      });
      deleteNewItem();
    }
  };

  useEffect(() => {
    const { onDragStart } = registerDndItem({
      elementRef: ref,
      controlRef: dndControlRef,
    });

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent: MouseEvent) => {
          dragEvent.stopPropagation();
          dragEvent.preventDefault();
          ref.current!.style.top = `${
            dragEvent.clientY + (newObj.position.y - mouseDownEvent.clientY)
          }px`;
          ref.current!.style.left = `${
            dragEvent.clientX + (newObj.position.x - mouseDownEvent.clientX)
          }px`;
        },
        onDrop: (dropEvent: MouseEvent) => {
          dropEvent.stopPropagation();
          setNewObj((newObj) => ({
            ...newObj,
            position: {
              x:
                dropEvent.clientX +
                (newObj.position.x - mouseDownEvent.clientX),
              y:
                dropEvent.clientY +
                (newObj.position.y - mouseDownEvent.clientY),
            },
          }));
        },
      });
    };

    if (dndControlRef.current != null) {
      const control = dndControlRef.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [
    newObj.size.width,
    newObj.size.height,
    newObj.position.x,
    newObj.position.y,
  ]);

  return (
    <div
      ref={refAreaWrapper}
      className={styles.selectionAreaWrapper}
      onClick={addElemToCanvas}
    >
      <div style={styleArea} ref={ref} className={styles.selectionArea}>
        <div ref={dndControlRef} className={styles.dndBlock}></div>
        {newObj.type != "text" ? (
          <ResizeArea refResize={ref} newObj={newObj} setNewObj={setNewObj} />
        ) : null}
        {addElement(newObj)}
        <div onClick={deleteNewItem}>
          <img
            className={styles.deleteIcon}
            src="./img/delete.png"
            alt="delete"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectionArea;

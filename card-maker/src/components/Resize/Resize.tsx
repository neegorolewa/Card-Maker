import { useRef, RefObject, useEffect } from "react";
import { useResize, ControlResizeRefs } from "../../hooks/useResize/useResize";
import { Dispatch, SetStateAction } from "react";
import styles from "./Resize.module.css";

import { TextBlock, ImageBlock, GraphicBlock } from "../../data/data";

type Props = {
  refResize: RefObject<HTMLDivElement>;
  newObj: TextBlock | ImageBlock | GraphicBlock;
  setNewObj: Dispatch<SetStateAction<TextBlock | ImageBlock | GraphicBlock>>;
};

const ResizeArea = (props: Props) => {
  const { registerResizeItem } = useResize();

  const { refResize, newObj, setNewObj } = props;

  const resizeControlRef: ControlResizeRefs = {
    leftControl: useRef<HTMLDivElement>(null),
    rightControl: useRef<HTMLDivElement>(null),
    topControl: useRef<HTMLDivElement>(null),
    bottomControl: useRef<HTMLDivElement>(null),
    topLeftControl: useRef<HTMLDivElement>(null),
    topRightControl: useRef<HTMLDivElement>(null),
    bottomLeftControl: useRef<HTMLDivElement>(null),
    bottomRightControl: useRef<HTMLDivElement>(null),
  };

  const resizeTopControl = (
    dragEvent: MouseEvent,
    mouseDownEvent: MouseEvent,
  ) => {
    refResize.current!.style.height = `${
      newObj.size.height - dragEvent.clientY + mouseDownEvent.clientY
    }px`;

    if (
      newObj.position.y + dragEvent.clientY - mouseDownEvent.clientY <
      newObj.position.y + newObj.size.height + 3
    ) {
      refResize.current!.style.top = `${
        newObj.position.y + dragEvent.clientY - mouseDownEvent.clientY
      }px`;
    }
  };

  const resizeLeftControl = (
    dragEvent: MouseEvent,
    mouseDownEvent: MouseEvent,
  ) => {
    refResize.current!.style.width = `${
      newObj.size.width - dragEvent.clientX + mouseDownEvent.clientX
    }px`;

    if (
      newObj.position.x + dragEvent.clientX - mouseDownEvent.clientX <
      newObj.position.x + newObj.size.width + 3
    ) {
      refResize.current!.style.left = `${
        newObj.position.x + dragEvent.clientX - mouseDownEvent.clientX
      }px`;
    }
  };

  const resizeBottomControl = (
    dragEvent: MouseEvent,
    mouseDownEvent: MouseEvent,
  ) => {
    refResize.current!.style.height = `${
      newObj.size.height + dragEvent.clientY - mouseDownEvent.clientY
    }px`;
  };

  const resizeRightControl = (
    dragEvent: MouseEvent,
    mouseDownEvent: MouseEvent,
  ) => {
    refResize.current!.style.width = `${
      newObj.size.width + dragEvent.clientX - mouseDownEvent.clientX
    }px`;
  };

  useEffect(() => {
    const { onResizeStart } = registerResizeItem({
      elementRef: props.refResize,
      controlRef: resizeControlRef,
    });

    const onMouseDownResize = (mouseDownEvent: MouseEvent) => {
      onResizeStart({
        onDrag: (dragEvent) => {
          dragEvent.preventDefault();
          dragEvent.stopPropagation();

          if (mouseDownEvent.target === resizeControlRef.leftControl.current) {
            resizeLeftControl(dragEvent, mouseDownEvent);
          }

          if (mouseDownEvent.target === resizeControlRef.rightControl.current) {
            resizeRightControl(dragEvent, mouseDownEvent);
          }

          if (mouseDownEvent.target === resizeControlRef.topControl.current) {
            resizeTopControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target === resizeControlRef.bottomControl.current
          ) {
            resizeBottomControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target === resizeControlRef.topLeftControl.current
          ) {
            resizeLeftControl(dragEvent, mouseDownEvent);
            resizeTopControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target === resizeControlRef.topRightControl.current
          ) {
            resizeRightControl(dragEvent, mouseDownEvent);
            resizeTopControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target === resizeControlRef.bottomLeftControl.current
          ) {
            resizeLeftControl(dragEvent, mouseDownEvent);
            resizeBottomControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target ===
            resizeControlRef.bottomRightControl.current
          ) {
            resizeRightControl(dragEvent, mouseDownEvent);
            resizeBottomControl(dragEvent, mouseDownEvent);
          }
        },
        onDrop: (dropEvent) => {
          console.log(refResize.current!.style.left);
          let x: number = newObj.position.x + newObj.position.x,
            y: number = newObj.position.y + newObj.position.y;
          if (refResize.current?.getBoundingClientRect().x != x) {
            x = refResize.current!.getBoundingClientRect().x;
          } else if (refResize.current?.getBoundingClientRect().y != y) {
            y = refResize.current!.getBoundingClientRect().y - 50;
          }

          setNewObj((elem: TextBlock | ImageBlock | GraphicBlock) => {
            return {
              ...elem,
              position: {
                x: parseInt(refResize.current!.style.left),
                y: parseInt(refResize.current!.style.top),
              },
              size: {
                width: parseInt(refResize.current!.style.width),
                height: parseInt(refResize.current!.style.height),
              },
            };
          });
        },
      });
    };

    Object.values(resizeControlRef).map((control) => {
      control.current!.addEventListener("mousedown", onMouseDownResize);
      return () =>
        control.current!.removeEventListener("mousedown", onMouseDownResize);
    });
  }, [
    newObj.size.width,
    newObj.size.height,
    newObj.position.x,
    newObj.position.y,
  ]);

  return (
    <div className={styles.resizeArea}>
      <div
        className={`${styles.control} ${styles.leftContol}`}
        ref={resizeControlRef.leftControl}
      ></div>
      <div
        className={`${styles.control} ${styles.topLeftControl}`}
        ref={resizeControlRef.topLeftControl}
      ></div>
      <div
        className={`${styles.control} ${styles.topControl}`}
        ref={resizeControlRef.topControl}
      ></div>
      <div
        className={`${styles.control} ${styles.topRightControl}`}
        ref={resizeControlRef.topRightControl}
      ></div>
      <div
        className={`${styles.control} ${styles.rightControl}`}
        ref={resizeControlRef.rightControl}
      ></div>
      <div
        className={`${styles.control} ${styles.bottomRightControl}`}
        ref={resizeControlRef.bottomRightControl}
      ></div>
      <div
        className={`${styles.control} ${styles.bottomControl}`}
        ref={resizeControlRef.bottomControl}
      ></div>
      <div
        className={`${styles.control} ${styles.bottomLeftControl}`}
        ref={resizeControlRef.bottomLeftControl}
      ></div>
    </div>
  );
};

export default ResizeArea;

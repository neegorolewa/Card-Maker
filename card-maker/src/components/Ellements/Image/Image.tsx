type ImageProps = {
  src: string;
  width: number;
  height: number;
};

function Image(props: ImageProps) {
  return <img src={props.src} width={props.width} height={props.height} />;
}

export default Image;

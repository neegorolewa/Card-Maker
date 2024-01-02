import styles from "./Button.module.css";

type ButtonProps = {
  type: string;
  onclick: () => void;
};

function Button(props: ButtonProps) {
  const src = "./img/" + props.type + ".png";
  const action = props.onclick;

  return (
    <button className={styles.button} onClick={action}>
      <img src={src} className={styles.icon} alt={props.type}></img>
    </button>
  );
}

export default Button;

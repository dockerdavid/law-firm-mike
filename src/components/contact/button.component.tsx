import styles from "./Button.module.css";

type ButtonProps = {
  onClick: (e: any) => void;
  isEnabled: boolean;
};

export const ButtonComponent = ({ onClick, isEnabled = false }: ButtonProps) => {
  return (
    <button className={ isEnabled ? styles.button : styles.buttonDisabled } onClick={onClick}>
      SEND
    </button>
  );
};

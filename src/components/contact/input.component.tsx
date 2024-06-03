import styles from "./Input.module.css";

type InputComponentProps = {
  setValue: (value: string) => void;
  placeholder?: string;
};

export const InputComponent = ({
  setValue,
  placeholder,
}: InputComponentProps) => {
  return (
    <input
      className={styles.text}
      type="text"
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

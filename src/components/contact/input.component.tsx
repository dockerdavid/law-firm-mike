import styles from "./Input.module.css";

type InputComponentProps = {
  setValue: (value: string) => void;
  placeholder?: string;
  value: string;
};

export const InputComponent = ({
  setValue,
  placeholder,
  value,
}: InputComponentProps) => {
  return (
    <input
      className={styles.text}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

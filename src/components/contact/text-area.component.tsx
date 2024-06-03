import styles from "./Input.module.css";

type TextAreaProps = {
  setValue: (value: string) => void;
  placeholder?: string;
};

export const TextAreaComponent = ({
  placeholder = "",
  setValue,
}: TextAreaProps) => {
  return (
    <textarea
      className={styles.text}
      onChange={(e) => setValue(e.target.value)}
      id=""
      placeholder={placeholder}
      cols={30}
      rows={10}
    ></textarea>
  );
};

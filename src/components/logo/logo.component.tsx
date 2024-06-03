import { useEffect, useRef } from "react";
import styles from "./Logo.module.css";

type LogoComponentProps = {
  handleRestOfViewport: (value: number) => void;
};

const LogoComponent = ({ handleRestOfViewport }: LogoComponentProps) => {
  const logoComponentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleRestOfViewport(logoComponentRef.current?.clientHeight || 0);
  }, []);

  return (
    <div className={styles.container} ref={logoComponentRef}>
      <img className={styles.imgContainer} src="/logo.png" alt="logo" />
    </div>
  );
};

export default LogoComponent;

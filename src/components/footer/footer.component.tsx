import styles from "./Footer.module.css";

const FooterComponent = () => {
  return (
    <div className={styles.container} id="faq">
      <img className={styles.imgContainer} src="/logo.png" alt="logo" />
      <div className={styles.urlContainer}>
        <a href="#">FAQ</a>
        <a href="#">Florida Law Updates</a>
      </div>
    </div>
  );
};

export default FooterComponent;

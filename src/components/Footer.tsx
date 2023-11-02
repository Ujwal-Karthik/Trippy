import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>©️ {new Date().getFullYear()} by Trippy Ltd</p>
    </footer>
  );
};

export default Footer;

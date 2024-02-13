import styles from "../../styles/section.module.scss";

const Section = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;

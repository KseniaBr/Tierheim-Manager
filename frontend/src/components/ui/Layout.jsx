import Footer from "../Footer";
import Navbar from "../navigation/Navbar";

import styles from "../../styles/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

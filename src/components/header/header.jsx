import { Navbar } from "../../ui-components";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={`p-3 ${styles.header}`}>
      <Navbar />
    </header>
  );
};

export default Header;

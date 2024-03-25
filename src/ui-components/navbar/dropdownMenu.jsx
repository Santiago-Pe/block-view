import { useMobile } from "../../context/mobileContext";
import styles from "./navbar.module.css";

const DropdownMenu = () => {
  const { navOpen, openNav, closeNav } = useMobile();

  return (
    <div className={styles.dropdownMenu}>
      <button
        className={styles.menuButton}
        onClick={navOpen ? closeNav : openNav}
      >
        {navOpen ? "Close Menu" : "Open Menu"}
      </button>
      <div className={`${styles.navLinks} ${navOpen ? styles.open : ""}`}>
        {/* Aquí colocarías tus enlaces de navegación */}
        <button>Link 1</button>
        <button>Link 2</button>
        <button>Link 3</button>
      </div>
    </div>
  );
};

export default DropdownMenu;

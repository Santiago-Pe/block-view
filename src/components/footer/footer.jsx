import { Link } from "react-router-dom";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={`p-3 ${styles.footer} text-center`}>
      <Link to={"https://www.coingecko.com/"}>Data provided by CoinGecko</Link>
    </footer>
  );
};

export default Footer;

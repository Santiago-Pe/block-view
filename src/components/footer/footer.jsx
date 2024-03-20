import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4 px-2">
      <Link to={"https://www.coingecko.com/"}>Data provided by CoinGecko</Link>
    </footer>
  );
};

export default Footer;

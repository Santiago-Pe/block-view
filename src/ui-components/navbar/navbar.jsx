import { Link } from "react-router-dom";
import Button from "../button/button";
import BreadCrumbs from "../breadcrumbs/breadcrumbs";
import { useContext } from "react";
import { BreadCrumbContext } from "../../context/breadcrumbContext";

const Navbar = () => {
  const { breadcrumbs } = useContext(BreadCrumbContext);
  const conectWallet = () => {
    console.log("connect metamask");
  };
  return (
    <nav className="d-flex justify-content-end align-items-center">
      <BreadCrumbs crumbs={breadcrumbs} />
      <div className="me-4">
        <Link to={"/"}>Home</Link>
      </div>
      <div className="right-section">
        <Button onClick={conectWallet} text="Connect Metamask" size={"lg"} />
      </div>
    </nav>
  );
};

export default Navbar;

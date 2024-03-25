import { Link } from "react-router-dom";
import { Show } from "../../components";
import { useMobile } from "../../context/mobileContext";
import styles from "./navbar.module.css";

import { useSelector } from "react-redux";
import { useMetaMask } from "../../reduxes/metamaskActions";
import Button from "../button/button";
import StatusAccount from "../statusAccount/statusAccount";
import { CloseIcon, MenuBurger } from "../icons";

const DropdownMenu = () => {
  const { navOpen, openNav, closeNav } = useMobile();
  const { hasProvider, isConnecting, isConnected, wallet, errorMessage } =
    useSelector((state) => state.user);
  const { connectMetaMask, disconnectMetaMask } = useMetaMask();
  return (
    <div className={`${styles.dropdownMenu}`}>
      <div onClick={navOpen ? closeNav : openNav}>
        <Show>
          <Show.When isTrue={!navOpen}>
            <MenuBurger color="#000" />
          </Show.When>
          <Show.Else>
            <CloseIcon color="#000" />
          </Show.Else>
        </Show>
      </div>

      <div
        className={`${
          styles.navLinks
        } d-flex justify-content-center flex-column align-items-center  ${
          navOpen ? styles.open : ""
        }`}
      >
        <Show.When isTrue={!hasProvider}>
          <Link to="https://metamask.io" target="_blank">
            Install MetaMask
          </Link>
        </Show.When>
        <Show.When isTrue={!isConnected && hasProvider}>
          <Button
            onClick={connectMetaMask}
            disabled={isConnecting}
            text="Connect Metamask"
            size={"md"}
          />
        </Show.When>
        <Show.When isTrue={isConnected}>
          <Button onClick={disconnectMetaMask} text="Disconnect" size={"sm"} />
        </Show.When>
        <div className="my-3">
          <StatusAccount
            isConnected={isConnected}
            wallet={wallet}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

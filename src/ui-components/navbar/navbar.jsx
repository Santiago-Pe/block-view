import { useContext } from "react";
import { useSelector } from "react-redux";
import Button from "../button/button";
import BreadCrumb from "../breadcrumbs/breadcrumbs";

import { BreadCrumbContext } from "../../context/breadcrumbContext";
import { useMetaMask } from "../../reduxes/metamaskActions";
import { Link } from "react-router-dom";
import { Show } from "../../components";
import { weiToEther } from "../../helpers/helpers";
import StatusAccount from "../statusAccount/statusAccount";

const Navbar = () => {
  const { breadcrumbs } = useContext(BreadCrumbContext);
  const { hasProvider, isConnecting, isConnected, wallet, errorMessage } =
    useSelector((state) => state.user);
  const { connectMetaMask, disconnectMetaMask } = useMetaMask();

  return (
    <nav className="d-flex justify-content-between align-items-center">
      <div className="">
        <BreadCrumb crumbs={breadcrumbs} />
      </div>
      <div className="">
        <Show.When isTrue={!hasProvider}>
          <Link to="https://metamask.io" target="_blank">
            Install MetaMask
          </Link>
        </Show.When>
        <Show.When isTrue={hasProvider && !isConnected}>
          <Button
            onClick={connectMetaMask}
            disabled={isConnecting}
            text="Connect Metamask"
            size={"lg"}
          />
        </Show.When>
        <Show.When isTrue={!errorMessage && isConnected}>
          <div className="d-flex">
            <div className="d-flex justify-content-center align-items-center me-4">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  background: "rgb(23; 178; 106)",
                  borderRadius: "9999px",
                  display: "inline-block",
                  marginBottom: "0px",
                  marginRight: "0.25rem",
                  backgroundColor: "#17B26A",
                }}
              ></div>
              <span>Balance of ethereum: ${weiToEther(wallet.balance)}</span>
            </div>
            <StatusAccount />
            <Button
              onClick={disconnectMetaMask}
              text="Disconnect"
              size={"lg"}
            />
          </div>
        </Show.When>

        <Show.When isTrue={errorMessage !== null}>
          <div className="d-flex">
            <Button
              onClick={connectMetaMask}
              disabled={isConnecting}
              text="Connect Metamask"
              size={"lg"}
            />
          </div>
        </Show.When>
      </div>
    </nav>
  );
};

export default Navbar;

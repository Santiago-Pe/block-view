import { useSelector } from "react-redux";
import Button from "../button/button";
import { useMetaMask } from "../../reduxes/metamaskActions";
import { Link } from "react-router-dom";
import { Show } from "../../components";
import StatusAccount from "../statusAccount/statusAccount";

const NavbarDesktop = () => {
  const { hasProvider, isConnecting, isConnected, wallet, errorMessage } =
    useSelector((state) => state.user);

  const { connectMetaMask, disconnectMetaMask } = useMetaMask();

  return (
    <div className="d-flex">
      <StatusAccount
        isConnected={isConnected}
        wallet={wallet}
        errorMessage={errorMessage}
      />
      <Show.When isTrue={!hasProvider}>
        <Link to="https://metamask.io" target="_blank">
          Install MetaMask
        </Link>
      </Show.When>
      <Show.When isTrue={!isConnected}>
        <Button
          onClick={connectMetaMask}
          disabled={isConnecting}
          text="Connect Metamask"
          size={"lg"}
        />
      </Show.When>
      <Show.When isTrue={isConnected}>
        <Button onClick={disconnectMetaMask} text="Disconnect" size={"lg"} />
      </Show.When>
    </div>
  );
};

export default NavbarDesktop;

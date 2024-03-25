import PropTypes from "prop-types";
import { weiToEther } from "../../helpers/helpers";
import { Show } from "../../components";

const StatusAccount = ({ isConnected, errorMessage = null, wallet }) => {
  const getColorCode = () => {
    switch (true) {
      case isConnected && !errorMessage:
        return "#17B26A"; // Verde
      case errorMessage !== null:
        return "red"; // Rojo
      default:
        return "blue"; // Azul
    }
  };

  return (
    <div className="d-flex align-items-center me-4">
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "9999px",
          display: "inline-block",
          marginBottom: "0px",
          marginRight: "0.25rem",
          backgroundColor: getColorCode(),
        }}
      ></div>
      <Show>
        <Show.When isTrue={isConnected && !errorMessage}>
          <span>Balance of ethereum: ${weiToEther(wallet?.balance)}</span>
        </Show.When>
        <Show.When isTrue={errorMessage}>
          <span>
            Error connecting the account. You should check the MetaMask
            extension.
          </span>
        </Show.When>
        <Show.Else isTrue={errorMessage}>
          <span>No account has been connected yet.</span>
        </Show.Else>
      </Show>
    </div>
  );
};

StatusAccount.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  wallet: PropTypes.object,
};

export default StatusAccount;

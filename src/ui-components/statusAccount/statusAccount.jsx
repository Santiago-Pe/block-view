import PropTypes from "prop-types";
import { weiToEther } from "../../helpers/helpers";

const StatusAccount = ({ isConnected, errorMessage, wallet }) => {
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
          backgroundColor: isConnected ? "#17B26A" : "red",
        }}
      ></div>
      {isConnected ? (
        <span>Balance of ethereum: ${weiToEther(wallet.balance)}</span>
      ) : (
        <p>{errorMessage ? errorMessage : "Error al conectar la cuenta"}</p>
      )}
    </div>
  );
};

StatusAccount.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  wallet: PropTypes.object,
};

export default StatusAccount;

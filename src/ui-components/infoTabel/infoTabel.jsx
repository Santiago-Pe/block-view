import PropTypes from "prop-types";
import Percentage from "../percentage/percentage";

const InfoTable = ({ info, symbol }) => {
  // Desestructuración del objeto info
  const {
    price_change_24h,
    high_24h,
    low_24h,
    total_volume,
    price_change_percentage_24h,
  } = info;

  return (
    <>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">Price Change (24h)</th>
            <th scope="col">Highest Price (24h)</th>
            <th scope="col">Lowest Price (24h)</th>
            <th scope="col">Total Volume (24h)</th>
            <th scope="col">Percentage Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>{price_change_24h}</td>
            <td>{high_24h[symbol]}</td>
            <td>{low_24h[symbol]}</td>
            <td>{total_volume[symbol]}</td>
            <td>
              <Percentage value={price_change_percentage_24h} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

InfoTable.propTypes = {
  info: PropTypes.shape({
    price_change_24h: PropTypes.number.isRequired,
    high_24h: PropTypes.number.isRequired,
    low_24h: PropTypes.number.isRequired,
    total_volume: PropTypes.number.isRequired,
    price_change_percentage_24h: PropTypes.number.isRequired,
  }).isRequired,
  symbol: PropTypes.string.isRequired,
};

export default InfoTable;

import PropTypes from "prop-types";

const Money = ({ amount, currency }) => {
  // Format the amount according to the specified currency
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);

  return <span>{formattedAmount}</span>;
};

Money.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default Money;

import PropTypes from "prop-types";

const Money = ({ amount, currency }) => {
  // Formatea el monto según la moneda especificada
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);

  return <span>{formattedAmount}</span>;
};

Money.propTypes = {
  amount: PropTypes.number.isRequired, // Monto a formatear
  currency: PropTypes.string.isRequired, // Moneda (por ejemplo, 'USD', 'EUR', etc.)
};

export default Money;

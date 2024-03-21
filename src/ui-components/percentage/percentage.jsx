import PropTypes from "prop-types";
import { convertToPercentage } from "../../helpers/helpers";

const Percentage = ({ value }) => {
  const percentage = convertToPercentage(value);
  const color = value < 0 ? "red" : "green";

  return (
    <p className="fw-semibold" style={{ color }}>
      {percentage}
    </p>
  );
};

Percentage.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Percentage;

import PropTypes from "prop-types";

const Title = ({ text, level, align = "center", customClass }) => {
  const Heading = `h${level}`;

  return (
    <Heading className={`my-3 text-${align} ${customClass}`}>{text}</Heading>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  align: PropTypes.string,
  customClass: PropTypes.string,
};

export default Title;

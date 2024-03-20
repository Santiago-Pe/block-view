import PropTypes from "prop-types";

const Title = ({ text, level }) => {
  const Heading = `h${level}`;

  return <Heading className="my-3">{text}</Heading>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

export default Title;

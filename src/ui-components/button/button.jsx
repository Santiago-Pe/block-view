import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ text, icon, onClick, disabled, size }) => {
  const buttonSizeClass = size ? styles[size] : "";

  return (
    <button
      className={`${styles.button} ${buttonSizeClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default Button;

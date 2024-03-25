import PropTypes from "prop-types";
import styles from "./error.module.css";

const ErrorComponent = ({ title, text }) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

ErrorComponent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default ErrorComponent;

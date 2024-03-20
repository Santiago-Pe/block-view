import PropTypes from "prop-types";
import styles from "./descriptionHTML.module.css";

const DescriptionHTML = ({ htmlString }) => {
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div
      className={styles.htmlContent}
      dangerouslySetInnerHTML={createMarkup(htmlString)}
    />
  );
};

DescriptionHTML.propTypes = {
  htmlString: PropTypes.string.isRequired,
};

export default DescriptionHTML;

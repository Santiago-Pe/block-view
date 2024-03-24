import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./breadcrumbs.module.css";

const BreadCrumbs = ({ crumbs }) => {
  if (crumbs.length === 0) {
    return null;
  }

  return (
    <div className="breadcrumb d-flex align-items-center m-0">
      <Link className={`${styles.breadcrumbItem} me-3`} to={"/"}>
        Home
      </Link>

      {crumbs.map(({ name, path, onClick, disabled = false }, key) =>
        key + 1 === crumbs.length ? (
          <span
            className={`${styles.breadcrumbItem} text-primary`}
            href="/"
            key={key}
          >
            {name}
          </span>
        ) : (
          <Link
            className={`${styles.breadcrumbItem} dark-grey  ${
              disabled ? "active cursor-normal" : ""
            }`}
            key={key}
            to={path}
            onClick={onClick}
          >
            {name}
          </Link>
        )
      )}
    </div>
  );
};

BreadCrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};

export default BreadCrumbs;

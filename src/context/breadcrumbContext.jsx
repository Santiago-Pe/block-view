import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

export const BreadCrumbContext = createContext();

export const BreadCrumbProvider = ({ children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const updateBreadcrumbs = (newBreadcrumbs) => {
    setBreadcrumbs(newBreadcrumbs);
  };

  return (
    <BreadCrumbContext.Provider value={{ breadcrumbs, updateBreadcrumbs }}>
      {children}
    </BreadCrumbContext.Provider>
  );
};

BreadCrumbProvider.propTypes = {
  children: PropTypes.node,
};

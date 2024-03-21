import { useContext, useEffect } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import { BreadCrumbContext } from "../context/breadcrumbContext";

const useCreateBreadCrumbs = (initialCrumbs, update) => {
  const { breadcrumbs, updateBreadcrumbs } = useContext(BreadCrumbContext);

  useEffect(() => {
    updateBreadcrumbs(initialCrumbs);
    return () => updateBreadcrumbs([]);
  }, [update]);

  return { breadcrumbs, updateBreadcrumbs };
};

useCreateBreadCrumbs.propTypes = {
  initialCrumbs: PropTypes.array.isRequired,
  update: PropTypes.any,
};

export default useCreateBreadCrumbs;

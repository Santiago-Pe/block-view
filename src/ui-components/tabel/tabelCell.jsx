import PropTypes from "prop-types";
//import styles from "./table.module.css";

const TableCell = ({ children, className, align = "center", style }) => {
  return (
    <td className={`${className ?? ""}`} align={align} style={style}>
      {children}
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node, // Contenido del componente
  className: PropTypes.string, // Clases CSS adicionales
  align: PropTypes.oneOf(["left", "center", "right"]), // Alineación del texto (izquierda, centrado, derecha)
  type: PropTypes.string, // Tipo de contenido
  style: PropTypes.object, // Estilos personalizados
  levelPadding: PropTypes.oneOf(["low", "normal"]), // Nivel de relleno del componente
};

export default TableCell;

import PropTypes from "prop-types";

function TableRow({
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
  index,
  className,
  type,
}) {
  return (
    <tr
      className={`table-row ${index % 2 === 0 ? "even" : "odd"} ${
        className ?? ""
      } ${type}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node, // Contenido del componente
  onMouseEnter: PropTypes.func, // Función al entrar el mouse
  onMouseLeave: PropTypes.func, // Función al salir el mouse
  onClick: PropTypes.func, // Función de clic
  index: PropTypes.number, // Índice del elemento en la lista
  className: PropTypes.string, // Clases CSS adicionales
  type: PropTypes.string, // Tipo de fila (por ejemplo, 'warning', 'expired', 'cancelled')
};

export default TableRow;

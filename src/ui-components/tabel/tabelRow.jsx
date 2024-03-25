import PropTypes from "prop-types";

function TableRow({ children, index, className, type }) {
  return (
    <tr
      className={`table-row ${index % 2 === 0 ? "even" : "odd"} ${
        className ?? ""
      } ${type}`}
    >
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default TableRow;

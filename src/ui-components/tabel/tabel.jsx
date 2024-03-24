import PropTypes from "prop-types";
import styles from "./tabel.module.css";

const Table = ({
  data,
  columns,
  renderRow,
  borderTop = true,
  borderContainer = false,
  header = "grey",
}) => {
  const renderHeaders = (columns) => {
    return columns.map((h, index) => (
      <th
        key={index}
        className={`${styles.sorting} text-center ${styles.textSidebarLink} ${
          h.center ? styles.textCenter : ""
        }`}
        tabIndex="0"
        style={{ cursor: h.filterable ? "pointer" : "auto" }}
        aria-controls="DataTables_Table_0"
        rowSpan="1"
        colSpan="1"
        aria-label={h.title ? h.title : h}
      >
        <span>{h}</span>
      </th>
    ));
  };

  return (
    <div className={`w-100 ${borderContainer ? styles.borderContainer : ""}`}>
      <div className={styles.datatableScroll}>
        <table
          className={`table ${styles.datatableBasic} dataTable no-footer ${
            borderContainer ? styles.showBorders : ""
          }`}
          role="grid"
          aria-describedby="DataTables_Table_0_info"
        >
          <thead className="">
            <tr
              className={`${styles.rowHeader} ${styles[`header-${header}`]} ${
                borderTop ? styles.withBorder : styles.noBorder
              }`}
            >
              {renderHeaders(columns)}
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((rowData, index) => renderRow(rowData, index))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className={`text-center ${styles.colorSubtitle}`}
                >
                  No hay información disponible.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired, // Datos a mostrar en la tabla
  columns: PropTypes.array.isRequired, // Columnas de la tabla
  renderRow: PropTypes.func.isRequired, // Función para renderizar una fila
  borderTop: PropTypes.bool, // Indica si la tabla debe tener borde superior (predeterminado: true)
  borderContainer: PropTypes.bool, // Indica si el contenedor de la tabla debe tener borde (predeterminado: false)
  header: PropTypes.string, // Color de fondo del encabezado de la tabla (predeterminado: 'grey')
};

export default Table;

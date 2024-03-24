import PropTypes from "prop-types";
import Percentage from "../percentage/percentage";
import { Money } from "../../components";

import { Table, TableCell, TableRow } from "../../ui-components";

const InfoTable = ({ info, symbol }) => {
  /*
price_change_24h,
    high_24h,
    low_24h,
    total_volume,
    price_change_percentage_24h,
*/
  return (
    <Table
      data={[info]}
      header="grey"
      columns={[
        "Price Change 24 hs",
        "High 24 hs",
        "Low 24 hs",
        "Total Volume",
        "Price Change Percetage 24 hs",
      ]}
      renderRow={(data, index) => (
        <>
          <TableRow key={index}>
            <TableCell style={{ width: "auto" }}>
              <Money amount={data?.price_change_24h} currency="usd" />
            </TableCell>
            <TableCell style={{ width: "auto" }}>
              <Money amount={data?.high_24h[symbol]} currency="usd" />
            </TableCell>
            <TableCell style={{ width: "auto" }}>
              <Money amount={data?.low_24h[symbol]} currency="usd" />
            </TableCell>
            <TableCell style={{ width: "auto" }}>
              <Money amount={data?.total_volume[symbol]} currency="usd" />
            </TableCell>
            <TableCell style={{ width: "auto" }}>
              <Percentage value={data?.price_change_percentage_24h} />
            </TableCell>
          </TableRow>
        </>
      )}
    />
  );
};

InfoTable.propTypes = {
  info: PropTypes.shape({
    price_change_24h: PropTypes.number.isRequired,
    high_24h: PropTypes.object.isRequired,
    low_24h: PropTypes.object.isRequired,
    total_volume: PropTypes.object.isRequired,
    price_change_percentage_24h: PropTypes.number.isRequired,
  }).isRequired,
  symbol: PropTypes.string.isRequired,
};

export default InfoTable;

import PropTypes from "prop-types";
import Percentage from "../percentage/percentage";
import { Money } from "../../components";

import { Table, TableCell } from "../../ui-components";

const InfoTable = ({ info, symbol = "usd" }) => {
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
      renderRow={(data) => (
        <>
          <TableCell style={{ width: "200px" }}>
            <Money amount={data?.price_change_24h} currency="usd" />
          </TableCell>
          <TableCell style={{ width: "200px" }}>
            <Money amount={data?.high_24h[symbol]} currency="usd" />
          </TableCell>
          <TableCell style={{ width: "200px" }}>
            <Money amount={data?.low_24h[symbol]} currency="usd" />
          </TableCell>
          <TableCell style={{ width: "200px" }}>
            <Money amount={data?.total_volume[symbol]} currency="usd" />
          </TableCell>
          <TableCell style={{ width: "200px" }}>
            <Percentage value={data?.price_change_percentage_24h} />
          </TableCell>
        </>
      )}
    />
  );
};

InfoTable.propTypes = {
  info: PropTypes.shape({
    price_change_24h: PropTypes.number,
    high_24h: PropTypes.object,
    low_24h: PropTypes.object,
    total_volume: PropTypes.object,
    price_change_percentage_24h: PropTypes.number,
  }),
  symbol: PropTypes.string,
};

export default InfoTable;

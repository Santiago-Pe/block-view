import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Money from "../money/money";

const Graphic = ({ data }) => {
  function transformChartData(mergedData) {
    const transformedData = mergedData.map((dataPoint) => ({
      name: dataPoint.timestamp,
      pv: dataPoint.price,
      uv: dataPoint.volume,
    }));
    return transformedData;
  }
  const dataChart = transformChartData(data);

  const CustomTooltip = (data) => {
    const { active, payload, label } = data;
    if (active && payload && payload?.length) {
      return (
        <div className="d-flex flex-column bg-white p-2 shadow rounded">
          <div>
            <span className="fw-semibold me-2">Hour:</span>
            <span className="label">{`${label}`}</span>
          </div>

          <div>
            <span className="fw-semibold me-2">Price:</span>
            <Money amount={payload[0].payload.pv} currency="usd" />
          </div>
          <div>
            <span className="fw-semibold me-2"> Volume:</span>

            <Money amount={payload[0].payload.uv} currency="usd" />
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <LineChart
        data={dataChart}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={["auto", "auto"]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="red" />
      </LineChart>
    </ResponsiveContainer>
  );
};

Graphic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string,
      price: PropTypes.number,
      volume: PropTypes.number,
    })
  ),
};

export default Graphic;

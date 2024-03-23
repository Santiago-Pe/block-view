import PropTypes from "prop-types";
import DescriptionHTML from "../descriptionHtml/descriptionHtml";
import { InfoTable, Title } from "../../ui-components";

const ContainerDetails = ({ data }) => {
  const { description, market_data, symbol } = data;

  return (
    <detail className="container-lg mt-4">
      <Title
        text="Detailed Information"
        customClass={"col-12"}
        level={4}
        align="start"
      />

      <InfoTable info={market_data} symbol={symbol} />
      <Title text="About Coin" customClass={"col-12"} level={4} align="start" />
      <DescriptionHTML htmlString={description.en} />
    </detail>
  );
};

ContainerDetails.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.object,
    market_data: PropTypes.object.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContainerDetails;

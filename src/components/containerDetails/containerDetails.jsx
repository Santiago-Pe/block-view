import PropTypes from "prop-types";
import DescriptionHTML from "../descriptionHtml/descriptionHtml";
import { InfoTable, Title } from "../../ui-components";
import Graphic from "../graphic/graphic";
import { mergeChartData } from "../../helpers/helpers";
import { useMobile } from "../../context/mobileContext";

const ContainerDetails = ({ data, graphic }) => {
  const { description, market_data, symbol, image } = data;
  const { market_caps, prices, total_volumes } = graphic;
  const { isMobile } = useMobile();
  const dataFormatted = mergeChartData(market_caps, prices, total_volumes);

  return (
    <article>
      <div className="d-flex justify-content-center  justify-content-md-start align-items-center mb-4">
        <div className="me-4">
          <img alt={symbol} src={isMobile ? image.thumb : image.small} />
        </div>
        <Title
          text="Detailed Information"
          customClass={""}
          level={4}
          align="start"
        />
      </div>
      <div className="my-4">
        <InfoTable info={market_data} />
      </div>
      <div className="my-4">
        <Title
          text="Prices Graphic"
          customClass={"col-12"}
          level={4}
          align="start"
        />
        <div className="d-flex justify-content-center my-3">
          <Graphic data={dataFormatted} />
        </div>
      </div>
      <div className="my-4">
        <Title
          text="About Coin"
          customClass={"col-12"}
          level={4}
          align="start"
        />
        <DescriptionHTML htmlString={description.en} />
      </div>
    </article>
  );
};

ContainerDetails.propTypes = {
  data: PropTypes.object,
  graphic: PropTypes.object,
};

export default ContainerDetails;

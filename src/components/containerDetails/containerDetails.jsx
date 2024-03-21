import PropTypes from "prop-types";
import DescriptionHTML from "../descriptionHtml/descriptionHtml";

const ContainerDetails = ({ data }) => {
  const {
    description,
    current_price,
    high_24h,
    low_24h,
    price_change_24h,
    total_volume,
  } = data;

  return (
    <detail>
      <DescriptionHTML htmlString={description.en} />
      <p>Precio Actual: ${current_price}</p>
      <p>Precio Máximo en las últimas 24 horas: ${high_24h}</p>
      <p>Precio Mínimo en las últimas 24 horas: ${low_24h}</p>
      <p>Variación de Precio en las últimas 24 horas: ${price_change_24h}</p>
      <p>Volumen de Mercado: ${total_volume}</p>
    </detail>
  );
};

ContainerDetails.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.object.isRequired,
    current_price: PropTypes.number.isRequired,
    high_24h: PropTypes.number.isRequired,
    low_24h: PropTypes.number.isRequired,
    price_change_24h: PropTypes.number.isRequired,
    total_volume: PropTypes.number.isRequired,
  }).isRequired,
};

export default ContainerDetails;

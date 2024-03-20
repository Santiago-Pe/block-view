import PropTypes from "prop-types";
import Title from "../../ui-components/title/title";
import style from "./item.module.css";
import { Link } from "react-router-dom";
import { Percentage } from "../../ui-components";

const Item = ({ data }) => {
  const {
    name,
    symbol,
    image,
    price_change_24h,
    price_change_percentage_24h,
    id,
  } = data;

  return (
    <article className={`col-12 d-flex justify-content-center`}>
      <div
        className={`d-flex flex-column justify-content-center ${style.itemCard} p-2 p-md-4 my-2`}
      >
        <div
          className={`d-flex flex-row justify-content-between align-items-center `}
        >
          <div className="d-flex flex-row justify-content-between  align-items-center">
            <div className="me-2">
              <img alt={name} src={image} className={style.imageItem} />
            </div>
            <div className="text-start">
              <Title text={name} level={3} />
              <span>{symbol}</span>
            </div>
          </div>
          <div className="text-end">
            <p className="fw-semibold">${price_change_24h}</p>
            <Percentage value={price_change_percentage_24h} />
          </div>
        </div>
        <div className="text-end">
          <Link to={`/details/${id}`} className={style.itemLink}>
            More Details
          </Link>
        </div>
      </div>
    </article>
  );
};

Item.propTypes = {
  data: PropTypes.object,
};

export default Item;

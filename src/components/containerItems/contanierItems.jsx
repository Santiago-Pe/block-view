import PropTypes from "prop-types";
import { Item } from "../../components";

const ContainerItems = ({ data }) => {
  return (
    <section className="container-fluid">
      <div className="row align-items-center">
        {data && data.map((item) => <Item key={item.id} data={item} />)}
      </div>
    </section>
  );
};

ContainerItems.propTypes = {
  data: PropTypes.array,
};

export default ContainerItems;

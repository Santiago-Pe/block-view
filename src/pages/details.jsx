import { useQuery } from "@tanstack/react-query";
import { getCryptoDetails } from "../services/services";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { ContainerDetails, Show } from "../components";
import { Title } from "../ui-components";

const Details = () => {
  const { id } = useParams();

  const cryptoDetailsQuery = useQuery({
    queryKey: ["crypto-details", id],
    queryFn: () => getCryptoDetails(id),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: true,
    retry: false,
    onSucces: (data) => console.log(data),
  });

  const { name } = cryptoDetailsQuery.data || { name: "Coin" };

  return (
    <section className="container-fluid">
      <Show>
        <Show.When isTrue={cryptoDetailsQuery.isLoading}>
          <div>Cargando...</div>
        </Show.When>
        <Show.When
          isTrue={cryptoDetailsQuery.isError || !cryptoDetailsQuery.data}
        >
          <div>Error</div>
        </Show.When>
        <Show.Else>
          <Title text={`${name} Details`} level={2} />
          <ContainerDetails data={cryptoDetailsQuery?.data} />
        </Show.Else>
      </Show>
    </section>
  );
};
Details.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;

import { useQuery } from "@tanstack/react-query";
import { getCryptoDetails, getCryptoDetailsChart } from "../services/services";
import { useParams } from "react-router-dom";
import { ContainerDetails, Show } from "../components";
import { Loading, Title } from "../ui-components";
import useCreateBreadCrumbs from "../hooks/useCreateBreadCrumbs";
import { useSelector } from "react-redux";

const Details = () => {
  const { id } = useParams();
  const endpointState = useSelector((state) => state.appReducer.isActive);

  const cryptoDetailsQuery = useQuery({
    queryKey: ["crypto-details", id],
    queryFn: () => getCryptoDetails(id),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: endpointState,
    retry: false,
    //onSucces: (data) => console.log(data),
  });
  const cryptoDetailsChartQuery = useQuery({
    queryKey: ["crypto-chart", id],
    queryFn: () => getCryptoDetailsChart(id),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: endpointState,
    retry: false,
    //onSucces: (data) => console.log(data),
  });

  const { name } = cryptoDetailsQuery.data || { name: "Coin" };
  useCreateBreadCrumbs([{ name: `Details of ${name}` }]);

  return (
    <section className="container-fluid">
      <Show>
        <Show.When
          isTrue={
            cryptoDetailsQuery.isLoading || cryptoDetailsChartQuery.isLoading
          }
        >
          <Loading />
        </Show.When>
        <Show.When
          isTrue={
            cryptoDetailsQuery.isError ||
            !cryptoDetailsQuery.data ||
            cryptoDetailsChartQuery.isError
          }
        >
          <div>Error</div>
        </Show.When>
        <Show.Else>
          <Title text={`${name} Details`} level={2} />
          <ContainerDetails
            data={cryptoDetailsQuery?.data}
            graphic={cryptoDetailsChartQuery?.data}
          />
        </Show.Else>
      </Show>
    </section>
  );
};

export default Details;

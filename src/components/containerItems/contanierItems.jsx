import { Item, Show } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getCryptos } from "../../services/services";
import { ErrorComponent, Loading } from "../../ui-components";
import { useSelector } from "react-redux";

const ContainerItems = () => {
  const endpointState = useSelector((state) => state.appReducer.isActive);
  const cryptosQuery = useQuery({
    queryKey: ["cryptos"],
    queryFn: () => getCryptos("usd"),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: endpointState,
    retry: false,
  });

  const { data, isLoading, isError } = cryptosQuery;

  return (
    <section className="container-fluid">
      <Show>
        <Show.When isTrue={isLoading}>
          <Loading />
        </Show.When>
        <Show.When isTrue={isError || !endpointState}>
          <ErrorComponent
            title="Error fetching data"
            text="We encountered issues while fetching the necessary information. Please try again later."
          />
        </Show.When>
        <Show.Else>
          <div className="row align-items-center">
            {data?.map((item) => (
              <Item key={item.id} data={item} />
            ))}
          </div>
        </Show.Else>
      </Show>
    </section>
  );
};

export default ContainerItems;

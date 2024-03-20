import { Item, Show } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getCryptos } from "../../services/services";

const ContainerItems = () => {
  const cryptosQuery = useQuery({
    queryKey: ["cryptos"],
    queryFn: () => getCryptos("usd"),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: true,
    retry: false,
  });

  const { data, isLoading, isError } = cryptosQuery;

  return (
    <section className="container-fluid">
      <Show>
        <Show.When isTrue={isLoading}>
          <div>Loading</div>
        </Show.When>
        <Show.When isTrue={isError}>
          <div>Error al obtener los datos</div>
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

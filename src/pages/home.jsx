import { useSelector } from "react-redux";
import { ContanierItems, Show } from "../components";
import { useQuery } from "@tanstack/react-query";
import { getCryptos } from "../services/services";
import { ErrorComponent, Loading, Title } from "../ui-components";

const Home = () => {
  const endpointState = useSelector((state) => state.app.isActive);
  const isConnectingAccount = useSelector((state) => state.user.isConnecting);

  // Query Apis
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
    <section className="py-4 px-2">
      <Show>
        <Show.When isTrue={isLoading || isConnectingAccount}>
          <Loading />
        </Show.When>
        <Show.When isTrue={isError || !endpointState}>
          <ErrorComponent
            title="Error fetching data"
            text="We encountered issues while fetching the necessary information. Please try again later."
          />
        </Show.When>
        <Show.Else>
          <Title text="Top 10 Coins" level={1} />
          <ContanierItems data={data} />
        </Show.Else>
      </Show>
    </section>
  );
};

export default Home;

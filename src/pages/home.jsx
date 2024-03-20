import { useQuery } from "@tanstack/react-query";
import { checkEndpointStatus } from "../services/services";
import { ContanierItems, Show } from "../components";
import Title from "../ui-components/title/title";

const Home = () => {
  const endpointStatusQuery = useQuery({
    queryKey: ["enpoint"],
    queryFn: () => checkEndpointStatus(),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    enabled: true,
    retry: false,
  });
  const { isLoading, isError } = endpointStatusQuery;
  return (
    <>
      <main className="py-4 px-2">
        <Show>
          <Show.When isTrue={isLoading}>
            <div>Loading</div>
          </Show.When>
          <Show.When isTrue={isError}>
            <div>Error al conecatar el endpoint</div>
          </Show.When>
          <Show.Else>
            <Title text="Top 10 Coins" level={1} />
            <ContanierItems />
          </Show.Else>
        </Show>
      </main>
    </>
  );
};

export default Home;
